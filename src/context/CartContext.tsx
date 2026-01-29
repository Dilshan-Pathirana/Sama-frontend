'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { CartItem, Equipment } from '../types'

interface CartContextType {
    items: CartItem[]
    addItem: (equipment: Equipment) => void
    startDate: Date | null
    endDate: Date | null
    setRentalDates: (start: Date | null, end: Date | null) => void
    removeItem: (id: string) => void
    clearCart: () => void
    calculateTotal: () => number
    calculateDeposit: () => number
    count: number
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {

    const [items, setItems] = useState<CartItem[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const [isInitialized, setIsInitialized] = useState(false)
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    // Load cart from local storage on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('camrent_cart')
            const savedStart = localStorage.getItem('camrent_start_date')
            const savedEnd = localStorage.getItem('camrent_end_date')

            if (savedCart) {
                try {
                    setItems(JSON.parse(savedCart))
                } catch (e) {
                    console.error('Failed to parse cart', e)
                }
            }
            if (savedStart) setStartDate(new Date(savedStart))
            if (savedEnd) setEndDate(new Date(savedEnd))

            setIsInitialized(true)
        }
    }, [])

    // Save cart to local storage whenever it changes
    useEffect(() => {
        if (isInitialized && typeof window !== 'undefined') {
            localStorage.setItem('camrent_cart', JSON.stringify(items))
            if (startDate) localStorage.setItem('camrent_start_date', startDate.toISOString())
            if (endDate) localStorage.setItem('camrent_end_date', endDate.toISOString())
        }
    }, [items, startDate, endDate, isInitialized])

    const setRentalDates = (start: Date | null, end: Date | null) => {
        setStartDate(start)
        setEndDate(end)
    }

    const addItem = (equipment: Equipment) => {
        if (!startDate || !endDate) {
            alert('Please select rental dates first.')
            return
        }

        const days = Math.max(
            1,
            Math.ceil(
                (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
            )
        )

        const newItem: CartItem = {
            ...equipment,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            days,
        }

        setItems((prev) => {
            // Check if item already exists
            const exists = prev.find(i => i.id === equipment.id)
            if (exists) {
                alert('This item is already in your cart.')
                return prev
            }
            return [...prev, newItem]
        })
        setIsOpen(true)
    }

    const removeItem = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setItems([])
        setStartDate(null)
        setEndDate(null)
        if (typeof window !== 'undefined') {
            localStorage.removeItem('camrent_start_date')
            localStorage.removeItem('camrent_end_date')
        }
    }

    const calculateTotal = () => {
        return items.reduce((total, item) => {
            let rate = item.dailyRate
            if (item.days >= 30) rate = item.monthlyRate / 30
            else if (item.days >= 7) rate = item.weeklyRate / 7

            return total + rate * item.days
        }, 0)
    }

    const calculateDeposit = () => {
        return items.reduce((total, item) => total + item.deposit, 0)
    }

    const value = {
        items,
        startDate,
        endDate,
        setRentalDates,
        addItem,
        removeItem,
        clearCart,
        calculateTotal,
        calculateDeposit,
        count: items.length,
        isOpen,
        setIsOpen,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
