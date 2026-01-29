import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CartSummaryProps {
    subtotal: number
    deposit: number
    tax?: number
}

export const CartSummary = ({
    subtotal,
    deposit,
    tax = 0,
}: CartSummaryProps) => {
    const total = subtotal + tax
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>

            <div className="space-y-2 text-sm">
                <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                    <span>Security Deposit (Refundable)</span>
                    <span className="text-white">${deposit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                    <span>Tax (Estimated)</span>
                    <span className="text-white">${tax.toFixed(2)}</span>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-4">
                <div className="flex justify-between items-end mb-1">
                    <span className="text-base font-medium text-white">
                        Total Due Now
                    </span>
                    <span className="text-2xl font-bold text-amber-500">
                        ${total.toFixed(2)}
                    </span>
                </div>
                <p className="text-xs text-slate-500 text-right">
                    Includes refundable deposit of ${deposit}
                </p>
            </div>

            <Link href="/checkout" className="block">
                <Button className="w-full" size="lg">
                    Proceed to Checkout
                </Button>
            </Link>

            <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 pt-2">
                <span>🔒 Secure Checkout</span>
            </div>
        </div>
    )
}
