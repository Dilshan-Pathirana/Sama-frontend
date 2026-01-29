import React from 'react'
import { Card } from '@/components/ui/card'

interface StatsCardProps {
    title: string
    value: string
    trend?: string
    trendUp?: boolean
    icon: React.ReactNode
}

export const StatsCard = ({
    title,
    value,
    trend,
    trendUp,
    icon,
}: StatsCardProps) => {
    return (
        <Card className="p-6">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">{title}</p>
                    <h3 className="text-2xl font-bold text-white">{value}</h3>
                    {trend && (
                        <p
                            className={`text-xs font-medium mt-2 ${trendUp ? 'text-emerald-500' : 'text-rose-500'}`}
                        >
                            {trendUp ? '↑' : '↓'} {trend} vs last month
                        </p>
                    )}
                </div>
                <div className="p-3 bg-slate-800 rounded-lg text-amber-500">{icon}</div>
            </div>
        </Card>
    )
}
