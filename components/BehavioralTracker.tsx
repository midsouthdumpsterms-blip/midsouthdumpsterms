'use client'

import { useEffect } from 'react'
import { initBehavioralTracking } from '@/lib/analytics'

/**
 * Initializes all passive behavioral tracking listeners once on mount.
 * Renders nothing — pure analytics side-effect component.
 * Add to root layout so it runs on every page.
 */
export default function BehavioralTracker() {
    useEffect(() => {
        initBehavioralTracking()
    }, [])

    return null
}
