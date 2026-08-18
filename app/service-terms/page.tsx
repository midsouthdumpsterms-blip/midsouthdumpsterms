import { Metadata } from 'next'

export const metadata: Metadata = {
    alternates: { canonical: 'https://midsouthdumpsterms.com/service-terms' },
    title: 'Dumpster Rental Agreement | Service Terms',
    description:
        'The full rental agreement: permitted and prohibited materials, weight limits, overage and extension fees, liability, and payment terms.',
    robots: { index: true, follow: true },
    openGraph: {
        type: 'website',
        siteName: 'Mid South Dumpster Rentals',
        title: 'Dumpster Rental Agreement | Service Terms',
        description: 'The full rental agreement: permitted and prohibited materials, weight limits, overage and extension fees, liability, and payment terms.',
        url: 'https://midsouthdumpsterms.com/service-terms',
        images: [{ url: 'https://midsouthdumpsterms.com/images/og-image.jpg', width: 1200, height: 630, alt: 'Mid South Dumpster Rentals - roll-off dumpster rental in Jackson, MS' }],
    },
}

const h2Style = { color: 'var(--color-gray-900)', marginTop: '2rem', marginBottom: '0.5rem', fontSize: '1.2rem' }
const ulStyle = { paddingLeft: '1.5rem', marginBottom: '1rem' }
const warningBoxStyle = {
    background: '#fff7ed',
    border: '2px solid #f97316',
    borderRadius: '10px',
    padding: '1rem 1.5rem',
    margin: '1rem 0',
    fontWeight: 700,
    color: '#9a3412',
    textAlign: 'center' as const,
}

