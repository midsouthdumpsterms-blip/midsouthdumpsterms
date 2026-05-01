// Google Analytics & Vercel Event Tracking
// Tracks both standard conversions and behavioral signals

import { track } from '@vercel/analytics/react'

declare global {
    interface Window {
        gtag?: (...args: any[]) => void
    }
}

// ─── Core Helper ─────────────────────────────────────────────────────────────

function fireEvent(eventName: string, params: Record<string, any> = {}) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params)
    }
}

// ─── Conversion Events ────────────────────────────────────────────────────────

export function trackBookingClick(buttonLabel: string, location: string) {
    fireEvent('booking_click', {
        event_category: 'Booking',
        event_label: buttonLabel,
        page_location: location,
        value: 1,
    })
    track('Booking Initiated', { label: buttonLabel, location })
}

export function trackPhoneClick(location: string) {
    fireEvent('phone_click', {
        event_category: 'Contact',
        event_label: 'Phone Call',
        page_location: location,
        value: 1,
    })
    track('Call Initiated', { location })
}

// ─── FAQ Engagement ───────────────────────────────────────────────────────────

/**
 * Called when a user opens a specific FAQ question.
 * Reveals which objections and concerns are most common.
 */
export function trackFaqOpen(question: string) {
    fireEvent('faq_question_opened', {
        event_category: 'FAQ Engagement',
        event_label: question,
        question_text: question,
        page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    })
    track('FAQ Opened', { question })
}

// ─── Size Card Hover Dwell ────────────────────────────────────────────────────

/**
 * Tracks how long a user hovers on each dumpster size card.
 * Reveals which sizes cause the most consideration before booking.
 */
export function trackSizeCardHoverStart(size: string): number {
    return Date.now()
}

export function trackSizeCardHoverEnd(size: string, startTime: number) {
    const dwellMs = Date.now() - startTime
    const dwellSeconds = Math.round(dwellMs / 1000)
    if (dwellSeconds < 1) return // Ignore accidental hover-overs

    fireEvent('size_card_dwell', {
        event_category: 'Pricing Engagement',
        event_label: `${size} Yard`,
        dumpster_size: size,
        dwell_seconds: dwellSeconds,
    })
    track('Size Card Dwell', { size, seconds: dwellSeconds })
}

// ─── Service Area Map ─────────────────────────────────────────────────────────

/**
 * Called when a user clicks on a service area in the map/list.
 * High-intent signal — checking if their address is covered before calling.
 */
export function trackServiceAreaClick(area: string) {
    fireEvent('service_area_click', {
        event_category: 'Service Area Engagement',
        event_label: area,
        area_name: area,
        page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    })
    track('Service Area Clicked', { area })
}

// ─── Behavioral Tracking — Passive Listeners ──────────────────────────────────
// All of these are initialized once via initBehavioralTracking()
// They sit dormant until triggered by user actions — zero performance impact.

let behavioralInitialized = false

export function initBehavioralTracking() {
    if (typeof window === 'undefined' || behavioralInitialized) return
    behavioralInitialized = true

    initPhoneCopyTracking()
    initRageClickTracking()
    initScrollDepthTracking()
    initSurvCartReturnTracking()
    initPricingIdleTracking()
}

// ─── 1. Phone Number Copy Detection ──────────────────────────────────────────
// Fires when a user copies your phone number — indicates they're about to call
// from a different device or app. Invisible without this tracking.

function initPhoneCopyTracking() {
    const PHONE_DIGITS = '6013167891'

    document.addEventListener('copy', () => {
        const selected = window.getSelection()?.toString() || ''
        const digits = selected.replace(/\D/g, '')

        if (digits === PHONE_DIGITS) {
            fireEvent('phone_number_copied', {
                event_category: 'Contact Intent',
                event_label: 'Phone Number Copied to Clipboard',
                page_path: window.location.pathname,
            })
            track('Phone Number Copied', { page: window.location.pathname })
        }
    })
}

// ─── 2. Rage Click Detection ──────────────────────────────────────────────────
// Detects rapid repeated clicks in the same spot — reveals UX friction where
// users expect something to be clickable but it isn't.

