'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Camera, Mail, Lock, User, ArrowRight } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { register } = useAuth()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate API call
        setTimeout(() => {
            register(name, email)
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
                        <h1 className="text-2xl font-bold text-white mb-2">
                            Create Account
                        </h1>
                        <p className="text-slate-400">
                            Join thousands of creators renting premium gear
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            label="Full Name"
                            type="text"
                            placeholder="John Doe"
                            icon={<User className="w-5 h-5" />}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

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

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-amber-500 focus:ring-amber-500 focus:ring-offset-slate-900"
                                    required
                                />
                            </div>
                            <label htmlFor="terms" className="ml-2 text-sm text-slate-400">
                                I agree to the{' '}
                                <a href="#" className="text-amber-500 hover:text-amber-400">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="#" className="text-amber-500 hover:text-amber-400">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                            isLoading={isLoading}
                            rightIcon={<ArrowRight className="w-5 h-5" />}
                        >
                            Create Account
                        </Button>
                    </form>

                    <div className="mt-8 text-center text-sm text-slate-400">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="text-amber-500 hover:text-amber-400 font-medium"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
