'use client'

import React from 'react'
import { Trash2, Calendar } from 'lucide-react'
import { CartItem as CartItemType } from '@/types'

interface CartItemProps {
    item: CartItemType
    onRemove: (id: string) => void
}

export const CartItem = ({ item, onRemove }: CartItemProps) => {
    return (
        <div className="flex gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl">
            <div className="w-24 h-24 bg-slate-800 rounded-lg overflow-hidden shrink-0">
                <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-semibold text-white">{item.name}</h4>
                        <p className="text-sm text-slate-400">{item.brand}</p>
                    </div>
                    <p className="font-bold text-amber-500">
                        ${item.dailyRate * item.days}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
                        <Calendar className="w-3 h-3 mr-1.5" />
                        <span>{item.days} Days Rental</span>
                    </div>

                    <button
                        onClick={() => onRemove(item.id)}
                        className="text-slate-500 hover:text-rose-500 transition-colors p-1"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}
