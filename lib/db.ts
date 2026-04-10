import { sql } from '@vercel/postgres'

export interface Lead {
    id?: number
    name: string
    phone: string
    email: string
    project: string
    city: string
    timeline: string
    size: string
    price: string
    status: 'new' | 'contacted' | 'booked' | 'completed' | 'archived'
    created_at?: string
}

export async function createLeadsTable() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS leads (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                phone VARCHAR(50),
                email VARCHAR(255),
                project TEXT,
                city VARCHAR(100),
                timeline VARCHAR(100),
                size VARCHAR(50),
                price VARCHAR(50),
                status VARCHAR(50) DEFAULT 'new',
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `
        console.log('✅ Leads table ensured in Postgres')
    } catch (error) {
        console.error('❌ Error creating leads table:', error)
    }
}

export async function saveLead(lead: Omit<Lead, 'id' | 'created_at' | 'status'>) {
    try {
        const result = await sql`
            INSERT INTO leads (name, phone, email, project, city, timeline, size, price)
            VALUES (${lead.name}, ${lead.phone}, ${lead.email}, ${lead.project}, ${lead.city}, ${lead.timeline}, ${lead.size}, ${lead.price})
            RETURNING id;
        `
        return result.rows[0].id
    } catch (error) {
        console.error('❌ Error saving lead to DB:', error)
        throw error
    }
}

export async function getLeads() {
    try {
        const { rows } = await sql`SELECT * FROM leads ORDER BY created_at DESC;`
        return rows as Lead[]
    } catch (error) {
        console.error('❌ Error fetching leads:', error)
        return []
    }
}

export async function updateLeadStatus(id: number, status: Lead['status']) {
    try {
        await sql`UPDATE leads SET status = ${status} WHERE id = ${id};`
        return true
    } catch (error) {
        console.error('❌ Error updating lead status:', error)
        return false
    }
}
