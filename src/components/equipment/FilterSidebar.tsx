'use client'

import React from 'react'
import { X } from 'lucide-react'
import { categories } from '@/data/categories'
import { Button } from '@/components/ui/button'

interface FilterSidebarProps {
    filters: any
    setFilters: (filters: any) => void
    isOpen?: boolean
    onClose?: () => void
}

export const FilterSidebar = ({
    filters,
    setFilters,
    isOpen,
    onClose,
}: FilterSidebarProps) => {
    const handleCategoryChange = (category: string) => {
        const current = filters.categories || []
        const updated = current.includes(category)
            ? current.filter((c: string) => c !== category)
            : [...current, category]
        setFilters({
            ...filters,
            categories: updated,
        })
    }

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters({
            ...filters,
            maxPrice: parseInt(e.target.value),
        })
    }

    return (
        <div
            className={`
      fixed inset-y-0 left-0 z-50 w-80 bg-slate-900 border-r border-slate-800 p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto
      lg:relative lg:transform-none lg:w-80 lg:shrink-0 lg:border-none lg:bg-transparent lg:p-0 lg:block
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}
        >
            <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="text-xl font-bold text-white">Filters</h2>
                <button onClick={onClose} className="text-slate-400 hover:text-white">
                    <X className="w-6 h-6" />
                </button>
            </div>

            <div className="space-y-8">
                {/* Categories */}
                <div>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                        Categories
                    </h3>
                    <div className="space-y-2">
                        {categories.map((cat) => (
                            <label
                                key={cat.id}
                                className="flex items-center space-x-3 cursor-pointer group"
                            >
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        className="peer h-4 w-4 rounded border-slate-700 bg-slate-800 text-amber-500 focus:ring-amber-500 focus:ring-offset-slate-900"
                                        checked={filters.categories?.includes(cat.id)}
                                        onChange={() => handleCategoryChange(cat.id)}
                                    />
                                </div>
                                <span className="text-slate-400 group-hover:text-white transition-colors">
                                    {cat.name}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price Range */}
                <div>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                        Max Daily Rate:{' '}
                        <span className="text-amber-500">${filters.maxPrice || 500}</span>
                    </h3>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        step="10"
                        value={filters.maxPrice || 500}
                        onChange={handlePriceChange}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                        <span>$0</span>
                        <span>$1000+</span>
                    </div>
                </div>

                {/* Availability */}
                <div>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                        Availability
                    </h3>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-amber-500 focus:ring-amber-500 focus:ring-offset-slate-900"
                            checked={filters.inStockOnly}
                            onChange={(e) =>
                                setFilters({
                                    ...filters,
                                    inStockOnly: e.target.checked,
                                })
                            }
                        />
                        <span className="text-slate-400 group-hover:text-white transition-colors">
                            In Stock Only
                        </span>
                    </label>
                </div>

                <Button
                    variant="outline"
                    className="w-full"
                    onClick={() =>
                        setFilters({
                            categories: [],
                            maxPrice: 1000,
                            inStockOnly: false,
                        })
                    }
                >
                    Clear Filters
                </Button>
            </div>
        </div >
    )
}
