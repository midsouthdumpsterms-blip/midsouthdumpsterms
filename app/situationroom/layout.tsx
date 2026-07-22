import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Situation Room | Mid South Dumpster Rentals',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
        },
    },
}

export default function SituationRoomLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
