'use client'

import React from 'react'
import {
    Users,
    Package,
    Calendar,
    DollarSign,
    TrendingUp,
    TrendingDown,
} from 'lucide-react'
import { StatsCard } from '@/components/admin/StatsCard'

export default function AdminDashboard() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
                <p className="text-slate-400 mb-8">
                    Overview of platform performance and activity.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <StatsCard
                        title="Total Revenue"
                        value="$12,450"
                        trend="12%"
                        trendUp={true}
                        icon={<DollarSign className="w-6 h-6" />}
                    />
                    <StatsCard
                        title="Active Rentals"
                        value="24"
                        trend="8%"
                        trendUp={true}
                        icon={<Calendar className="w-6 h-6" />}
                    />
                    <StatsCard
                        title="Total Users"
                        value="1,240"
                        trend="2%"
                        trendUp={false}
                        icon={<Users className="w-6 h-6" />}
                    />
                    <StatsCard
                        title="Inventory Value"
                        value="$145k"
                        icon={<Package className="w-6 h-6" />}
                    />
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-white mb-6">
                            Recent Bookings
                        </h3>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400">
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white">Order #{1000 + i}</h4>
                                            <p className="text-sm text-slate-400">2 hours ago</p>
                                        </div>
                                    </div>
                                    <span className="text-amber-500 font-bold">$245.00</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-white mb-6">
                            Low Stock Alert
                        </h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-rose-500/10 rounded-lg flex items-center justify-center text-rose-500">
                                            <Package className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white">
                                                Canon EOS R5 Body
                                            </h4>
                                            <p className="text-sm text-slate-400">1 unit remaining</p>
                                        </div>
                                    </div>
                                    <button className="text-sm text-amber-500 hover:text-amber-400 font-medium">
                                        Restock
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
