'use client'

import React, { useState } from 'react'
import {
    Package,
    Clock,
    Settings,
    LogOut,
    Camera,
    Calendar,
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { BookingCard } from '@/components/booking/BookingCard'
import { Booking } from '@/types'

export default function UserDashboard() {
    const { user, logout } = useAuth()
    const [activeTab, setActiveTab] = useState<'rentals' | 'history' | 'settings'>(
        'rentals',
    )

    // Mock data
    const activeBookings: Booking[] = [
        {
            id: 'bk-123456',
            userId: 'u-123',
            items: [
                {
                    id: 'cam-001',
                    name: 'Sony Alpha a7 IV',
                    brand: 'Sony',
                    model: 'ILCE-7M4',
                    category: 'Photography',
                    description: '',
                    specs: {},
                    images: [],
                    dailyRate: 85,
                    weeklyRate: 340,
                    monthlyRate: 1020,
                    deposit: 1500,
                    condition: 'Excellent',
                    rating: 4.8,
                    reviewCount: 124,
                    stock: 5,
                    features: [],
                    includedItems: [],
                    startDate: new Date().toISOString(),
                    endDate: new Date(Date.now() + 86400000 * 3).toISOString(),
                    days: 3,
                },
            ],
            startDate: new Date().toISOString(),
            endDate: new Date(Date.now() + 86400000 * 3).toISOString(),
            status: 'active',
            totalAmount: 255,
            depositAmount: 1500,
            createdAt: new Date().toISOString(),
        },
    ]

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="md:w-64 shrink-0">
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 bg-slate-800 rounded-full overflow-hidden">
                                    <img
                                        src={user?.avatar}
                                        alt={user?.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">{user?.name}</h3>
                                    <p className="text-xs text-slate-400 capitalize">
                                        {user?.role} Member
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <button
                                    onClick={() => setActiveTab('rentals')}
                                    className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'rentals' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                                >
                                    <Camera className="w-4 h-4" />
                                    <span>Active Rentals</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('history')}
                                    className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'history' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                                >
                                    <Clock className="w-4 h-4" />
                                    <span>Order History</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('settings')}
                                    className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                                >
                                    <Settings className="w-4 h-4" />
                                    <span>Settings</span>
                                </button>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-800">
                                <button
                                    onClick={logout}
                                    className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium text-rose-500 hover:bg-rose-500/10 transition-colors"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span>Log Out</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow">
                        {activeTab === 'rentals' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    Active Rentals
                                </h2>
                                {activeBookings.length > 0 ? (
                                    activeBookings.map((booking) => (
                                        <BookingCard key={booking.id} booking={booking} />
                                    ))
                                ) : (
                                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center">
                                        <Package className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                                        <h3 className="text-lg font-medium text-white mb-2">
                                            No active rentals
                                        </h3>
                                        <p className="text-slate-400 mb-6">
                                            You don't have any equipment currently rented.
                                        </p>
                                        <Button>Browse Equipment</Button>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'history' && (
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    Order History
                                </h2>
                                <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center text-slate-400">
                                    No past orders found.
                                </div>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    Account Settings
                                </h2>
                                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                                    <form className="space-y-6 max-w-lg">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Display Name
                                            </label>
                                            <input
                                                type="text"
                                                defaultValue={user?.name}
                                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                defaultValue={user?.email}
                                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                                            />
                                        </div>
                                        <Button>Save Changes</Button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
