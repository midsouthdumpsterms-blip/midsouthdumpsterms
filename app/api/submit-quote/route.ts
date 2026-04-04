import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { name, phone, project, city, timeline, recommendedSize } = body

        // Log the lead server-side for visibility in Vercel logs
        console.log('📋 NEW QUOTE LEAD:', {
            name,
            phone,
            project,
            city,
            timeline,
            recommendedSize,
            timestamp: new Date().toISOString(),
        })

        // TODO: Connect to email / SMS service
        // Option A: Resend.com (free tier 3k emails/mo)
        //   import { Resend } from 'resend'
        //   const resend = new Resend(process.env.RESEND_API_KEY)
        //   await resend.emails.send({ from: '...', to: 'your@email.com', subject: 'New Quote Lead', html: `...` })
        //
        // Option B: Twilio SMS to your phone
        //   Use TWILIO_ACCOUNT_SID + TWILIO_AUTH_TOKEN env vars
        //
        // Option C: simple webhook to Zapier → sends you a text/email
        //   await fetch(process.env.ZAPIER_WEBHOOK_URL!, { method: 'POST', body: JSON.stringify(body) })

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error('Quote submission error:', err)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
