'use client'

import React from 'react'
import { Camera, Film, Users, Award } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Empowering Filmmakers in Sri Lanka
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Execute Cine Rental is the premier destination for professional cinema equipment, dedicated to elevating the quality of local productions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mb-6">
                            <Camera className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-slate-400 leading-relaxed">
                            We exist to bridge the gap between creative vision and technical possibility. By providing access to high-end cinema cameras, lenses, and lighting at accessible rates, we empower filmmakers to tell their stories without compromise.
                        </p>
                    </div>
                    <div>
                        <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mb-6">
                            <Film className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">The Collection</h2>
                        <p className="text-slate-400 leading-relaxed">
                            Our inventory is curated by industry professionals. From the latest RED and ARRI camera systems to precision optics and innovative lighting solutions, every piece of gear is maintained to the highest standards.
                        </p>
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">5+</div>
                            <div className="text-slate-500">Years of Service</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">1000+</div>
                            <div className="text-slate-500">Productions Supported</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">500+</div>
                            <div className="text-slate-500">Happy Clients</div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                                <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-4 overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-slate-600">
                                        <Users className="w-10 h-10" />
                                    </div>
                                </div>
                                <h3 className="font-bold text-white mb-1">Team Member {i}</h3>
                                <p className="text-sm text-amber-500">Position</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
