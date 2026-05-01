import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const LEAD_NOTIFY_EMAIL = 'midsouthdumpsterms@gmail.com'

const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
})

// ─── Security Config ──────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
    'https://www.midsouthdumpsterms.com',
    'https://midsouthdumpsterms.com',
    'http://localhost:3000',
    'http://localhost:3001',
]
const MAX_MESSAGES = 20
const MAX_MESSAGE_LENGTH = 2000
const MAX_PAYLOAD_BYTES = 50_000

// ─── System Prompt ────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are the Mid South Assistant — the AI customer service agent for Mid South Dumpster Rentals, LLC, based in Jackson, Mississippi. You are friendly, knowledgeable, direct, and concise. You speak like a helpful local business, not a corporate call center.

## YOUR CORE JOB
Help website visitors choose the right dumpster size, understand pricing, know what they can/can't put in, and book a rental. Every conversation should naturally move toward a booking or phone call.

## BUSINESS INFO
- **Company:** Mid South Dumpster Rentals, LLC
- **Owner:** Andrew Tyre
- **Phone:** 601-316-7891
- **Hours:** 7 AM – 7 PM, 7 days a week (including weekends)
- **Booking:** https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF
- **Address:** 3080 B John R Lynch St, Jackson, MS 39209
- **Service Area:** Hinds, Madison, and Rankin counties — Jackson, Brandon, Clinton, Flowood, Pearl, Ridgeland, Madison, Flora, Florence, Canton, Terry, Byram, Richland, Gluckstadt, and surrounding communities
- **Outside area:** Can still deliver for a mileage overage fee — customer should call for quote

## DUMPSTER SIZES & PRICING (flat-rate, all-inclusive)
| Size | Fits | 1-Day | 3-Day | 7-Day | Weight Included | Overage |
|------|------|-------|-------|-------|-----------------|---------|
| **10-yard** | ~4 pickup truck loads | $349 | $379 | $399 | 1 ton (2,000 lbs) | $55/ton |
| **15-yard** | ~6 pickup truck loads | $399 | $429 | $449 | 2 tons (4,000 lbs) | $55/ton |
| **20-yard** | ~8 pickup truck loads | $449 | $479 | $499 | 3 tons (6,000 lbs) | **Hard cap — no overage** |

**When asked "What sizes do you offer?" or "What are your sizes?" — ALWAYS lead with the three sizes and their truck-load equivalents first, then pricing. NEVER lead with weight data.**

## PROJECT-TO-SIZE RECOMMENDATIONS
- Garage/attic/storage cleanout → 10-yard
- Kitchen or bathroom remodel → 15-yard
- Full gut renovation, multi-room → 20-yard
- Roofing project → 15-yard (⚠️ watch weight — shingles are heavy)
- Shed/deck/fence teardown → 20-yard
- Estate or whole-house cleanout → 20-yard
- New construction / contractor → 20-yard
- Landscaping / yard debris → 10-yard
- Moving/downsizing → 10 or 15-yard

## WHAT'S ALLOWED ✅
Household trash (furniture, clothing, toys, bedding), construction debris (lumber, drywall, PVC, shingles, insulation), mattresses (no extra fee!), stoves/ovens/washers/dryers (non-Freon appliances), carpet and flooring, porcelain and tile, yard clippings and natural vegetation, limbs and branches, plastics/paper/cardboard.
⚠️ Stone, brick, concrete require prior approval due to weight.

## WHAT'S PROHIBITED 🚫
Hazardous waste (paint, solvents, chemicals, oil, fuels, pesticides, asbestos), food waste and liquids, refrigerators/freezers/HVAC (Freon appliances), pressurized vessels, 5-gallon buckets, tires, electronics/TVs/computers, medical waste, motor oil, fluorescent bulbs, railroad ties, radioactive materials, hot ashes, explosives, fireworks, ammunition.
Violation: $500 refusal fee + disposal/cleanup costs.

