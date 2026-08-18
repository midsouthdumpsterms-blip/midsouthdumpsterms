import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import twilio from 'twilio'
import { saveLead, createLeadsTable } from '@/lib/db'

// Resend throws from its constructor when the key is missing, which turns a
// missing or rotated env var into a hard build failure for the whole site
// rather than a failure of this one route. Construct it lazily instead.
function getResend() {
    return new Resend(process.env.RESEND_API_KEY)
}

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

// ── Rich HTML email for customer quote ──────────────────────────────────────
function buildCustomerEmailHtml(data: {
    name: string; recommendedSize: string; city: string
    quotedPrice: string; days: string; project: string
}) {
    const { name, recommendedSize, city, quotedPrice, days, project } = data
    return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:24px 16px;">
    <div style="background:linear-gradient(135deg,#0fbfdf,#0a92ad);border-radius:12px 12px 0 0;padding:28px;text-align:center;">
      <div style="font-size:36px;margin-bottom:8px;">🎯</div>
      <h1 style="color:white;margin:0;font-size:22px;font-weight:800;">Your Dumpster Quote, ${name}!</h1>
      <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">Mid South Dumpster Rentals · Jackson Metro, MS</p>
    </div>
    <div style="background:white;padding:28px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
      <div style="background:#f0fdff;border:2px solid #0fbfdf;border-radius:12px;padding:20px;text-align:center;margin-bottom:20px;">
        <div style="font-size:13px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Your Recommended Size</div>
        <div style="font-size:36px;font-weight:900;color:#0a92ad;">${recommendedSize}-Yard</div>
        <div style="font-size:28px;font-weight:900;color:#111827;margin-top:4px;">${quotedPrice}</div>
        <div style="font-size:13px;color:#6b7280;margin-top:4px;">${days} · ${city}, MS · ${project}</div>
      </div>
      <div style="margin-bottom:20px;">
        ${['📦 Delivery, pickup &amp; disposal included', '✅ Flat-rate — no hidden fees', '🚀 Same-day delivery available', '🛡️ Licensed &amp; insured'].map(item => `<div style="padding:8px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#374151;">${item}</div>`).join('')}
      </div>
      <a href="https://midsouthdumpsterms.com/book-online" style="display:block;background:#F2C94C;color:#111827;font-weight:800;font-size:16px;padding:16px;border-radius:10px;text-decoration:none;text-align:center;margin-bottom:12px;">📅 Book Online Now</a>
      <a href="tel:6013167891" style="display:block;background:transparent;color:#0fbfdf;border:2px solid #0fbfdf;font-weight:700;font-size:15px;padding:14px;border-radius:10px;text-decoration:none;text-align:center;">📞 Call 601-316-7891</a>
    </div>
    <div style="background:#f9fafb;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:16px 28px;text-align:center;">
      <p style="color:#9ca3af;font-size:12px;margin:0;">Mid South Dumpster Rentals · 601-316-7891 · midsouthdumpsterms.com<br>Serving Jackson, Brandon, Madison, Pearl &amp; all of Central MS</p>
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
        `📦 Delivery + pickup + one dump included`,
        ``,
        `Book online: https://midsouthdumpsterms.com/book-online`,
        `Or call/text us: 601-316-7891`,
        ``,
        `Book online anytime — no phone call needed. Same-day delivery available.`,
    ].join('\n')
}

// ── Short SMS for business owner (via Twilio) ────────────────────────────────
function buildOwnerSms(data: {
    name: string; phone: string; project: string
    city: string; timeline: string; recommendedSize: string
    quotedPrice: string; days: string
}) {
    const { name, phone, project, city, timeline, recommendedSize, quotedPrice, days } = data
    const tlLabel = TIMELINE_LABELS[timeline]?.replace(/[🚀📅🗓️🔮]/g, '').trim() ?? timeline
    return `🚨 NEW LEAD\nName: ${name}\nPhone: ${phone}\nProject: ${project}\nCity: ${city}, MS\nWhen: ${tlLabel}\nSize: ${recommendedSize}-Yd\nQuoted: ${quotedPrice} (${days})\n\nCall them back ASAP!`
}

