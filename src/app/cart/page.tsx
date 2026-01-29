'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { CartItem } from '@/components/cart/CartItem'
import { CartSummary } from '@/components/cart/CartSummary'
import { useCart } from '@/hooks/useCart'
import { Button } from '@/components/ui/button'

export default function CartPage() {
    const {
        items,
        removeItem,
        calculateTotal,
        calculateDeposit,
        count,
    } = useCart()

    if (count === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
                <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mb-6 text-slate-500">
                    <ShoppingBag className="w-12 h-12" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">
                    Your cart is empty
                </h1>
                <p className="text-slate-400 mb-8 text-center max-w-md">
                    Looks like you haven't added any gear yet. Check out our catalog for
                    premium camera equipment.
                </p>
                <Link href="/catalog">
                    <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                        Browse Equipment
                    </Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8">
                    Shopping Cart ({count} items)
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="flex-grow space-y-4">
                        {items.map((item) => (
                            <CartItem key={item.id} item={item} onRemove={removeItem} />
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="lg:w-96 shrink-0">
                        <CartSummary
                            subtotal={calculateTotal()}
                            deposit={calculateDeposit()}
                            tax={calculateTotal() * 0.08}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
