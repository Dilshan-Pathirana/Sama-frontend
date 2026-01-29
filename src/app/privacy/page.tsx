'use client'

import React from 'react'

export default function PrivacyPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-6">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-400 mb-6">Last updated: January 29, 2026</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p className="text-slate-300 mb-4">
                            We collect information that you provide directly to us when you create an account, make a rental, or communicate with us. This may include:
                        </p>
                        <ul className="list-disc pl-6 text-slate-300 space-y-2">
                            <li>Name and contact information</li>
                            <li>Billing and payment details (processed securely by our payment provider)</li>
                            <li>Identification documents for verification</li>
                            <li>Rental history and preferences</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <p className="text-slate-300 mb-4">
                            We use the collected information to:
                        </p>
                        <ul className="list-disc pl-6 text-slate-300 space-y-2">
                            <li>Process your rentals and payments</li>
                            <li>Verify your identity and prevent fraud</li>
                            <li>Send transaction notifications and updates</li>
                            <li>Improve our inventory and services</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                        <p className="text-slate-300">
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
                        <p className="text-slate-300">
                            If you have any questions about this Privacy Policy, please contact us at privacy@executecine.com.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