// ── 48-hour follow-up SMS (only if they haven't booked) ──────────────────────
function buildFollowUpSms(data: { name: string }) {
    return [
        `Hey ${data.name}! Your Mid South quote is still active.`,
        ``,
        `If you haven't booked yet — grab it here:`,
        `https://midsouthdumpsterms.com/book-online`,
        ``,
        `If you already did — we'll see you on delivery day! 🙌`,
        `Questions? Just reply.`,
    ].join('\n')
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { name, phone, email, project, city, timeline, recommendedSize, quotedPrice, days } = body
        const cleanPhone = phone?.replace(/\D/g, '') ?? ''

        console.log('📋 NEW QUOTE LEAD:', { name, project, city, timeline, recommendedSize, timestamp: new Date().toISOString() })

        // ── 0. Save lead to Database ────────────────────────────────────────
        try {
            await createLeadsTable() // Ensure table exists
            await saveLead({
                name, phone, email, project, city, timeline,
                size: String(recommendedSize),
                price: quotedPrice ?? 'Call for pricing'
            })
            console.log('💾 Lead saved to database')
        } catch (dbErr) {
            console.error('❌ Failed to save lead to DB:', dbErr)
            // Continue with notifications even if DB fails
        }

        const notifyEmail = process.env.NOTIFICATION_EMAIL
        const ownerPhone = process.env.OWNER_PHONE_NUMBER  // e.g. +16013167891
        const twilioSid = process.env.TWILIO_ACCOUNT_SID
        const twilioToken = process.env.TWILIO_AUTH_TOKEN
        const twilioFrom = process.env.TWILIO_PHONE_NUMBER // e.g. +1xxxxxxxxxx

        // ── 1. Email notification to owner ──────────────────────────────────
        if (process.env.RESEND_API_KEY && notifyEmail) {
            await getResend().emails.send({
                from: 'Mid South Quotes <quotes@midsouthdumpsterms.com>',
                to: [notifyEmail],
                subject: `🚨 New Lead: ${name} · ${recommendedSize}-Yd · ${city}`,
                html: buildOwnerEmailHtml({ name, phone: phone ?? '(email only)', project, city, timeline, recommendedSize }),
            }).catch(err => console.error('Resend owner email error:', err))
        }

        // ── 2. Email quote to customer (if they provided email) ──────────────
        if (process.env.RESEND_API_KEY && email?.includes('@')) {
            await getResend().emails.send({
                from: 'Mid South Dumpster Rentals <quotes@midsouthdumpsterms.com>',
                to: [email],
                subject: `Your ${recommendedSize}-Yard Dumpster Quote — ${quotedPrice ?? 'See details'}`,
                html: buildCustomerEmailHtml({ name, recommendedSize, city, quotedPrice: quotedPrice ?? 'Call for pricing', days: days ?? 'rental', project }),
            }).catch(err => console.error('Resend customer email error:', err))
        }

        // ── 3. SMS via Twilio ────────────────────────────────────────────────
        if (twilioSid && twilioToken) {
            const client = twilio(twilioSid, twilioToken)
            const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID
            const messageConfig = (to: string, body: string) => ({
                body,
                to: to.startsWith('+') ? to : `+1${to.replace(/\D/g, '')}`,
                ...(messagingServiceSid ? { messagingServiceSid } : { from: twilioFrom })
            })

            // Text the CUSTOMER their quote
            if (cleanPhone.length === 10) {
                await client.messages.create(messageConfig(cleanPhone, buildCustomerSms({
                    name, recommendedSize, city,
                    quotedPrice: quotedPrice ?? 'Call for pricing',
                    days: days ?? 'rental'
                })))
                .then(msg => console.log(`✅ Customer SMS sent: ${msg.sid}`))
                .catch(err => console.error('❌ Twilio customer SMS error:', {
                    code: err.code,
                    message: err.message,
                    status: err.status
                }))

                // Schedule 48-hour follow-up (skip "Just Planning" leads)
                if (messagingServiceSid && timeline !== 'planning') {
                    const followUpAt = new Date(Date.now() + 48 * 60 * 60 * 1000)
                    await client.messages.create({
                        body: buildFollowUpSms({ name }),
                        messagingServiceSid,
                        to: `+1${cleanPhone}`,
                        scheduleType: 'fixed',
                        sendAt: followUpAt,
                    })
                    .then(msg => console.log(`🗓️ Follow-up scheduled: ${msg.sid}`))
                    .catch(err => console.error('❌ Twilio follow-up SMS error:', {
                        code: err.code,
                        message: err.message
                    }))
                }
            } else {
                console.warn(`⚠️ SMS skipped: Invalid customer phone format (${phone})`)
            }

            // Text the OWNER a short alert
            if (ownerPhone) {
                await client.messages.create(messageConfig(ownerPhone, buildOwnerSms({
                    name, phone: phone ?? 'unknown', project, city, timeline,
                    recommendedSize, quotedPrice: quotedPrice ?? 'unknown', days: days ?? 'unknown'
                })))
                .then(msg => console.log(`🚨 Owner alert sent: ${msg.sid}`))
                .catch(err => console.error('❌ Twilio owner SMS error:', {
                    code: err.code,
                    message: err.message,
                    status: err.status
                }))
            }
        }

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error('💥 Quote submission system error:', err)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