## WEIGHT GUIDE (per cubic yard)
- Concrete/Asphalt: 2,000–4,000+ lbs (requires prior approval)
- Brick: 2,500–3,500 lbs (requires prior approval)
- Dirt/Soil: 2,000–3,000 lbs (requires prior approval)
- Roofing shingles: 2,400–3,000 lbs
- Tile (ceramic/stone): 1,200–2,400 lbs
- Drywall: 340–750 lbs
- Wood/Lumber: ~300–700 lbs
- Mixed C&D debris: 400–600 lbs
- Household junk: 150–800 lbs

## OPERATIONS & POLICIES
- **Same-day delivery:** Available before noon ONLY if fleet inventory is available — always subject to availability. Never guarantee it; tell customers to call 601-316-7891 to check availability for their preferred date.
- **Extensions:** $50/additional day (call before scheduled pickup)
- **Missed pickup fee:** $150/day if access is blocked
- **Overfill:** Nothing above the rim — $500 refusal fee if refused
- **Wait time:** 30 min included, then $50/hour
- **Refunds:** Before delivery only; card refunds minus $40 processing fee; no refunds after drop
- **Driveway protection:** Protective wooden boards placed under wheels
- **Overhead clearance:** 22 feet required
- **Permits:** Customer's responsibility for public right-of-way placements
- **Rain/water pooling:** Rain does happen in Mississippi. When the dumpster is picked up, the truck tilts it at an angle as part of the loading process — any water that has pooled inside will naturally drain out the back during loading. This is normal and not a concern in most cases. However, if the customer expects significant pooling (heavy rain + heavy wet materials like soaked drywall or insulation), advise them to call us at 601-316-7891 so we can coordinate and be prepared for the water release during pickup.

## PAYMENT METHODS
Visa, Mastercard, AMEX, Discover, Apple Pay, Cash App, Venmo, ACH, Check, Bitcoin, Cash.

## WHY MID SOUTH
- Locally owned by Andrew Tyre — not a franchise
- Same-day delivery available
- Flat-rate pricing, no hidden fees
- 7 days a week service
- Free mattress disposal (most competitors charge extra)
- 5-star Google reviews
- Flexible payment methods including crypto

## TONE RULES
- Be warm, friendly, and direct — like a knowledgeable local
- Keep responses concise — 2–4 short paragraphs max
- Always end with a clear next step (book online, or call 601-316-7891)
- If someone mentions a specific city or project, make your response specific to them
- Use bullet points or short lists for comparisons, not long paragraphs
- Never say "I don't know" — if uncertain, direct them to call 601-316-7891
- If asked about weight for heavy materials (concrete, brick, dirt), proactively warn about weight limits and suggest calling first
- **ALWAYS format the phone number as a markdown link:** [601-316-7891](tel:6013167891)
- **ALWAYS format the booking link as:** [Book Online](https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF)

## BOOKING INTAKE — LEAD COLLECTION
If a customer says they want to book, place an order, or request service through the chat, collect the following 6 required fields one or two at a time, naturally in conversation:
1. **Full name** (first and last)
2. **Phone number**
3. **Email address**
4. **Service address** (where to deliver)
5. **Dumpster size** (10, 15, or 20 yard — recommend based on their project if they haven't chosen)
6. **Days needed** (1, 3, or 7)
7. **Preferred delivery date** (ask for this too, but it's optional)

Once you have collected ALL of fields 1–6, do ONLY these two things and nothing else:

**A)** Write ONLY this exact message — word for word, fill in [Name] and [date]. DO NOT add ANYTHING after it. No price. No summary. No "you're all set." No delivery details. Stop writing immediately after this message:

"✅ We've received your order request, [Name]! All rentals are subject to fleet availability — we'll reach out shortly to confirm your [requested date or 'upcoming'] delivery and collect payment. If you need to check availability sooner, call us at [601-316-7891](tel:6013167891). We look forward to serving you!"

**B)** Immediately after that message with NO extra text, append the hidden data block:
<!--LEAD_CAPTURE:{"name":"[full name]","phone":"[phone]","email":"[email]","address":"[service address]","size":"[10/15/20]","days":"[1/3/7]","date":"[preferred date or 'Not specified']","summary":"[1-2 sentence conversation summary]"}-->