export default function RentalAgreementPage() {
    return (
        <div style={{ background: 'white', minHeight: '80vh' }}>
            {/* Hero */}
            <div style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))', padding: '3rem 1rem', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Dumpster Rental Agreement</h1>
                    <p style={{ opacity: 0.85, margin: 0 }}>Mid South Dumpster Rentals, LLC</p>
                </div>
            </div>

            <div className="container" style={{ maxWidth: '800px', padding: '3rem 1.5rem' }}>
                <div style={{ lineHeight: 1.8, color: 'var(--color-gray-700)' }}>

                    <p>This Dumpster Rental Agreement (&quot;Agreement&quot;) is between <strong>Mid South Dumpster Rentals, LLC</strong> (&quot;Company&quot;) and the customer or client (&quot;Customer&quot;). By using the Company&apos;s services, Customer agrees to the following terms and conditions.</p>

                    {/* Section 1 */}
                    <h2 style={h2Style}>1. Parties &amp; Dates</h2>
                    <p>Customer/client name and dates of this Agreement are determined at the time of service. Customer/client must provide a valid driver&apos;s license and/or company information upon signing the Agreement. A valid form of payment must also be provided before service can begin.</p>
                    <p>This Agreement is between Mid South Dumpster Rentals, LLC and any of its customers utilizing dumpster rental services.</p>

                    {/* Section 2 */}
                    <h2 style={h2Style}>2. Delivery, Placement &amp; Pickup</h2>
                    <p>Customers must provide a legal, stable placement location and unobstructed access to the dumpster.</p>
                    <p>Mid South Dumpster Rentals, LLC will deliver and remove the dumpster within scheduled windows. If access is blocked or the container is otherwise inaccessible on pickup day, a <strong>Missed Pickup Fee of $150</strong> and/or additional rental day charges may apply.</p>

                    {/* Section 3 */}
                    <h2 style={h2Style}>3. Permitted &amp; Prohibited Materials</h2>
                    <div style={warningBoxStyle}>⚠️ WEIGHT LIMIT RULES APPLY TO ALL MATERIALS AND ARE STRICTLY ENFORCED</div>

                    <h3 style={{ color: 'var(--color-primary)', fontSize: '1rem', marginTop: '1rem' }}>✅ Permitted Items</h3>
                    <ul style={ulStyle}>
                        <li>Non-hazardous solid waste</li>
                        <li>Household trash (furniture, old toys, playsets, clothing, shoes, bedding, belts, purses)</li>
                        <li>General construction debris (lumber, drywall, PVC, roofing shingles, insulation)</li>
                        <li>Furniture (desks, mattresses, tables, end tables, nightstands)</li>
                        <li>Stoves, ovens, washers, dryers <em>(no refrigerated appliances)</em></li>
                        <li>Porcelain, tile</li>
                        <li>General household waste, plastics, paper</li>
                        <li>Carpet, insulation, hardwood flooring, vinyl flooring, underlayment</li>
                        <li>Yard clippings and natural vegetation</li>
                        <li>Inert materials such as wood, drywall, lumber</li>
                        <li>Stone, brick, or concrete <em>(must adhere to weight limit rules and must have prior approval)</em></li>
                    </ul>

                    <h3 style={{ color: '#dc2626', fontSize: '1rem', marginTop: '1rem' }}>🚫 Prohibited Materials (including, but not limited to)</h3>
                    <ul style={ulStyle}>
                        <li>Hazardous or regulated wastes (paints, stain, solvents, chemicals, oil, fuels, epoxy, asbestos, batteries, barrels, pesticides, etc.)</li>
                        <li>Food waste (expired food, contents of a fridge/pantry, spoiled crops, etc.)</li>
                        <li>Liquids of any kind</li>
                        <li>Freezers, refrigerators, HVAC units, refrigerant appliances</li>
                        <li>Pressurized vessels, tires, electronics, TVs, computers</li>
                        <li>Motor oil, gas/diesel fuel, oil filters, fluorescent bulbs, railroad ties, radioactive materials</li>
                        <li>Medical waste</li>
                    </ul>

                    <p><strong>Violation consequences:</strong> Customer authorizes Mid South Dumpster Rentals, LLC to charge the payment method on file for all fees listed in this Agreement, including overweight charges, additional labor, equipment rental, disposal fees, prohibited material handling fees, damage charges, fuel fees, missed pickup fees, and any other costs incurred. Customer understands these charges may be billed after pickup based on actual disposal weight, required labor, or additional services needed.</p>

                    {/* Section 4 */}
                    <h2 style={h2Style}>4. Weight Limits &amp; Overage Fees</h2>
                    <div style={warningBoxStyle}>🚨 NO PER LOAD WEIGHT PER CONTAINER MAY EXCEED 6,000 POUNDS</div>

                    <div style={{ background: 'var(--color-gray-50)', borderRadius: '10px', padding: '1.25rem 1.5rem', marginTop: '1rem' }}>
                        <p style={{ margin: '0 0 0.75rem', fontWeight: 700 }}>10 yd³ Dumpster</p>
                        <ul style={{ ...ulStyle, marginBottom: 0 }}>
                            <li>Included weight: 1 ton (2,000 lb.)</li>
                            <li>Overage: $55 per excess ton (prorated as applicable)</li>
                        </ul>
                        <p style={{ margin: '1rem 0 0.75rem', fontWeight: 700 }}>15 yd³ Dumpster</p>
                        <ul style={{ ...ulStyle, marginBottom: 0 }}>
                            <li>Included weight: 2 tons (4,000 lb.)</li>
                            <li>Overage: $55 per excess ton (prorated as applicable)</li>
                        </ul>
                        <p style={{ margin: '1rem 0 0.75rem', fontWeight: 700 }}>20 yd³ Dumpster</p>
                        <ul style={{ ...ulStyle, marginBottom: 0 }}>
                            <li>Included weight: 3 tons (6,000 lb.)</li>
                            <li><strong>No tonnage overage allowed. No overloading on 20-yard containers.</strong></li>
                        </ul>
                    </div>
                    <p style={{ marginTop: '1rem' }}>Containers are weighed at the disposal facility; any overweight charges will be invoiced to the Customer and applied to the card on file.</p>

                    {/* Section 5 */}
                    <h2 style={h2Style}>5. Loading &amp; Safety Requirements</h2>
                    <ul style={ulStyle}>
                        <li>No debris above the rim; the container must be tarp-ready with end doors closed and secured.</li>
                        <li>Distribute the load evenly to prevent tipping and ensure safe handling and transport.</li>
                        <li>The customer is responsible for securing the dumpster and for any damage to surfaces, lawns, piping, landscaping, utilities, or structures unless caused by Company negligence.</li>
                    </ul>

                    {/* Section 6 */}
                    <h2 style={h2Style}>6. Rental Period &amp; Fees</h2>
                    <p>Base rental typically covers 1–7 days (as specified in the Customer&apos;s agreement).</p>
                    <ul style={ulStyle}>
                        <li><strong>Extensions:</strong> $50 per additional day, subject to availability.</li>
                        <li><strong>Missed Pickup Fee:</strong> $150/day if the dumpster is inaccessible on the scheduled pickup day.</li>
                        <li><strong>Wait Time:</strong> $50/hour for on-site delays exceeding a 30-minute allotted drop time.</li>
                        <li><strong>Refused &amp; Overweight Refusal Fee:</strong> $500 one-time fee, plus debris handling expenses (heavy equipment rental, disposal fees, hazmat cleanup, etc.).</li>
                    </ul>

                    {/* Section 7 */}
                    <h2 style={h2Style}>7. Inspection &amp; Refusal Rights</h2>
                    <p>If a load is deemed refusable, unsafe, hazardous, or otherwise not acceptable for transport or disposal, Customer agrees to:</p>
                    <ul style={ulStyle}>
                        <li>Unload or remove the material themselves,</li>
                        <li>Correct the issue on the property, and</li>
                        <li>Make the dumpster safe and legal for transport.</li>
                    </ul>
                    <p>If Customer refuses or fails to correct the load, the Company may perform material removal, separation, or remediation at its discretion, and Customer agrees to pay all related labor, equipment, handling, environmental, and disposal costs.</p>
                    <p><strong>At no time will the Company unload material onto the ground or property.</strong> Customer is solely responsible for correcting or removing all unacceptable material.</p>

                    {/* Section 8 */}
                    <h2 style={h2Style}>8. Permits &amp; Approvals</h2>
                    <p>Customers are responsible for obtaining any required municipal permits and paying all associated fees for placement of dumpsters in public areas (including streets, rights-of-way, and other regulated spaces).</p>

                    {/* Section 9 */}
                    <h2 style={h2Style}>9. Liability &amp; Indemnity</h2>
                    <p>Customer agrees to indemnify, defend, and hold harmless Mid South Dumpster Rentals, LLC from any and all claims, liabilities, costs, damages, or expenses (including reasonable attorney fees) arising from Customer&apos;s negligence, misuse, use of prohibited materials, overweight loads, or overfilled containers.</p>
                    <p>Company liability is expressly limited to the rental fees paid by Customer. The Company shall not be liable for indirect, incidental, or consequential damages except where caused by gross negligence, in which case liability is capped at the total rental amount paid.</p>

                    {/* Section 10 */}
                    <h2 style={h2Style}>10. Payment Terms</h2>
                    <p>All fees — including base rental, overage, extra days, fines, and any additional charges — are due upon pickup, completion of service, or invoicing, whichever occurs first.</p>
                    <p>Past-due balances may incur interest at <strong>10% per month</strong>, plus any collection costs, attorney fees, or other expenses required to recover payment.</p>

                    {/* Section 11 */}
                    <h2 style={h2Style}>11. Governing Law</h2>
                    <p>This Agreement is governed by the laws of the <strong>State of Mississippi</strong>. Any disputes arising under this Agreement shall be resolved exclusively in the courts of Mississippi.</p>

                    {/* Section 12 */}
                    <h2 style={h2Style}>12. Entire Agreement &amp; Amendments</h2>
                    <p>This document represents the entire agreement between the parties regarding dumpster rental services and supersedes all prior oral or written agreements. Any amendments or modifications must be in writing and signed by both parties.</p>
                    <p>If any term or provision of this Agreement is found to be invalid or unenforceable under applicable law, the remaining provisions shall remain in full force and effect.</p>

                    {/* Section 13 */}
                    <h2 style={h2Style}>13. Refunds</h2>
                    <p>All refund requests must be submitted <strong>before the dumpster is delivered</strong>. Once the container has been dropped on-site, no refunds will be issued.</p>
                    <p>If a credit or debit card is used for payment, the rental amount will be refunded minus a <strong>$40 processing fee</strong> to cover mandatory merchant service charges. Refunds typically take 3–10 business days depending on the customer&apos;s bank.</p>
                    <p>Cancellations made within 24 hours of the scheduled delivery may be subject to additional dispatch or scheduling fees.</p>

                    {/* Section 15 */}
                    <h2 style={h2Style}>15. Manual Handling &amp; Unloading Charges</h2>
                    <p>If Mid South Dumpster Rentals, LLC is required to manually empty, unload, or otherwise handle any material from the customer&apos;s container — including but not limited to situations involving overweight loads, compacted debris, prohibited items, unsafe dumping conditions, or any circumstance that prevents safe mechanical disposal — the Customer agrees to be fully responsible for all associated costs. These costs may include labor, equipment, handling fees, surcharges from disposal facilities, and any related expenses incurred during the manual removal or redistribution of material.</p>

                    {/* Contact */}
                    <div style={{ background: 'var(--color-gray-50)', borderRadius: '10px', padding: '1.25rem 1.5rem', marginTop: '2.5rem' }}>
                        <p style={{ margin: '0 0 0.25rem' }}><strong>Mid South Dumpster Rentals, LLC</strong></p>
                        <p style={{ margin: '0 0 0.25rem' }}>3080 B John R Lynch St, Jackson, MS 39209</p>
                        <p style={{ margin: '0 0 0.25rem' }}>Phone: <a href="tel:6013167891" style={{ color: 'var(--color-primary)' }}>601-316-7891</a></p>
                        <p style={{ margin: 0 }}>Website: <a href="https://midsouthdumpsterms.com" style={{ color: 'var(--color-primary)' }}>midsouthdumpsterms.com</a></p>
                    </div>

                    <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--color-gray-400)', fontStyle: 'italic' }}>Note: Dollar amounts and bracketed terms should be reviewed and finalized by the Company and, if desired, by legal counsel prior to use.</p>
                </div>
            </div>
        </div>
    )
}
