'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays,
    isSameMonth,
    isSameDay,
    isWithinInterval,
    parseISO
} from 'date-fns'
import { useCart } from '@/hooks/useCart'

interface AvailabilityCalendarProps {
    bookedDates?: string[] // ISO date strings
}

export const AvailabilityCalendar = ({ bookedDates = [] }: AvailabilityCalendarProps) => {
    const { startDate, endDate } = useCart()
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

    const renderHeader = () => {
        return (
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-white">Availability</h3>
                <div className="flex space-x-2">
                    <button
                        onClick={prevMonth}
                        className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                        disabled={isSameMonth(currentMonth, new Date())} // Optional: Prevent going too far back
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-sm font-medium text-white pt-1">
                        {format(currentMonth, 'MMMM yyyy')}
                    </span>
                    <button
                        onClick={nextMonth}
                        className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        )
    }

    const renderDays = () => {
        const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        return (
            <div className="grid grid-cols-7 gap-2 text-center mb-2">
                {days.map((d) => (
                    <div key={d} className="text-xs font-medium text-slate-500">
                        {d}
                    </div>
                ))}
            </div>
        )
    }

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth)
        const monthEnd = endOfMonth(monthStart)
        const startDateGrid = startOfWeek(monthStart)
        const endDateGrid = endOfWeek(monthEnd)

        const rows = []
        let days = []
        let day = startDateGrid
        let formattedDate = ''

        while (day <= endDateGrid) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, 'd')
                const cloneDay = day

                // Check status
                const isBooked = bookedDates.some(d => isSameDay(parseISO(d), cloneDay))
                let isSelected = false

                if (startDate && endDate) {
                    isSelected = isWithinInterval(cloneDay, { start: startDate, end: endDate })
                }

                const isCurrentMonth = isSameMonth(day, monthStart)

                days.push(
                    <div
                        key={day.toISOString()}
                        className={`
                            aspect-square flex items-center justify-center text-sm rounded-lg relative
                            ${!isCurrentMonth ? 'text-slate-700' : ''}
                            ${isBooked ? 'bg-rose-500/10 text-rose-500 line-through cursor-not-allowed' : ''}
                            ${isSelected && !isBooked ? 'bg-amber-500 text-slate-950 font-bold' : ''}
                            ${!isBooked && !isSelected && isCurrentMonth ? 'hover:bg-slate-800 text-slate-300' : ''}
                        `}
                    >
                        {formattedDate}
                    </div>
                )
                day = addDays(day, 1)
            }
            rows.push(
                <div className="grid grid-cols-7 gap-2" key={day.toISOString()}>
                    {days}
                </div>
            )
            days = []
        }
        return <div className="space-y-2">{rows}</div>
    }

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            {renderHeader()}
            {renderDays()}
            {renderCells()}

            <div className="flex items-center space-x-4 mt-6 text-xs text-slate-400">
                <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mr-2" />
                    Selected
                </div>
                <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-rose-500 mr-2" />
                    Booked
                </div>
                <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-slate-700 mr-2" />
                    Available
                </div>
            </div>
        </div>
    )
}

