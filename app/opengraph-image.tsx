import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Mid South Dumpster Rentals Jackson MS'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    const brandYellow = '#F2C94C'

    // Fetch images from the public directory
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://midsouthdumpsterms.com'

    const [logoData, baseImageData] = await Promise.all([
        fetch(new URL('/images/original-logo.png', baseUrl)).then((res) => res.arrayBuffer()),
        fetch(new URL('/images/og-image.jpg', baseUrl)).then((res) => res.arrayBuffer()),
    ])

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    backgroundColor: '#0fbfdf',
                    position: 'relative',
                }}
            >
                {/* Base Image */}
                <img
                    src={baseImageData as any}
                    alt="Base"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />

                {/* Overlay Logo in Circle (Top Right) */}
                {/* We place it over the original logo position */}
                <div
                    style={{
                        position: 'absolute',
                        top: '40px',
                        right: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        padding: '10px',
                        border: `8px solid ${brandYellow}`,
                        width: '240px',
                        height: '240px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                    }}
                >
                    <img
                        src={logoData as any}
                        alt="Logo"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        }}
                    />
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
