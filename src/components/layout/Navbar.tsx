"use client";

import Link from "next/link";
import { Search, ShoppingCart, Menu, Camera, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 glass">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="bg-primary/20 p-2 rounded-full">
                        <Camera className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        CamRent Pro
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/equipment" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                        Equipment
                    </Link>
                    <Link href="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                        How it Works
                    </Link>
                    <Link href="/support" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                        Support
                    </Link>
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white relative">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-xs rounded-full flex items-center justify-center text-white">0</span>
                    </Button>

                    <div className="h-6 w-px bg-white/10" />

                    <Link href="/auth/login">
                        <Button variant="ghost" className="text-sm">Log in</Button>
                    </Link>
                    <Link href="/auth/register">
                        <Button variant="primary" size="sm" className="text-sm">Get Started</Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden p-4 border-t border-white/10 bg-black/95 absolute w-full backdrop-blur-xl animate-slide-up">
                    <nav className="flex flex-col space-y-4">
                        <Link href="/equipment" className="text-base font-medium text-muted-foreground hover:text-white">
                            Equipment
                        </Link>
                        <Link href="/how-it-works" className="text-base font-medium text-muted-foreground hover:text-white">
                            How it Works
                        </Link>
                        <Link href="/support" className="text-base font-medium text-muted-foreground hover:text-white">
                            Support
                        </Link>
                        <div className="h-px bg-white/10 my-2" />
                        <div className="flex flex-col space-y-3">
                            <Link href="/auth/login">
                                <Button variant="ghost" className="w-full justify-start">Log in</Button>
                            </Link>
                            <Link href="/auth/register">
                                <Button variant="primary" className="w-full">Get Started</Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