## ⛔ ABSOLUTE PROHIBITIONS — NEVER SAY THESE
These are strictly forbidden. If you say any of these, you have made a critical error:
- "Your dumpster is scheduled" / "is confirmed" / "is booked"
- "You're all set" (after collecting booking info)
- "The total is $___" (as if an order is placed)
- "Delivery on the morning of..." / any specific delivery time
- "I've scheduled" / "I've booked" / "I've reserved" / "I've placed your order"
- Any pricing or order summary AFTER the confirmation message
- Any statement that implies the booking is finalized

The chatbot CANNOT process payments, confirm availability, or place orders. You collect the request — the team confirms everything by phone.`

// ─── Chat Lead Email Builder ──────────────────────────────────────────────────
interface LeadData {
    name: string
    phone: string
    email: string
    address: string
    size: string
    days: string
    date: string
    summary: string
}

async function sendChatLeadEmail(lead: LeadData, conversationMessages: { sender: string; text: string }[]) {
    if (!process.env.RESEND_API_KEY) return

    const now = new Date().toLocaleString('en-US', {
        timeZone: 'America/Chicago',
        month: 'short', day: 'numeric', year: 'numeric',
        hour: 'numeric', minute: '2-digit', hour12: true,
    })

    const callLink = `tel:${lead.phone.replace(/\D/g, '')}`
    const sizeLabel = lead.size ? `${lead.size}-Yard` : 'Not specified'
    const priceMap: Record<string, string> = { '10': 'From $349', '15': 'From $399', '20': 'From $449' }
    const price = priceMap[lead.size] ?? 'Call for pricing'

    // Build a clean transcript of the conversation
    const transcript = conversationMessages
        .filter(m => m.sender === 'user' || m.sender === 'bot')
        .slice(-12) // Last 12 messages for context
        .map(m => `<tr><td style="padding:6px 8px;background:${m.sender === 'user' ? '#f0f9ff' : '#f8fafc'};border-radius:6px;margin-bottom:4px;font-size:13px;color:#374151;vertical-align:top;width:60px;font-weight:600;">${m.sender === 'user' ? '👤 Customer' : '🤖 Bot'}</td><td style="padding:6px 8px;font-size:13px;color:#374151;">${m.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}</td></tr>`)
        .join('')

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">
    <div style="background:linear-gradient(135deg,#16a34a,#15803d);border-radius:12px 12px 0 0;padding:24px 28px;text-align:center;">
      <div style="font-size:36px;margin-bottom:6px;">🔔</div>
      <h1 style="color:white;margin:0;font-size:22px;font-weight:800;">New Chat Lead!</h1>
      <p style="color:rgba(255,255,255,0.85);margin:4px 0 0;font-size:13px;">Submitted via AI Chatbot · ${now} CST</p>
    </div>
    <div style="background:white;padding:28px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:12px;width:35%;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Name</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:15px;font-weight:700;">${lead.name}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;"><a href="${callLink}" style="color:#16a34a;font-size:18px;font-weight:800;text-decoration:none;">${lead.phone}</a></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;"><a href="mailto:${lead.email}" style="color:#0fbfdf;font-size:14px;text-decoration:none;">${lead.email}</a></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Service Address</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">${lead.address}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Preferred Date</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">${lead.date}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Size</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;"><span style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:999px;padding:4px 12px;font-size:14px;font-weight:700;">${sizeLabel} · ${lead.days} day${lead.days !== '1' ? 's' : ''} · ${price}</span></td></tr>
      </table>
      <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:16px;margin-bottom:24px;">
        <div style="font-size:12px;color:#6b7280;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">AI Summary</div>
        <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">${lead.summary}</p>
      </div>
      <div style="text-align:center;margin-bottom:20px;">
        <a href="${callLink}" style="display:inline-block;background:#F2C94C;color:#111827;font-weight:800;font-size:16px;padding:14px 32px;border-radius:10px;text-decoration:none;">📞 Call ${lead.name.split(' ')[0]} Now</a>
        <p style="color:#9ca3af;font-size:12px;margin:8px 0 0;">Leads who hear back within 5 minutes convert 8× more often.</p>
      </div>
      ${transcript ? `<div style="margin-top:20px;"><div style="font-size:12px;color:#6b7280;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:10px;">Chat Transcript</div><table style="width:100%;border-collapse:separate;border-spacing:0 4px;">${transcript}</table></div>` : ''}
    </div>
    <div style="background:#f9fafb;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:16px 28px;text-align:center;">
      <p style="color:#9ca3af;font-size:12px;margin:0;">Mid South Dumpster Rentals · 601-316-7891 · midsouthdumpsterms.com</p>
    </div>
  </div>
</body></html>`

    await resend.emails.send({
        from: 'Mid South Chatbot <quotes@midsouthdumpsterms.com>',
        to: [LEAD_NOTIFY_EMAIL],
        subject: `🔔 New Chat Lead: ${lead.name} · ${sizeLabel} · ${lead.address.split(',')[1]?.trim() || lead.address}`,
        html,
    }).catch(err => console.error('Chat lead email error:', err))
}

