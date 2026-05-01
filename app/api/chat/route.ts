import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

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
- **Same-day delivery:** Available if booked before noon
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
- **ALWAYS format the booking link as:** [Book Online](https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF)`

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

        const text = response.content[0].type === 'text' ? response.content[0].text : ''

        return NextResponse.json({ reply: text })

    } catch (error: unknown) {
        console.error('Chat API error:', error)
        const message = error instanceof Error ? error.message : 'Unknown error'
        return NextResponse.json(
            { error: 'Service temporarily unavailable', detail: message },
            { status: 500 }
        )
    }
}
