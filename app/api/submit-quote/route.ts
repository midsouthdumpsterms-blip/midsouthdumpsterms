import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import twilio from 'twilio'

const resend = new Resend(process.env.RESEND_API_KEY)

const TIMELINE_LABELS: Record<string, string> = {
    'today': '🚀 Today (same-day)',
    'tomorrow': '📅 Tomorrow',
    'this-week': '🗓️ This week',
    'planning': '🔮 Just planning ahead',
}

const SIZE_PRICES: Record<string, string> = {
    '10': 'From $349',
    '15': 'From $399',
    '20': 'From $449',
}

// ── Rich HTML email for business owner ──────────────────────────────────────
function buildOwnerEmailHtml(data: {
    name: string; phone: string; project: string
    city: string; timeline: string; recommendedSize: string
}) {
    const { name, phone, project, city, timeline, recommendedSize } = data
    const timelineLabel = TIMELINE_LABELS[timeline] ?? timeline
    const callLink = `tel:${phone.replace(/\D/g, '')}`
    const now = new Date().toLocaleString('en-US', {
        timeZone: 'America/Chicago',
        month: 'short', day: 'numeric', year: 'numeric',
        hour: 'numeric', minute: '2-digit', hour12: true,
    })

    return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:24px 16px;">
    <div style="background:linear-gradient(135deg,#0fbfdf,#0a92ad);border-radius:12px 12px 0 0;padding:24px 28px;text-align:center;">
      <div style="font-size:32px;margin-bottom:4px;">📋</div>
      <h1 style="color:white;margin:0;font-size:20px;font-weight:800;">New Quote Lead!</h1>
      <p style="color:rgba(255,255,255,0.85);margin:4px 0 0;font-size:13px;">Submitted ${now} CST</p>
    </div>
    <div style="background:white;padding:28px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;width:40%;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Name</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:15px;font-weight:700;">${name}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;"><a href="${callLink}" style="color:#0fbfdf;font-size:18px;font-weight:800;text-decoration:none;">${phone}</a></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Project</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:15px;">${project}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">City</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:15px;">${city}, MS</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">When</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:15px;">${timelineLabel}</td></tr>
        <tr><td style="padding:10px 0;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Recommended</td><td style="padding:10px 0;"><span style="background:#f0fdff;color:#0a92ad;border:1px solid #bae6fd;border-radius:999px;padding:4px 12px;font-size:14px;font-weight:700;">${recommendedSize}-Yard Dumpster</span></td></tr>
      </table>
      <div style="margin-top:24px;text-align:center;">
        <a href="${callLink}" style="display:inline-block;background:#F2C94C;color:#111827;font-weight:800;font-size:16px;padding:14px 32px;border-radius:10px;text-decoration:none;margin-bottom:10px;">📞 Call ${name} Now</a>
        <p style="color:#9ca3af;font-size:12px;margin:8px 0 0;">Leads who hear back within 5 minutes convert 8× more often.</p>
      </div>
    </div>
    <div style="background:#f9fafb;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:16px 28px;text-align:center;">
      <p style="color:#9ca3af;font-size:12px;margin:0;">Mid South Dumpster Rentals · 601-316-7891 · midsouthdumpsterms.com</p>
    </div>
  </div>
</body></html>`
}

// ── Short SMS for customer ───────────────────────────────────────────────────
function buildCustomerSms(data: {
    name: string; recommendedSize: string; city: string; quotedPrice: string; days: string
}) {
    const { name, recommendedSize, city, quotedPrice, days } = data
    return [
        `Hi ${name}! Here's your Mid South Dumpster Rentals quote:`,
        ``,
        `✅ ${recommendedSize}-Yard Dumpster`,
        `📍 ${city}, MS`,
        `💰 ${quotedPrice} — flat rate (${days})`,
        `📦 Delivery + pickup included, no hidden fees`,
        ``,
        `Book online: midsouthdumpsterms.com/book-online`,
        `Or call/text us: 601-316-7891`,
        ``,
        `Same-day delivery available. We'll be in touch shortly!`,
    ].join('\n')
}

// ── Short SMS for business owner (via Twilio) ────────────────────────────────
function buildOwnerSms(data: {
    name: string; phone: string; project: string
    city: string; timeline: string; recommendedSize: string
}) {
    const { name, phone, project, city, timeline, recommendedSize } = data
    const tlLabel = TIMELINE_LABELS[timeline]?.replace(/[🚀📅🗓️🔮]/g, '').trim() ?? timeline
    return `🚨 NEW LEAD\nName: ${name}\nPhone: ${phone}\nProject: ${project}\nCity: ${city}, MS\nWhen: ${tlLabel}\nSize: ${recommendedSize}-Yd\n\nCall them back ASAP!`
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { name, phone, project, city, timeline, recommendedSize, quotedPrice, days } = body
        const cleanPhone = phone.replace(/\D/g, '')

        console.log('📋 NEW QUOTE LEAD:', { name, phone, project, city, timeline, recommendedSize, timestamp: new Date().toISOString() })

        const notifyEmail = process.env.NOTIFICATION_EMAIL
        const ownerPhone = process.env.OWNER_PHONE_NUMBER  // e.g. +16013167891
        const twilioSid = process.env.TWILIO_ACCOUNT_SID
        const twilioToken = process.env.TWILIO_AUTH_TOKEN
        const twilioFrom = process.env.TWILIO_PHONE_NUMBER // e.g. +1xxxxxxxxxx

        // ── 1. Email notification to owner ──────────────────────────────────
        if (process.env.RESEND_API_KEY && notifyEmail) {
            await resend.emails.send({
                from: 'Mid South Quotes <quotes@midsouthdumpsterms.com>',
                to: [notifyEmail],
                subject: `🚨 New Lead: ${name} · ${recommendedSize}-Yd · ${city}`,
                html: buildOwnerEmailHtml({ name, phone, project, city, timeline, recommendedSize }),
            }).catch(err => console.error('Resend email error:', err))
        }

        // ── 2. SMS via Twilio ────────────────────────────────────────────────
        if (twilioSid && twilioToken && twilioFrom) {
            const client = twilio(twilioSid, twilioToken)

            // Text the CUSTOMER their quote
            if (cleanPhone.length === 10) {
                await client.messages.create({
                    body: buildCustomerSms({ name, recommendedSize, city, quotedPrice: quotedPrice ?? 'Call for pricing', days: days ?? 'rental' }),
                    from: twilioFrom,
                    to: `+1${cleanPhone}`,
                }).catch(err => console.error('Twilio customer SMS error:', err))
            }

            // Text the OWNER a short alert
            if (ownerPhone) {
                await client.messages.create({
                    body: buildOwnerSms({ name, phone, project, city, timeline, recommendedSize }),
                    from: twilioFrom,
                    to: ownerPhone,
                }).catch(err => console.error('Twilio owner SMS error:', err))
            }
        }

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error('Quote submission error:', err)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