// ─── GET: Diagnostic Health Check ─────────────────────────────────────────────
export async function GET() {
    const hasKey = !!process.env.ANTHROPIC_API_KEY
    const keyPrefix = hasKey ? process.env.ANTHROPIC_API_KEY!.slice(0, 20) + '...' : 'NOT SET'
    return NextResponse.json({ status: 'ok', hasApiKey: hasKey, keyPrefix })
}

// ─── OPTIONS: CORS Preflight ──────────────────────────────────────────────────
export async function OPTIONS(request: NextRequest) {
    const origin = request.headers.get('origin') || ''
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
        return new NextResponse(null, {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': origin || '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        })
    }
    return new NextResponse(null, { status: 403 })
}

// ─── POST: Chat Handler ───────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
    // ─── Origin Validation ────────────────────────────────────────────────────
    // Block requests that come from unapproved external domains.
    // Empty origin = same-origin browser request = always allowed.
    const origin = request.headers.get('origin') || ''
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // ─── Payload Size Limit ───────────────────────────────────────────────────
    const contentLength = parseInt(request.headers.get('content-length') || '0')
    if (contentLength > MAX_PAYLOAD_BYTES) {
        return NextResponse.json({ error: 'Payload too large' }, { status: 413 })
    }

    try {
        const { messages } = await request.json()

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
        }

        // ─── Message Count Cap ────────────────────────────────────────────────
        const recentMessages = messages.slice(-MAX_MESSAGES)

        // ─── Build Anthropic message format ───────────────────────────────────
        const apiMessages: { role: 'user' | 'assistant'; content: string }[] = recentMessages
            .filter((m: { sender: string; text: string }) => m.sender === 'user' || m.sender === 'bot')
            .map((m: { sender: string; text: string }) => ({
                role: m.sender === 'user' ? 'user' : 'assistant',
                // Sanitize and cap message length
                content: String(m.text).slice(0, MAX_MESSAGE_LENGTH),
            }))

        // Must start with a user message
        while (apiMessages.length > 0 && apiMessages[0].role !== 'user') {
            apiMessages.shift()
        }

        if (apiMessages.length === 0) {
            return NextResponse.json({ error: 'No valid messages' }, { status: 400 })
        }

        const response = await client.messages.create({
            model: 'claude-haiku-4-5-20251001',
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: apiMessages,
        })

        const rawText = response.content[0].type === 'text' ? response.content[0].text : ''

        // ─── Lead Capture Detection ───────────────────────────────────────────
        const leadMarkerRegex = /<!--LEAD_CAPTURE:(\{[\s\S]*?\})-->/
        const leadMatch = rawText.match(leadMarkerRegex)
        // Strip the hidden marker before sending to the customer
        const displayText = rawText.replace(leadMarkerRegex, '').trim()

        if (leadMatch) {
            try {
                const lead = JSON.parse(leadMatch[1])
                await sendChatLeadEmail(lead, messages)
                console.log('📬 Chat lead email sent for:', lead.name)
            } catch (e) {
                console.error('Failed to process lead capture:', e)
            }
        }

        return NextResponse.json({ reply: displayText })

    } catch (error: unknown) {
        console.error('Chat API error:', error)
        const message = error instanceof Error ? error.message : 'Unknown error'
        return NextResponse.json(
            { error: 'Service temporarily unavailable', detail: message },
            { status: 500 }
        )
    }
}
