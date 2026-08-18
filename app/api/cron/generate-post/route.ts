import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { Resend } from 'resend';
import { getLocalPhotoPool, pickPhotoForSlug } from '@/lib/local-photos';
import { sanitizeHtml } from '@/lib/sanitize-html';

// Two grounded web-search research passes plus a full article generation can
// exceed 60s combined, and web search duration varies a lot run-to-run
// depending on how many searches Claude decides to run. The project is on
// Vercel Pro, which supports much longer Serverless Function durations than
// the original 60s comment assumed — set generously to absorb that variance.
export const maxDuration = 180;

// Resend throws from its constructor when the key is missing, which turns a
// missing or rotated env var into a hard build failure for the whole site
// rather than a failure of this one route. Construct it lazily instead.
function getResend() {
    return new Resend(process.env.RESEND_API_KEY)
}
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

const TOPICS = [
  "How to Choose the Right Dumpster Size for a Home Remodel in Jackson, MS",
  "Dumpster Rental vs. Junk Removal in Central Mississippi: Which is Better?",
  "What Items Are Prohibited in Roll-Off Dumpsters in Rankin County?",
  "The Ultimate Guide to Estate Cleanouts and Dumpster Rentals in MS",
  "Spring Cleaning Checklist for Jackson Homeowners: Getting the Most Out of Your Dumpster",
  "Understanding Dumpster Weight Limits and Overage Fees in Mississippi",
  "Roofing Contractor Guide to Efficient Debris Removal in Hinds County",
  "How to Prepare Your Driveway for a Roll-Off Dumpster Delivery",
  "Same-Day Dumpster Rentals in Jackson, MS: What You Need to Know",
  "A Guide to Commercial Dumpster Rentals for Madison County Businesses",
  "How to Safely Dispose of Appliances and Mattresses in Central MS",
  "Yard Waste Removal Tips for Jackson, MS Residents",
  "The Environmental Benefits of Responsible Debris Disposal in Mississippi",
  "How to Rent a Dumpster for Storm Cleanup in Central MS",
];

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      if (txt === txt.toUpperCase() && txt.length > 1) return txt; // Preserve acronyms like MS
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export async function GET(request: Request) {
  // Cron authentication — fails CLOSED if CRON_SECRET is not configured
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }


  try {
    // Calls Claude's Messages API. When useSearch is true, gives Claude its
    // native web_search server tool (capped via max_uses) so the response is
    // grounded in real, current search results instead of pure training-data
    // recall — used for the research passes, not the final writing pass.
    async function callClaude(systemPrompt: string, userPrompt: string, maxTokens: number, useSearch: boolean = false) {
        if (!ANTHROPIC_API_KEY) {
            throw new Error("ANTHROPIC_API_KEY is not configured in environment variables.");
        }

        const body: Record<string, any> = {
            model: 'claude-sonnet-5',
            max_tokens: maxTokens,
            system: systemPrompt,
            messages: [{ role: 'user', content: userPrompt }],
        };

        if (useSearch) {
            body.tools = [{
                type: 'web_search_20260209',
                name: 'web_search',
                // Bounds worst-case latency (and cost) per research call —
                // enough searches for solid grounding without letting Claude
                // run an open-ended number of queries on a slow run.
                max_uses: 3,
            }];
        }

        const res = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01',
            },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            throw new Error(`Claude API error: ${res.status} ${await res.text()}`);
        }

        const data = await res.json();
        // With web search enabled, content can interleave text, server_tool_use,
        // and web_search_tool_result blocks — join just the text blocks to get
        // Claude's final written answer.
        const blocks: any[] = data.content || [];
        return blocks
            .filter((block) => block.type === 'text')
            .map((block) => block.text)
            .join('\n')
            .trim();
    }

    // 1. Pick a random topic that hasn't been written yet
    const { rows: existingPosts } = await sql`SELECT title FROM blog_posts`;
    const existingTitles = new Set(existingPosts.map(p => p.title.toLowerCase()));

    const availableTopics = TOPICS.filter(t => !existingTitles.has(t.toLowerCase()));

    let selectedTopic;

    if (availableTopics.length === 0) {
      // Fallback: If all are used, we ask Claude to generate a brand new hyper-local topic
      const generated = await callClaude(
          `You are an SEO expert for a dumpster rental company in Jackson, Mississippi. Generate ONE unique, highly engaging blog post title about dumpster rental, junk removal, or waste disposal in Central MS.

          STRICT CONSTRAINTS:
          1. DO NOT mention concrete, dirt, or heavy asphalt disposal.
          2. DO NOT mention 30-yard or 40-yard dumpsters.
          3. The title MUST be formatted in proper grammatically correct Title Case (e.g. "Understanding Dumpster Weight Limits and Overage Fees in Mississippi").`,
          "Generate a new blog post title.",
          150
      );
      selectedTopic = generated ? generated.replace(/["']/g, '').trim() : "Dumpster Rental Guide for Central MS";
    } else {
      selectedTopic = availableTopics[Math.floor(Math.random() * availableTopics.length)];
    }

    // Apply title casing immediately so all references are correct
    selectedTopic = toTitleCase(selectedTopic || "Dumpster Rental Guide for Central MS");

    const slug = generateSlug(selectedTopic);

    // 2. Research — general and local passes run concurrently since neither
    // depends on the other's output. Both are grounded in live web search.
    const [generalResearch, localResearch] = await Promise.all([
        callClaude(
            "You are a research assistant helping write an accurate, substantive blog article. Use web search to gather real, current, factual background information on the given topic — industry best practices, concrete how-to steps, relevant facts and figures, and the questions people commonly ask. Present findings as specific, concrete bullet points, not vague generalities. Do not write a blog post — only research notes.",
            `Topic: ${selectedTopic}`,
            1000,
            true
        ),
        callClaude(
            "You are a local research assistant for Mid South Dumpster Rentals, based in Jackson, Mississippi. Use web search to find SPECIFIC, VERIFIABLE facts relevant to this topic for the Jackson, MS / Rankin County / Hinds County / Madison County, Central Mississippi area — for example real local landfill or transfer station names, county-specific permit or ordinance requirements, local climate or seasonal considerations, or relevant local regulations. Present findings as bullet points. If you cannot find genuinely local, verifiable information for this topic, say so plainly rather than inventing anything — never fabricate business names, regulations, or statistics. Do not write a blog post — only research notes.",
            `Topic: ${selectedTopic}`,
            1000,
            true
        ),
    ]);

    // 3. Generate the article using Claude Sonnet 5, grounded in both research passes
    const systemPrompt = `You are an expert SEO copywriter for Mid South Dumpster Rentals based in Jackson, MS.
      Write a highly engaging, long-form, SEO-optimized blog post in HTML format based on the provided topic and research notes.

      Requirements:
      - Return ONLY raw HTML (no markdown code blocks, no \`\`\`html).
      - Do NOT include <h1> tags (the site template provides the <h1> title).
      - Use <h2> and <h3> tags for structuring the content.
      - Use short paragraphs, bullet points, and bold text for readability.
      - Naturally weave in local keywords: Jackson, Brandon, Clinton, Madison, Rankin County, Hinds County, roll-off dumpster, waste management.
      - Write in a professional, direct, and helpful tone.
      - Use the research notes provided in the user message to make the article substantive and specific rather than generic — real facts, real local details, concrete steps. Do not just restate the notes as a list; weave them into the prose.
      - End with a strong call-to-action to rent a dumpster from Mid South Dumpster Rentals (Call 601-316-7891 or book online).

      STRICT COMPANY RULES & FACTS (NEVER INVENT INFORMATION, ONLY USE THESE FACTS — these always override anything in the research notes if there's ever a conflict):
      - Dumpster Sizes Offered: ONLY 10-yard, 15-yard, and 20-yard dumpsters. DO NOT mention 30-yard or 40-yard dumpsters.
      - Weight Limits & Overage:
        * 10-yard: Includes 1 ton (2,000 lbs). Overage: $55 per ton.
        * 15-yard: Includes 2 tons (4,000 lbs). Overage: $55 per ton.
        * 20-yard: Includes 3 tons (6,000 lbs). STRICT LIMIT. NO overage allowed.
      - Maximum Weight: NO load in ANY container may exceed 6,000 pounds.
      - Rental Period: Base rental covers 1-7 days. Extensions are $50 per additional day.
      - Prohibited Items (DO NOT TELL CUSTOMERS THEY CAN DUMP THESE): Hazardous wastes, paints, stain, solvents, chemicals, oil, fuels, epoxy, asbestos, batteries, barrels, pesticides, food waste, liquids, freezers, refrigerators, HVAC units, pressurized vessels, tires, electronics, refrigerant appliances, medical waste, TVs, computers, motor oil, gas/diesel fuel, oil filters, fluorescent bulbs, railroad ties, radioactive materials.
      - Permitted Items: Household trash, furniture, general construction debris, appliances (non-refrigerated), yard clippings.
      - Heavy Debris Rule: Concrete, stone, and brick are highly restricted due to the 6,000 lb limit and require prior approval. DO NOT write posts promoting heavy concrete or dirt removal.
      - Fees: Missed pickup/inaccessible fee is $150. Wait time is $50/hour. Overweight refusal fee is $500.
      - Length: Aim for 800 to 1200 words. Keep it concise, punchy, and do not exceed this length so it does not cut off mid-sentence.`;

    const contentUserPrompt = `Topic: ${selectedTopic || "Dumpster Rental"}

GENERAL RESEARCH NOTES:
${generalResearch || "No additional research available — write from general industry knowledge."}

LOCAL CENTRAL MISSISSIPPI RESEARCH NOTES:
${localResearch || "No additional local research available."}

Only use factual claims that come from the research notes above or the STRICT COMPANY RULES & FACTS in the system prompt — do not invent statistics, business names, regulations, or facts not present in either.`;

    let contentHtml = await callClaude(systemPrompt, contentUserPrompt, 4000);
    if (!contentHtml) contentHtml = '<p>Content generation failed.</p>';

    // Clean up any markdown code block wrappers if Claude accidentally includes them
    contentHtml = contentHtml.replace(/^```html\n?/, '').replace(/\n?```$/, '').trim();

    // Sanitize the generated HTML to prevent XSS
    contentHtml = sanitizeHtml(contentHtml);

    // Generate a short excerpt
    const excerpt = await callClaude(
        "You are an SEO expert. Write a compelling 2-sentence meta description / excerpt for this article. Return only the text.",
        `Topic: ${selectedTopic}\nContent: ${contentHtml.substring(0, 500)}...`,
        400
    ) || 'Expert dumpster rental tips for Central Mississippi.';

    // 4. Assign an image
    const photoPool = getLocalPhotoPool();
    const imageUrl = pickPhotoForSlug(photoPool, slug) || '';

    // 5. Save to Database as DRAFT
    await sql`
      INSERT INTO blog_posts (slug, title, excerpt, content_html, image_url, status)
      VALUES (${slug}, ${selectedTopic || "Dumpster Rental Guide"}, ${excerpt}, ${contentHtml}, ${imageUrl}, 'DRAFT')
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        excerpt = EXCLUDED.excerpt,
        content_html = EXCLUDED.content_html,
        image_url = EXCLUDED.image_url,
        status = 'DRAFT'
    `;

    // 6. Send Approval Email via Resend
    const dashboardUrl = `https://midsouthdumpsterms.com/situationroom`;
    const resendResult = await getResend().emails.send({
      from: 'Mid South Blog Bot <onboarding@resend.dev>', // Resend free tier requires this verified domain or onboarding address
      to: 'midsouthdumpsterms@gmail.com', // Updated to the correct registered email
      subject: `🚨 Action Required: New Blog Post Draft - ${selectedTopic || "Dumpster Rental"}`,
      html: `
        <h2>A new SEO blog post is ready for your review!</h2>
        <p><strong>Title:</strong> ${selectedTopic || "Dumpster Rental"}</p>
        <p><strong>Excerpt:</strong> ${excerpt}</p>
        <br/>
        <a href="${dashboardUrl}" style="background-color:#E34F26;color:white;padding:12px 24px;text-decoration:none;border-radius:6px;font-weight:bold;display:inline-block;">Open Situation Room</a>
        <br/><br/>
        <p>Go to the Blog Manager tab to preview and approve this article.</p>
      `
    });

    if (resendResult.error) {
        throw new Error(`Resend API Error: ${resendResult.error.message}`);
    }

    return NextResponse.json({
        message: 'Post generated and saved as draft.',
        slug,
        title: selectedTopic || "Dumpster Rental"
    }, { status: 200 });

  } catch (error: any) {
    console.error('Cron job error:', error);
    return NextResponse.json({ error: 'Failed to generate post', details: error.message, stack: error.stack }, { status: 500 });
  }
}
