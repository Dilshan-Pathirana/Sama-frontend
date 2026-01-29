'use client'

import React from 'react'
import { Search, FileText, MessageCircle, Phone, Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function SupportPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-6">
                        How can we help you?
                    </h1>
                    <div className="max-w-xl mx-auto">
                        <Input
                            placeholder="Search for answers..."
                            icon={<Search className="w-5 h-5" />}
                            className="bg-slate-900 border-slate-700"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {[
                        'Getting Started',
                        'Booking & Payments',
                        'Equipment Guide',
                        'Insurance & Protection',
                        'Returns & Late Fees',
                        'Technical Support'
                    ].map((topic) => (
                        <div key={topic} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-colors cursor-pointer group">
                            <FileText className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold text-white mb-2">{topic}</h3>
                            <p className="text-sm text-slate-400">Find articles and guides about {topic.toLowerCase()}.</p>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
                    <p className="text-slate-400 mb-8">
                        Our support team is available Mon-Fri, 9am - 6pm.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <Button size="lg" leftIcon={<MessageCircle className="w-5 h-5" />}>
                            Live Chat
                        </Button>
                        <Button size="lg" variant="secondary" leftIcon={<Mail className="w-5 h-5" />}>
                            Email Support
                        </Button>
                        <Button size="lg" variant="outline" leftIcon={<Phone className="w-5 h-5" />}>
                            Call Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
