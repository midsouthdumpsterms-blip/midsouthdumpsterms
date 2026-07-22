import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { Resend } from 'resend';
import { getDrivePhotoPool, pickPhotoForSlug } from '@/lib/drive-photos';

// We allow this to run for up to 60 seconds (max for Vercel Hobby/Pro without bumping config)
export const maxDuration = 60;

const resend = new Resend(process.env.RESEND_API_KEY);
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

const TOPICS = [
  "How to choose the right dumpster size for a home remodel in Jackson MS",
  "Dumpster rental vs junk removal in Central Mississippi: Which is better?",
  "What items are prohibited in roll-off dumpsters in Rankin County?",
  "The ultimate guide to estate cleanouts and dumpster rentals in MS",
  "Spring cleaning checklist for Jackson homeowners: Getting the most out of your dumpster",
  "Understanding dumpster weight limits and overage fees in Mississippi",
  "Roofing contractor guide to efficient debris removal in Hinds County",
  "How to prepare your driveway for a roll-off dumpster delivery",
  "Same-day dumpster rentals in Jackson MS: What you need to know",
  "A guide to commercial dumpster rentals for Madison County businesses",
  "How to safely dispose of appliances and mattresses in Central MS",
  "Yard waste removal tips for Jackson MS residents",
  "The environmental benefits of responsible debris disposal in Mississippi",
  "How to rent a dumpster for storm cleanup in Central MS",
];

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export async function GET(request: Request) {
  // Simple cron authentication (Vercel sets a CRON_SECRET if configured, but we'll allow manual hits for now or check an auth header)
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;
  
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    // 1. Pick a topic that hasn't been written yet
    const { rows: existingPosts } = await sql`SELECT title FROM blog_posts`;
    const existingTitles = new Set(existingPosts.map(p => p.title.toLowerCase()));
    
    let selectedTopic = TOPICS.find(t => !existingTitles.has(t.toLowerCase()));
    
    async function callAnthropic(systemPrompt: string, userPrompt: string, maxTokens: number) {
        const res = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': ANTHROPIC_API_KEY || '',
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-5',
                max_tokens: maxTokens,
                system: systemPrompt,
                messages: [{ role: 'user', content: userPrompt }]
            })
        });
        if (!res.ok) {
            throw new Error(`Anthropic API error: ${res.status} ${await res.text()}`);
        }
        const data = await res.json();
        const textBlock = data.content.find((c: any) => c.type === 'text');
        return textBlock ? textBlock.text : '';
    }

    // Fallback: If all are used, we ask Anthropic to generate a brand new hyper-local topic
    if (!selectedTopic) {
        const generated = await callAnthropic(
            `You are an SEO expert for a dumpster rental company in Jackson, Mississippi. Generate ONE unique, highly engaging blog post title about dumpster rental, junk removal, or waste disposal in Central MS.
            
            STRICT CONSTRAINTS:
            1. DO NOT mention concrete, dirt, or heavy asphalt disposal.
            2. DO NOT mention 30-yard or 40-yard dumpsters.`,
            "Generate a new blog post title.",
            150
        );
        selectedTopic = generated ? generated.replace(/["']/g, '').trim() : "Dumpster Rental Guide for Central MS";
    }

    const slug = generateSlug(selectedTopic || "Dumpster Rental Guide for Central MS");

    // 2. Generate the article using Claude Sonnet 5
    const systemPrompt = `You are an expert SEO copywriter for Mid South Dumpster Rentals based in Jackson, MS. 
      Write a highly engaging, long-form, SEO-optimized blog post in HTML format based on the provided topic. 
      
      Requirements:
      - Return ONLY raw HTML (no markdown code blocks, no \`\`\`html).
      - Do NOT include <h1> tags (the site template provides the <h1> title).
      - Use <h2> and <h3> tags for structuring the content.
      - Use short paragraphs, bullet points, and bold text for readability.
      - Naturally weave in local keywords: Jackson, Brandon, Clinton, Madison, Rankin County, Hinds County, roll-off dumpster, waste management.
      - Write in a professional, direct, and helpful tone.
      - End with a strong call-to-action to rent a dumpster from Mid South Dumpster Rentals (Call 601-316-7891 or book online).
      
      STRICT COMPANY RULES & FACTS (NEVER INVENT INFORMATION, ONLY USE THESE FACTS):
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
      - Fees: Missed pickup/inaccessible fee is $150. Wait time is $50/hour. Overweight refusal fee is $500.`;

    let contentHtml = await callAnthropic(systemPrompt, `Topic: ${selectedTopic || "Dumpster Rental"}`, 2500);
    if (!contentHtml) contentHtml = '<p>Content generation failed.</p>';
    
    // Clean up any markdown code block wrappers if Claude accidentally includes them
    contentHtml = contentHtml.replace(/^```html\n?/, '').replace(/\n?```$/, '').trim();

    // Generate a short excerpt
    const excerpt = await callAnthropic(
        "You are an SEO expert. Write a compelling 2-sentence meta description / excerpt for this article. Return only the text.",
        `Topic: ${selectedTopic}\nContent: ${contentHtml.substring(0, 500)}...`,
        100
    ) || 'Expert dumpster rental tips for Central Mississippi.';

    // 3. Assign an image from the Drive Pool
    const photoPool = await getDrivePhotoPool();
    const customPhoto = pickPhotoForSlug(photoPool, slug) || '';

    // 4. Save to Database as DRAFT
    await sql`
      INSERT INTO blog_posts (slug, title, excerpt, content_html, image_url, status)
      VALUES (${slug}, ${selectedTopic || "Dumpster Rental Guide"}, ${excerpt}, ${contentHtml}, ${customPhoto}, 'DRAFT')
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        excerpt = EXCLUDED.excerpt,
        content_html = EXCLUDED.content_html,
        image_url = EXCLUDED.image_url,
        status = 'DRAFT'
    `;

    // 5. Send Approval Email via Resend
    const previewUrl = `https://midsouthdumpsterms.com/admin/preview/${slug}`;
    const resendResult = await resend.emails.send({
      from: 'Mid South Blog Bot <onboarding@resend.dev>', // Resend free tier requires this verified domain or onboarding address
      to: 'midsouthdumpsterms@gmail.com', // Updated to the correct registered email
      subject: `🚨 Action Required: New Blog Post Draft - ${selectedTopic || "Dumpster Rental"}`,
      html: `
        <h2>A new SEO blog post is ready for your review!</h2>
        <p><strong>Title:</strong> ${selectedTopic || "Dumpster Rental"}</p>
        <p><strong>Excerpt:</strong> ${excerpt}</p>
        <br/>
        <a href="${previewUrl}" style="background-color:#E34F26;color:white;padding:12px 24px;text-decoration:none;border-radius:6px;font-weight:bold;display:inline-block;">Preview & Approve Article</a>
        <br/><br/>
        <p>If you approve it on the preview page, it will instantly go live on your site.</p>
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

  } catch (error) {
    console.error('Cron job error:', error);
    return NextResponse.json({ error: 'Failed to generate post' }, { status: 500 });
  }
}