function initRageClickTracking() {
    const clicks: { x: number; y: number; time: number }[] = []
    const RADIUS_PX = 60
    const TIME_WINDOW_MS = 2000
    const MIN_CLICKS = 3

    document.addEventListener('click', (e) => {
        const now = Date.now()
        clicks.push({ x: e.clientX, y: e.clientY, time: now })

        // Prune clicks outside the time window
        const recent = clicks.filter(c => now - c.time < TIME_WINDOW_MS)
        clicks.length = 0
        clicks.push(...recent)

        if (recent.length >= MIN_CLICKS) {
            const first = recent[0]
            const clustered = recent.every(c =>
                Math.abs(c.x - first.x) < RADIUS_PX &&
                Math.abs(c.y - first.y) < RADIUS_PX
            )

            if (clustered) {
                const target = e.target as HTMLElement
                const label = target.textContent?.trim().slice(0, 80) || target.tagName

                fireEvent('rage_click', {
                    event_category: 'UX Friction',
                    event_label: label,
                    click_count: recent.length,
                    page_path: window.location.pathname,
                    element_tag: target.tagName,
                    element_classes: target.className?.toString().slice(0, 100),
                })
                track('Rage Click Detected', {
                    label,
                    page: window.location.pathname,
                    clicks: recent.length,
                })
                clicks.length = 0 // Reset to avoid re-firing repeatedly
            }
        }
    })
}

// ─── 3. Scroll Depth Tracking ─────────────────────────────────────────────────
// Tracks 25/50/75/90% scroll milestones per page.
// Segmented by traffic source in GA4 to reveal content quality by channel.

function initScrollDepthTracking() {
    const milestones = [25, 50, 75, 90]
    const fired = new Set<number>()

    const onScroll = () => {
        const scrolled = window.scrollY
        const total = document.documentElement.scrollHeight - window.innerHeight
        if (total <= 0) return

        const pct = Math.round((scrolled / total) * 100)
        for (const milestone of milestones) {
            if (pct >= milestone && !fired.has(milestone)) {
                fired.add(milestone)
                fireEvent('scroll_depth', {
                    event_category: 'Engagement',
                    event_label: `${milestone}%`,
                    scroll_percent: milestone,
                    page_path: window.location.pathname,
                })
            }
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
}

// ─── 4. SurvCart Return Detection ─────────────────────────────────────────────
// Detects when a user opens the SurvCart booking flow and then returns to the
// site — indicating they started but may have abandoned the checkout.
// A high `seconds_away` value (60+) suggests they likely completed the booking.

function initSurvCartReturnTracking() {
    let leftForSurvCart = false
    let leaveTime = 0

    document.addEventListener('click', (e) => {
        const anchor = (e.target as HTMLElement).closest('a')
        if (anchor?.href?.includes('survcart')) {
            leftForSurvCart = true
            leaveTime = Date.now()
        }
    })

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible' && leftForSurvCart) {
            const secondsAway = Math.round((Date.now() - leaveTime) / 1000)
            leftForSurvCart = false

            fireEvent('survcart_return', {
                event_category: 'Booking Funnel',
                event_label: secondsAway > 60 ? 'Likely Completed' : 'Likely Abandoned',
                seconds_away: secondsAway,
                page_path: window.location.pathname,
            })
            track('Returned from Booking Flow', {
                seconds_away: secondsAway,
                likely_completed: secondsAway > 60,
            })
        }
    })
}

// ─── 5. Pricing Section Idle Detection ────────────────────────────────────────
// Fires when a user has the pricing section in view and goes idle for 45+ seconds.
// This pause signals active decision-making — comparing prices, doing math,
// or checking a competitor. A well-timed nudge at this moment can convert.

function initPricingIdleTracking() {
    const IDLE_MS = 45000
    let idleTimer: ReturnType<typeof setTimeout> | null = null
    let firedThisSession = false

    const selectors = [
        '[data-section="pricing"]',
        '#pricing',
        '[class*="pricing"]',
        '[class*="DumpsterSizeCard"]',
        '[class*="sizeCards"]',
    ]

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !firedThisSession) {
                idleTimer = setTimeout(() => {
                    firedThisSession = true
                    fireEvent('pricing_idle_45s', {
                        event_category: 'Decision Signals',
                        event_label: 'Idle on pricing section',
                        page_path: window.location.pathname,
                    })
                    track('Pricing Idle 45s', { page: window.location.pathname })

                    // Trigger the chatbot to open with a contextual nudge
                    window.dispatchEvent(new CustomEvent('chatbot-open', {
                        detail: { message: "💡 Need help picking the right size? I'm here! Tell me about your project and I'll point you to the right dumpster — and find you the best deal." }
                    }))
                }, IDLE_MS)
            } else {
                if (idleTimer) {
                    clearTimeout(idleTimer)
                    idleTimer = null
                }
            }
        })
    }, { threshold: 0.3 })

    // Wait for DOM to settle before observing
    setTimeout(() => {
        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => observer.observe(el))
        })
    }, 1500)
}
