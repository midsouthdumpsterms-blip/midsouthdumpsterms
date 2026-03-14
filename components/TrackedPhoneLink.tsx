'use client'

import { trackPhoneClick } from '@/lib/analytics'

interface TrackedPhoneLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    location: string
    phoneNumber?: string
    children: React.ReactNode
}

/**
 * A client component wrapper around an anchor tag that tracks phone clicks
 * without requiring the entire page to be a client component.
 */
export default function TrackedPhoneLink({ 
    location, 
    phoneNumber = '6013167891', 
    children, 
    ...props 
}: TrackedPhoneLinkProps) {
    return (
        <a 
            href={`tel:${phoneNumber}`} 
            onClick={() => trackPhoneClick(location)}
            {...props}
        >
            {children}
        </a>
    )
}
