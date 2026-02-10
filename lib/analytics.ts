// Google Analytics Event Tracking
// This allows us to track button clicks even when they lead to third-party URLs

declare global {
    interface Window {
        gtag?: (...args: any[]) => void
    }
}

/**
 * Track a booking button click event
 * @param buttonLabel - Descriptive label for the button (e.g., "Book 15 Yard Dumpster", "Hero Book Now")
 * @param location - Where on the site the button was clicked (e.g., "Homepage", "Services Page", "Brandon Service Area")
 */
export function trackBookingClick(buttonLabel: string, location: string) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'booking_click', {
            event_category: 'Booking',
            event_label: buttonLabel,
            page_location: location,
            value: 1,
        })
    }
}

/**
 * Track a phone call click event
 * @param location - Where on the site the phone link was clicked
 */
export function trackPhoneClick(location: string) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'phone_click', {
            event_category: 'Contact',
            event_label: 'Phone Call',
            page_location: location,
            value: 1,
        })
    }
}
