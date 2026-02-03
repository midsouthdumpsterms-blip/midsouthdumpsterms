// City Template Generator Script
// This file shows the pattern for all city pages
// Each city page follows the same structure with city-specific content

const cities = [
    { name: 'Brandon', neighborhoods: 'Crossgates, Shiloh, Winner\'s Circle' },
    { name: 'Clinton', neighborhoods: 'downtown Clinton, Traceland, Northside' },
    { name: 'Flowood', neighborhoods: 'Flowood Heights, Liberty Park, Dogwood Festival Market' },
    { name: 'Pearl', neighborhoods: 'Westside, Pearl River, Airport Road' },
    { name: 'Ridgeland', neighborhoods: 'Highland Colony, Dinsmor, Old Trace' },
    { name: 'Madison', neighborhoods: 'Annandale, Reunion, Providence' },
    { name: 'Flora', neighborhoods: 'Flora, Bentonia Road' },
    { name: 'Canton', neighborhoods: 'downtown Canton, Madison County' },
    { name: 'Terry', neighborhoods: 'Terry, Highway 27' },
    { name: 'Byram', neighborhoods: 'Byram, Siwell Road' },
    { name: 'Gluckstadt', neighborhoods: 'Gluckstadt, Old Canton Road' },
]

// For each city, create a page.tsx file with:
// 1. City-specific H1: "Dumpster Rentals in [City], MS"
// 2. City-specific meta description
// 3. Breadcrumb schema with city name
// 4. Service schema with areaServed: "[City], MS"
// 5. Local content mentioning city neighborhoods/areas
// 6. Same dumpster sizes and pricing
// 7. City-specific booking CTA

export default cities
