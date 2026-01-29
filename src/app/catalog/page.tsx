'use client'

import React, { useMemo, useState } from 'react'
import { Filter, Search } from 'lucide-react'
import { EquipmentCard } from '@/components/equipment/EquipmentCard'
import { FilterSidebar } from '@/components/equipment/FilterSidebar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { equipment } from '@/data/equipment'

export default function CatalogPage() {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [filters, setFilters] = useState({
        categories: [] as string[],
        maxPrice: 1000,
        inStockOnly: false,
    })

    const filteredEquipment = useMemo(() => {
        return equipment.filter((item) => {
            // Search
            if (
                searchQuery &&
                !item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
                return false
            // Categories
            if (
                filters.categories.length > 0 &&
                !filters.categories.includes(item.category as string)
            )
                return false
            // Price
            if (item.dailyRate > filters.maxPrice) return false
            // Stock
            if (filters.inStockOnly && item.stock === 0) return false
            return true
        })
    }, [searchQuery, filters])

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Equipment Catalog
                        </h1>
                        <p className="text-slate-400">
                            Showing {filteredEquipment.length} results
                        </p>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-grow md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search cameras, lenses..."
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button
                            variant="secondary"
                            className="lg:hidden"
                            onClick={() => setIsFilterOpen(true)}
                        >
                            <Filter className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div className="flex gap-8">
                    <FilterSidebar
                        filters={filters}
                        setFilters={setFilters}
                        isOpen={isFilterOpen}
                        onClose={() => setIsFilterOpen(false)}
                    />

                    <div className="flex-grow">
                        {filteredEquipment.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredEquipment.map((item) => (
                                    <EquipmentCard key={item.id} equipment={item} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-24 bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed">
                                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search className="w-8 h-8 text-slate-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    No equipment found
                                </h3>
                                <p className="text-slate-400 max-w-md mx-auto">
                                    Try adjusting your filters or search terms to find what you're
                                    looking for.
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-6"
                                    onClick={() => {
                                        setFilters({
                                            categories: [],
                                            maxPrice: 1000,
                                            inStockOnly: false,
                                        })
                                        setSearchQuery('')
                                    }}
                                >
                                    Clear All Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
