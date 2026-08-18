import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Resend throws from its constructor when the key is missing, which turns a
// missing or rotated env var into a hard build failure for the whole site
// rather than a failure of this one route. Construct it lazily instead.
function getResend() {
    return new Resend(process.env.RESEND_API_KEY)
}
const LEAD_NOTIFY_EMAIL = process.env.NOTIFICATION_EMAIL ?? 'midsouthdumpsterms@gmail.com'

const ALLOWED_ORIGINS = [
    'https://www.midsouthdumpsterms.com',
    'https://midsouthdumpsterms.com',
    'http://localhost:3000',
    'http://localhost:3001',
]

interface LeadData {
    name: string
    business?: string
    phone: string
    email: string
    address: string
    size: string
    days: string
    date: string
    summary: string
}

interface ChatMessage {
    sender: string
    text: string
}

export async function POST(request: NextRequest) {
    const origin = request.headers.get('origin') || ''
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    try {
        const { lead, messages }: { lead: LeadData; messages: ChatMessage[] } = await request.json()

        if (!lead?.name || !lead?.phone || !lead?.email) {
            return NextResponse.json({ error: 'Invalid lead data' }, { status: 400 })
        }

        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY not set')
            return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
        }

        const now = new Date().toLocaleString('en-US', {
            timeZone: 'America/Chicago',
            month: 'short', day: 'numeric', year: 'numeric',
            hour: 'numeric', minute: '2-digit', hour12: true,
        })

        const callLink = `tel:${lead.phone.replace(/\D/g, '')}`
        const sizeLabel = lead.size ? `${lead.size}-Yard` : 'Not specified'
        const priceMap: Record<string, string> = { '10': 'From $349', '15': 'From $399', '20': 'From $449' }
        const price = priceMap[lead.size] ?? 'Call for pricing'

        // Build transcript from last 14 messages
        const transcript = (messages || [])
            .filter(m => m.sender === 'user' || m.sender === 'bot')
            .slice(-14)
            .map(m => `<tr>
                <td style="padding:6px 8px;background:${m.sender === 'user' ? '#f0f9ff' : '#f8fafc'};border-radius:6px;font-size:12px;color:#374151;vertical-align:top;white-space:nowrap;font-weight:700;padding-right:12px;">${m.sender === 'user' ? '👤 Customer' : '🤖 Bot'}</td>
                <td style="padding:6px 8px;font-size:13px;color:#374151;line-height:1.5;">${m.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}</td>
            </tr>`)
            .join('')

        const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:620px;margin:0 auto;padding:24px 16px;">

    <div style="background:linear-gradient(135deg,#16a34a,#15803d);border-radius:12px 12px 0 0;padding:28px;text-align:center;">
      <div style="font-size:40px;margin-bottom:8px;">🔔</div>
      <h1 style="color:white;margin:0;font-size:24px;font-weight:800;">New Chat Lead!</h1>
      <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:13px;">Submitted via AI Chatbot · ${now} CST</p>
    </div>

    <div style="background:white;padding:28px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">

      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:12px;width:34%;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Name</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:15px;font-weight:700;">${lead.name}</td></tr>
        ${lead.business ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Business</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">${lead.business}</td></tr>` : ''}
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;"><a href="${callLink}" style="color:#16a34a;font-size:18px;font-weight:800;text-decoration:none;">${lead.phone}</a></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;"><a href="mailto:${lead.email}" style="color:#0fbfdf;font-size:14px;text-decoration:none;">${lead.email}</a></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Service Address</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">${lead.address}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Preferred Date</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">${lead.date}</td></tr>
        <tr><td style="padding:10px 0;color:#6b7280;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Size / Duration</td><td style="padding:10px 0;"><span style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:999px;padding:4px 14px;font-size:14px;font-weight:700;">${sizeLabel} · ${lead.days} day${lead.days !== '1' ? 's' : ''} · ${price}</span></td></tr>
      </table>

      <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:16px;margin-bottom:24px;">
        <div style="font-size:11px;color:#6b7280;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">AI Summary</div>
        <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">${lead.summary}</p>
      </div>

      <div style="text-align:center;margin-bottom:24px;">
        <a href="${callLink}" style="display:inline-block;background:#F2C94C;color:#111827;font-weight:800;font-size:16px;padding:14px 36px;border-radius:10px;text-decoration:none;">📞 Call ${lead.name.split(' ')[0]} Now</a>
        <p style="color:#9ca3af;font-size:12px;margin:8px 0 0;">Leads who hear back within 5 minutes convert 8× more often.</p>
      </div>

      ${transcript ? `
      <div>
        <div style="font-size:11px;color:#6b7280;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:10px;border-top:1px solid #f3f4f6;padding-top:16px;">Chat Transcript</div>
        <table style="width:100%;border-collapse:separate;border-spacing:0 3px;">${transcript}</table>
      </div>` : ''}

    </div>
    <div style="background:#f9fafb;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:16px 28px;text-align:center;">
      <p style="color:#9ca3af;font-size:12px;margin:0;">Mid South Dumpster Rentals · 601-316-7891 · midsouthdumpsterms.com</p>
    </div>

  </div>
</body></html>`

        const cityPart = lead.address.split(',')[1]?.trim() || lead.address

        await getResend().emails.send({
            from: 'Mid South Chatbot <quotes@midsouthdumpsterms.com>',
            to: [LEAD_NOTIFY_EMAIL],
            subject: `🔔 New Chat Lead: ${lead.name} · ${sizeLabel} · ${cityPart}`,
            html,
        })

        console.log(`📬 Chat lead email sent: ${lead.name} — ${sizeLabel} — ${lead.date}`)
        return NextResponse.json({ success: true })

    } catch (error) {
        console.error('Chat lead submission error:', error)
        return NextResponse.json({ error: 'Failed to send lead' }, { status: 500 })
    }
}
