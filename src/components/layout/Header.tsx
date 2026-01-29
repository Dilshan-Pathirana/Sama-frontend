'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Camera, Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import { RentalDateSelector } from '../booking/RentalDateSelector'

import { Button } from '../ui/button'
import { useCart } from '@/hooks/useCart'
import { useAuth } from '@/hooks/useAuth'

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { count } = useCart()
    const { user, isAuthenticated } = useAuth()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        {
            name: 'Equipment',
            path: '/catalog',
        },
        {
            name: 'How it Works',
            path: '/#how-it-works',
        },
        {
            name: 'Support',
            path: '/support',
        },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 rounded-xl overflow-hidden group-hover:scale-105 transition-transform">
                            <img src="/logo.jpg" alt="Execute Cine Rental" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">
                            Execute <span className="text-amber-500">Cine Rental</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <RentalDateSelector />

                        <button className="p-2 text-slate-300 hover:text-white transition-colors">
                            <Search className="w-5 h-5" />
                        </button>

                        <Link
                            href="/cart"
                            className="relative p-2 text-slate-300 hover:text-white transition-colors"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            {count > 0 && (
                                <span className="absolute top-0 right-0 w-4 h-4 bg-amber-500 text-slate-950 text-[10px] font-bold flex items-center justify-center rounded-full">
                                    {count}
                                </span>
                            )}
                        </Link>

                        {
                            isAuthenticated ? (
                                <Link href="/dashboard">
                                    <Button variant="ghost" size="sm" className="space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-800 overflow-hidden">
                                            {user?.avatar ? (
                                                <img
                                                    src={user.avatar}
                                                    alt={user.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <User className="w-4 h-4 m-1" />
                                            )}
                                        </div>
                                        <span>{user?.name.split(' ')[0]}</span>
                                    </Button>
                                </Link>
                            ) : (
                                <div className="flex items-center space-x-2">
                                    <Link href="/auth/login">
                                        <Button variant="ghost" size="sm">
                                            Log in
                                        </Button>
                                    </Link>
                                    <Link href="/auth/register">
                                        <Button variant="primary" size="sm">
                                            Sign up
                                        </Button>
                                    </Link>
                                </div>
                            )
                        }
                    </div >

                    {/* Mobile Menu Button */}
                    < button
                        className="md:hidden p-2 text-slate-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button >
                </div >
            </div >

            {/* Mobile Menu */}
            {
                isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-4 animate-in slide-in-from-top-5">
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="text-base font-medium text-slate-300 hover:text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-slate-800" />
                            <Link
                                href="/cart"
                                className="flex items-center justify-between text-slate-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span>Cart</span>
                                <span className="bg-amber-500 text-slate-950 text-xs font-bold px-2 py-0.5 rounded-full">
                                    {count}
                                </span>
                            </Link>
                            {isAuthenticated ? (
                                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full">Dashboard</Button>
                                </Link>
                            ) : (
                                <div className="grid grid-cols-2 gap-4">
                                    <Link href="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Button variant="secondary" className="w-full">
                                            Log in
                                        </Button>
                                    </Link>
                                    <Link href="/auth/register" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Button variant="primary" className="w-full">
                                            Sign up
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </nav>
                    </div>
                )
            }
        </header >
    )
}
