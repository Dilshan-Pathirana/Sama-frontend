'use client'

import React from 'react'

export default function TermsPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-6">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-400 mb-6">Last updated: January 29, 2026</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                        <p className="text-slate-300">
                            By accessing or using the Execute Cine Rental platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Rental Agreement</h2>
                        <p className="text-slate-300 mb-4">
                            All rentals are subject to our standard Rental Agreement, which must be signed prior to the release of equipment. Key points include:
                        </p>
                        <ul className="list-disc pl-6 text-slate-300 space-y-2">
                            <li>You must be at least 18 years of age to rent equipment.</li>
                            <li>A valid government-issued ID and credit card are required.</li>
                            <li>You accept full responsibility for the equipment during the rental period.</li>
                            <li>Equipment must be returned by the specified time to avoid late fees.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Insurance & Liability</h2>
                        <p className="text-slate-300 mb-4">
                            Renters are required to provide proof of insurance covering rented equipment or purchase our Damage Protection Plan.
                        </p>
                        <p className="text-slate-300">
                            The renter is liable for any loss, theft, or damage to the equipment that occurs during the rental period, up to the full replacement value of the items.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Cancellations</h2>
                        <p className="text-slate-300">
                            Cancellations made more than 48 hours before the rental start time are eligible for a full refund. Cancellations made within 48 hours may be subject to a cancellation fee equivalent to one day's rental.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
