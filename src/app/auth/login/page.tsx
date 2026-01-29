'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Camera, Mail, Lock, ArrowRight } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { login } = useAuth()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate API call
        setTimeout(() => {
            login(email)
            setIsLoading(false)
            router.push('/dashboard')
        }, 1000)
    }

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                    <div className="text-center mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center space-x-3 mb-6 group"
                        >
                            <div className="w-10 h-10 rounded-xl overflow-hidden group-hover:scale-105 transition-transform">
                                <img src="/logo.jpg" alt="Execute Cine Rental" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xl font-bold text-white">
                                Execute <span className="text-amber-500">Cine Rental</span>
                            </span>
                        </Link>
                        <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
                        <p className="text-slate-400">
                            Sign in to access your rentals and history
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="you@example.com"
                            icon={<Mail className="w-5 h-5" />}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            icon={<Lock className="w-5 h-5" />}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-slate-300 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="mr-2 rounded border-slate-700 bg-slate-800 text-amber-500 focus:ring-amber-500 focus:ring-offset-slate-900"
                                />
                                Remember me
                            </label>
                            <a href="#" className="text-amber-500 hover:text-amber-400">
                                Forgot password?
                            </a>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                            isLoading={isLoading}
                            rightIcon={<ArrowRight className="w-5 h-5" />}
                        >
                            Sign In
                        </Button>
                    </form>

                    <div className="mt-8 text-center text-sm text-slate-400">
                        Don't have an account?{' '}
                        <Link
                            href="/register"
                            className="text-amber-500 hover:text-amber-400 font-medium"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
