'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CheckoutPage() {
    const { calculateTotal, calculateDeposit, clearCart } = useCart()
    const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>(
        'details',
    )
    const router = useRouter()

    const subtotal = calculateTotal()
    const deposit = calculateDeposit()
    const total = subtotal + deposit

    const handleDetailsSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStep('payment')
    }

    const handlePaymentSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStep('confirmation')
        clearCart()
        setTimeout(() => {
            router.push('/dashboard')
        }, 3000)
    }

    if (step === 'confirmation') {
        return (
            <div className="min-h-screen pt-24 pb-12 flex items-center justify-center px-4">
                <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Order Confirmed!
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Thank you for your rental. We've sent the confirmation details to
                        your email.
                    </p>
                    <Link href="/dashboard">
                        <Button className="w-full">Go to Dashboard</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-6">
            <div className="container mx-auto max-w-4xl">
                <Link
                    href="/cart"
                    className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Cart
                </Link>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Forms */}
                    <div>
                        <div className="mb-8">
                            <div className="flex items-center space-x-2">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 'details' ? 'bg-amber-500 text-slate-950' : 'bg-emerald-500 text-white'}`}
                                >
                                    1
                                </div>
                                <span
                                    className={step === 'details' ? 'text-white' : 'text-slate-400'}
                                >
                                    Details
                                </span>
                                <div className="w-12 h-px bg-slate-800" />
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 'payment' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}
                                >
                                    2
                                </div>
                                <span
                                    className={step === 'payment' ? 'text-white' : 'text-slate-400'}
                                >
                                    Payment
                                </span>
                            </div>
                        </div>

                        {step === 'details' ? (
                            <form onSubmit={handleDetailsSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <Input label="First Name" required />
                                    <Input label="Last Name" required />
                                </div>
                                <Input label="Email Address" type="email" required />
                                <Input label="Phone Number" type="tel" required />
                                <Input label="Address" required />
                                <div className="grid grid-cols-2 gap-6">
                                    <Input label="City" required />
                                    <Input label="ZIP / Postal Code" required />
                                </div>
                                <Button type="submit" className="w-full" size="lg">
                                    Continue to Payment
                                </Button>
                            </form>
                        ) : (
                            <form onSubmit={handlePaymentSubmit} className="space-y-6">
                                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg mb-6">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <input
                                            type="radio"
                                            name="payment"
                                            defaultChecked
                                            className="text-amber-500 focus:ring-amber-500 bg-slate-800 border-slate-700"
                                        />
                                        <span className="text-white font-medium">Credit Card</span>
                                    </div>
                                    <div className="space-y-4 pl-7">
                                        <Input label="Card Number" placeholder="0000 0000 0000 0000" />
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input label="Expiry Date" placeholder="MM/YY" />
                                            <Input label="CVC" placeholder="123" />
                                        </div>
                                    </div>
                                </div>
                                <Button type="submit" className="w-full" size="lg">
                                    Pay ${total.toFixed(2)}
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* Right Column - Summary */}
                    <div>
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sticky top-24">
                            <h3 className="text-lg font-bold text-white mb-6">
                                Order Summary
                            </h3>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-slate-400">
                                    <span>Rental Subtotal</span>
                                    <span className="text-white">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-400">
                                    <span>Security Deposit</span>
                                    <span className="text-white">${deposit.toFixed(2)}</span>
                                </div>
                                <div className="border-t border-slate-800 pt-4 flex justify-between items-center">
                                    <span className="font-bold text-white">Total</span>
                                    <span className="text-2xl font-bold text-amber-500">
                                        ${total.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4 text-xs text-slate-400">
                                <p className="mb-2">
                                    By clicking "Pay", you agree to our Rental Agreement and Terms
                                    of Service.
                                </p>
                                <p>The security deposit will be refunded upon safe return of the equipment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
