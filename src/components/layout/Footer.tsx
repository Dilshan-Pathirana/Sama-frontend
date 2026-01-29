import React from 'react'
import Link from 'next/link'
import { Camera, Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-xl overflow-hidden">
                                <img src="/logo.jpg" alt="Execute Cine Rental" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Execute <span className="text-amber-500">Cine Rental</span>
                            </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Premium film production support and cinema equipment rental in Sri Lanka.
                            Rated ⭐ 5.0/5.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-950 transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-950 transition-all"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-950 transition-all"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-950 transition-all"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/catalog" className="text-slate-400 hover:text-amber-500 transition-colors">Catalog</Link></li>
                            <li><Link href="/#how-it-works" className="text-slate-400 hover:text-amber-500 transition-colors">How it Works</Link></li>
                            <li><Link href="/about" className="text-slate-400 hover:text-amber-500 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Reviews</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="/support" className="text-slate-400 hover:text-amber-500 transition-colors">Help Center</Link></li>
                            <li><Link href="/terms" className="text-slate-400 hover:text-amber-500 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-slate-400 hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-slate-400 hover:text-amber-500 transition-colors">Rental Agreement</Link></li>
                            <li><Link href="/terms" className="text-slate-400 hover:text-amber-500 transition-colors">Insurance Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-slate-400">
                                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                <span>207/1/1 Udahamulla Station Rd, Nugegoda, Western Province, Sri Lanka</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400">
                                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                                <span>+94 11 234 5678</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400">
                                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                                <span>contact@executecine.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} CamRent Pro. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                            alt="Visa"
                            className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                            alt="Mastercard"
                            className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                            alt="PayPal"
                            className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}
