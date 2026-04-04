import { Metadata } from 'next'
import QuoteTool from './QuoteTool'

export const metadata: Metadata = {
    title: 'Get an Instant Dumpster Quote | Mid South Dumpster Rentals',
    description:
        'Get an instant, personalized dumpster rental quote in 60 seconds. Tell us your project, location, and timeline — we\'ll recommend the right size and price. Serving Jackson, Brandon, Madison & all of Central MS.',
    openGraph: {
        title: 'Instant Dumpster Quote | Mid South Dumpster Rentals',
        description: 'Get a personalized dumpster quote in 60 seconds. Same-day delivery available from $349.',
        url: 'https://midsouthdumpsterms.com/get-a-quote',
    },
}

export default function GetAQuotePage() {
    return <QuoteTool />
}
