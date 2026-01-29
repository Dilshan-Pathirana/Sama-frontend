'use client'

import React, { useState } from 'react'
import { Calendar as CalendarIcon, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'
import { useCart } from '@/hooks/useCart'
import { Modal } from '@/components/ui/modal'
import { Button } from '@/components/ui/button' // Fixed import casing

export const RentalDateSelector = () => {
    const { startDate, endDate, setRentalDates, items } = useCart()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [tempStart, setTempStart] = useState<string>(
        startDate ? startDate.toISOString().split('T')[0] : ''
    )
    const [tempEnd, setTempEnd] = useState<string>(
        endDate ? endDate.toISOString().split('T')[0] : ''
    )

    const handleSave = () => {
        if (tempStart && tempEnd) {
            setRentalDates(new Date(tempStart), new Date(tempEnd))
            setIsModalOpen(false)
        }
    }

    // Disable changing dates if cart has items (for now, to keep simple conflict resolution)
    // Or we could specific logic: "Changing dates will update availability for all items"
    const handleOpen = () => {
        if (items.length > 0) {
            if (confirm("Changing dates may affect availability of items in your cart. Proceed?")) {
                setIsModalOpen(true)
            }
        } else {
            setIsModalOpen(true)
        }
    }

    return (
        <>
            <div
                onClick={handleOpen}
                className="hidden md:flex items-center space-x-4 bg-slate-900/50 hover:bg-slate-900 border border-slate-700 rounded-full px-4 py-2 cursor-pointer transition-colors"
            >
                <div className="flex items-center text-slate-300">
                    <CalendarIcon className="w-4 h-4 mr-2 text-amber-500" />
                    <span className="text-sm font-medium">
                        {startDate ? format(startDate, 'MMM dd, yyyy') : 'Select Dates'}
                    </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600" />
                <div className="flex items-center text-slate-300">
                    <span className="text-sm font-medium">
                        {endDate ? format(endDate, 'MMM dd, yyyy') : '...'}
                    </span>
                </div>
            </div>

            {/* Mobile Button */}
            <button
                onClick={handleOpen}
                className="md:hidden p-2 text-slate-300 hover:text-white"
            >
                <CalendarIcon className="w-6 h-6" />
            </button>


            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Select Rental Period"
                size="md"
            >
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">
                                Start Date
                            </label>
                            <input
                                type="date"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                                min={new Date().toISOString().split('T')[0]}
                                value={tempStart}
                                onChange={(e) => setTempStart(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">
                                End Date
                            </label>
                            <input
                                type="date"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                                min={tempStart || new Date().toISOString().split('T')[0]}
                                value={tempEnd}
                                onChange={(e) => setTempEnd(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                        <p className="text-sm text-amber-500">
                            <strong>Note:</strong> All equipment in your cart will be booked for these dates.
                        </p>
                    </div>

                    <div className="flex justify-end gap-3">
                        <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleSave} disabled={!tempStart || !tempEnd}>
                            Apply Dates
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}
