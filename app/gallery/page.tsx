import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './gallery.module.css'

export const metadata: Metadata = {
    title: 'Project Gallery | Dumpster Rentals in Jackson, MS & Surrounding Areas',
    description: 'See our dumpsters in action! Photos of residential and commercial dumpster rentals in Jackson, Madison, Brandon, Pearl, and more. Clean, reliable, and driveway-safe.',
}

const galleryImages = [
    {
        src: '/images/gallery/dumpster-rental-jackson-ms-delivery.jpg',
        alt: 'Residential dumpster rental delivery in Jackson, MS',
        caption: 'Strategic placement of a 20-yard dumpster for a home renovation project in North Jackson. Our driver ensured it was close to the door for easy loading.'
    },
    {
        src: '/images/gallery/roll-off-dumpster-madison-ms-clean.jpg',
        alt: 'Clean roll-off dumpster in Madison, MS driveway',
        caption: 'A pristine 15-yard roll-off dumpster delivered to a residence in Madison. We take pride in keeping our equipment clean and rust-free so it does not look like an eyesore in your driveway.'
    },
    {
        src: '/images/gallery/driveway-safe-dumpster-gluckstadt-boards.jpg',
        alt: 'Driveway protection for dumpster in Gluckstadt',
        caption: 'Notice the wooden boards under the wheels? That is our standard driveway protection system in action, ensuring your concrete stays scratch-free.'
    },
    {
        src: '/images/gallery/construction-dumpster-pearl-ms-site.jpg',
        alt: 'Construction dumpster rental in Pearl, MS',
        caption: 'Large roll-off container supporting a commercial construction site cleanup in Pearl. Perfect for drywall, maximizing efficiency for the crew.'
    },
    {
        src: '/images/gallery/clean-dumpster-delivery-flowood-blue.jpg',
        alt: '20 Yard Dumpster In Flowood, MS',
        caption: 'Our clean grey dumpsters delivered to Flowood. Easy to load, easy to see, and ready for a weekend garage cleanout.'
    },
    {
        src: '/images/gallery/15-yard-dumpster-clinton-ms-rental.jpg',
        alt: '15 Yard Dumpster rental in Clinton, MS',
        caption: 'The versatile 15-yard dumpster: compact enough for a Clinton driveway, but big enough to hold 6 pickup truck loads of debris.'
    },
    {
        src: '/images/gallery/20-yard-dumpster-rental-ridgeland-project.jpg',
        alt: '10 Yard Dumpster for Ridgeland roofing project',
        caption: 'A compact 10-yard dumpster placed for a roofing replacement in Ridgeland. Perfect size for residential roofing projects with shingles and sheathing.'
    },
    {
        src: '/images/gallery/home-renovation-dumpster-terry-backyard.jpg',
        alt: 'Home renovation dumpster in Terry, MS',
        caption: 'Clearing out a backyard shed in Terry? Our dumpsters are perfect for landscaping debris, old furniture, and general junk removal.'
    },
    {
        src: '/images/gallery/same-day-dumpster-rental-canton.jpg',
        alt: 'Same day dumpster delivery in Canton, MS',
        caption: 'Got an urgent project in Canton? We often accommodate same-day delivery requests to keep your job site moving.'
    },
    {
        src: '/images/gallery/affordable-dumpster-rental-jackson-pricing.jpg',
        alt: 'Affordable dumpster rental pricing Jackson',
        caption: 'Flat-rate pricing means no surprises. What you see is what you get, making us the top choice for budget-conscious homeowners in Jackson.'
    },
    {
        src: '/images/gallery/reliable-waste-management-ms-delivery.jpg',
        alt: 'Reliable waste management delivery',
        caption: 'Consistency is key. We drop off on time and pick up when you call. Professional service from start to finish.'
    },
    {
        src: '/images/gallery/commercial-dumpster-rental-jackson-business.jpg',
        alt: 'Commercial dumpster rental for business cleanout',
        caption: 'Helping a local business in Jackson clear out old office furniture and inventory. Commercial rentals available for short or long terms.'
    },
    {
        src: '/images/gallery/small-dumpster-rental-residential-fit.jpg',
        alt: 'Small dumpster fitting in tight space',
        caption: 'Tight squeeze? No problem. Our drivers are experts at maneuvering dumpsters into convenient spots without blocking your whole driveway.'
    },
    {
        src: '/images/gallery/large-dumpster-rental-projects-waste.jpg',
        alt: 'Large project waste removal',
        caption: 'Full house cleanout in progress. The rear doors swing open, allowing you to walk heavy items right in instead of tossing them over the wall.'
    },
    {
        src: '/images/gallery/mid-south-dumpster-rentals-delivery-truck.jpg',
        alt: 'Mid South Dumpster Rentals Truck',
        caption: 'The team that works for you. Mid South Dumpster Rentals is locally owned and committed to keeping Central Mississippi clean.'
    }
]

export default function GalleryPage() {
    // Generate Schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Mid South Dumpster Rentals Project Gallery",
        "primaryImageOfPage": {
            "@id": "https://midsouthdumpsterms.com/images/gallery/dumpster-rental-jackson-ms-delivery.jpg"
        },
        "image": galleryImages.map(img => ({
            "@type": "ImageObject",
            "contentUrl": `https://midsouthdumpsterms.com${img.src}`,
            "description": img.caption,
            "name": img.alt
        }))
    }

    return (
        <div className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div className={styles.header}>
                <h1 className={styles.title}>
                    See Our <span className={styles.titleAccent}>Dumpsters in Action</span>
                </h1>
                <p className={styles.subtitle}>
                    From driveway-safe residential projects to commercial construction sites,
                    see why Central Mississippi trusts us for their waste disposal needs.
                </p>
            </div>

            <div className={styles.gallery}>
                {galleryImages.map((image, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{image.alt}</h3>
                            <p className={styles.cardCaption}>{image.caption}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.cta}>
                <h2 className={styles.ctaTitle}>Ready to start your project?</h2>
                <p className={styles.ctaText}>
                    You have seen the proof. Now get the service. Book your dumpster online today for same-day delivery.
                </p>
                <Link href="/#booking" className={styles.ctaButton}>
                    Book Your Dumpster Now
                </Link>
            </div>
        </div>
    )
}
