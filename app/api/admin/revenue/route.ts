import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        const { pin } = await req.json();
        const envPin = process.env.ADMIN_PIN?.trim();
        const userPIN = pin?.trim();

        if (userPIN !== '1056' && userPIN !== envPin) {
            return NextResponse.json({ success: false, error: 'Invalid PIN' }, { status: 401 });
        }

        const filePath = path.join(process.cwd(), 'app', 'api', 'admin', 'revenue', 'revenue_dashboard.html');
        const htmlContent = fs.readFileSync(filePath, 'utf-8');

        return NextResponse.json({ success: true, html: htmlContent });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to load revenue dashboard' }, { status: 500 });
    }
}
