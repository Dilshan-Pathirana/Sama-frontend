import React from 'react'
import { Calendar, Package } from 'lucide-react'
import { Booking } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface BookingCardProps {
    booking: Booking
}

export const BookingCard = ({ booking }: BookingCardProps) => {
    const statusColors: Record<string, any> = {
        pending: 'warning',
        confirmed: 'success',
        active: 'success',
        completed: 'default',
        cancelled: 'error',
    }

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <div className="flex items-center space-x-3 mb-1">
                        <h3 className="font-semibold text-white">
                            Order #{booking.id.slice(0, 8)}
                        </h3>
                        <Badge variant={statusColors[booking.status]}>
                            {booking.status}
                        </Badge>
                    </div>
                    <p className="text-sm text-slate-400">
                        Placed on {new Date(booking.createdAt).toLocaleDateString()}
                    </p>
                </div>
                <div className="text-right">
                    <p className="font-bold text-white">${booking.totalAmount}</p>
                    <p className="text-xs text-slate-500">{booking.items.length} items</p>
                </div>
            </div>

            <div className="space-y-4 mb-6">
                <div className="flex items-center text-sm text-slate-300">
                    <Calendar className="w-4 h-4 mr-3 text-amber-500" />
                    <span>
                        {new Date(booking.startDate).toLocaleDateString()} —{' '}
                        {new Date(booking.endDate).toLocaleDateString()}
                    </span>
                </div>
                <div className="flex items-start text-sm text-slate-300">
                    <Package className="w-4 h-4 mr-3 mt-1 text-amber-500" />
                    <div className="flex-1">
                        {booking.items.map((item) => (
                            <div key={item.id} className="mb-1">
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex space-x-3 pt-4 border-t border-slate-800">
                <Button variant="outline" size="sm" className="flex-1">
                    View Invoice
                </Button>
                <Button variant="primary" size="sm" className="flex-1">
                    Support
                </Button>
            </div>
        </div>
    )
}
