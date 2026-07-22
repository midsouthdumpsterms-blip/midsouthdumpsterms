import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return new NextResponse('Missing id parameter', { status: 400 });
    }

    const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
    
    // Fetch the raw file from Google Drive using the alt=media parameter
    const driveUrl = `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${apiKey}`;
    
    try {
        const response = await fetch(driveUrl);
        
        if (!response.ok) {
            return new NextResponse(`Google Drive returned ${response.status}`, { status: response.status });
        }

        // Get the image buffer
        const buffer = await response.arrayBuffer();

        // Forward the image with inline disposition and proper caching
        return new NextResponse(buffer, {
            headers: {
                'Content-Type': response.headers.get('Content-Type') || 'image/jpeg',
                'Content-Disposition': 'inline',
                'Cache-Control': 'public, max-age=31536000, immutable'
            }
        });
    } catch (error) {
        return new NextResponse(String(error), { status: 500 });
    }
}
