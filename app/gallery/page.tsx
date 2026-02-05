import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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
        caption: 'A pristine 15-yard roll-off dumpster delivered to a residence in Madison. We take pride in keeping our equipment clean and rust-free so it doesn’t look like an eyesore in your driveway.'
    },
    {
        src: '/images/gallery/residential-dumpster-rental-brandon-driveway.jpg',
        alt: 'Driveway safe dumpster rental in Brandon, MS',
        caption: 'Notice the wooden boards under the wheels? That’s our standard "Driveway Protection System" in action in Brandon, ensuring your concrete stays scratch-free.'
    },
    {
        src: '/images/gallery/construction-dumpster-pearl-ms-site.jpg',
        alt: 'Construction dumpster rental in Pearl, MS',
        caption: 'Large roll-off container supporting a commercial construction site cleanup in Pearl. Perfect for drywall, maximizing efficiency for the crew.'
    },
    {
        src: '/images/gallery/clean-dumpster-delivery-flowood-blue.jpg',
        alt: 'Blue Mid South Dumpster in Flowood, MS',
        caption: 'Our signature bright blue dumpsters standing out in Flowood. Easy to load, easy to see, and ready for a weekend garage cleanout.'
    },
    {
        src: '/images/gallery/15-yard-dumpster-clinton-ms-rental.jpg',
        alt: '15 Yard Dumpster rental in Clinton, MS',
        caption: 'The versatile 15-yard dumpster: compact enough for a Clinton driveway, but big enough to hold 6 pickup truck loads of debris.'
    },
    {
        src: '/images/gallery/20-yard-dumpster-rental-ridgeland-project.jpg',
        alt: '20 Yard Dumpster for Ridgeland roofing project',
        caption: 'A heavy-duty 20-yard dumpster placed for a roofing replacement in Ridgeland. Handles shingles and sheathing with ease.'
    },
    {
        src: '/images/gallery/waste-disposal-jackson-mississippi-service.jpg',
        alt: 'Waste disposal service in Jackson, MS',
        caption: 'Reliable waste management delivered to your doorstep. We handle the heavy hauling so you can focus on the project.'
    },
    {
        src: '/images/gallery/local-dumpster-service-byram-truck.jpg',
        alt: 'Dumpster delivery truck in Byram, MS',
        caption: 'Our specialized hook-lift truck delivering a container in Byram. The hook-lift system allows us to place dumpsters in tighter spots than traditional cable trucks.'
    },
    {
        src: '/images/gallery/home-renovation-dumpster-terry-backyard.jpg',
        alt: 'Home renovation dumpster in Terry, MS',
        caption: 'Clearing out a backyard shed in Terry? Our dumpsters are perfect for landscaping debris, old furniture, and general junk removal.'
    },
    {
        src: '/images/gallery/driveway-safe-dumpster-gluckstadt-boards.jpg',
        alt: 'Driveway protection for dumpster in Gluckstadt',
        caption: 'Another safe delivery in Gluckstadt. We treat your property like our own, always checking for overhead lines and placing protection boards.'
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
        alt: 'Reliable generic waste management',
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
        <div className="container py-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                    See Our <span className="text-primary">Dumpsters in Action</span>
                </h1>
                <p className="text-xl text-gray-600">
                    From driveway-safe residential projects to commercial construction sites,
                    see why Central Mississippi trusts us for their waste disposal needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages.map((image, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                        <div className="relative h-64 w-full bg-gray-100">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2 text-gray-800">{image.alt}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{image.caption}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center bg-gray-50 rounded-3xl p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    You've seen the proof. Now get the service. Book your dumpster online today for same-day delivery.
                </p>
                <Link
                    href="/#booking"
                    className="inline-block bg-primary text-white text-lg font-bold py-4 px-8 rounded-full hover:bg-primary-dark transition-transform hover:scale-105 shadow-xl"
                >
                    Book Your Dumpster Now
                </Link>
            </div>
        </div>
    )
}
