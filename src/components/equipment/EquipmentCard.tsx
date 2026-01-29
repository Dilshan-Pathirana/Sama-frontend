'use client'

import React from 'react'
import Link from 'next/link'
import { Star, Plus } from 'lucide-react'
import { Equipment } from '@/types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface EquipmentCardProps {
    equipment: Equipment
    onAddToCart?: (e: React.MouseEvent) => void
}

export const EquipmentCard = ({
    equipment,
    onAddToCart,
}: EquipmentCardProps) => {
    return (
        <Link href={`/equipment/${equipment.id}`} className="group h-full">
            <Card hover className="h-full flex flex-col bg-slate-900/50">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
                    <img
                        src={equipment.images[0]}
                        alt={equipment.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                        <Badge
                            variant={equipment.stock > 0 ? 'success' : 'error'}
                            className="backdrop-blur-md"
                        >
                            {equipment.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </Badge>
                    </div>
                    {equipment.condition === 'New' && (
                        <div className="absolute top-3 right-3">
                            <Badge variant="warning" className="backdrop-blur-md">
                                New
                            </Badge>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-amber-500 uppercase tracking-wider">
                            {equipment.category}
                        </span>
                        <div className="flex items-center text-amber-400 text-xs">
                            <Star className="w-3 h-3 fill-current mr-1" />
                            <span>{equipment.rating}</span>
                            <span className="text-slate-500 ml-1">
                                ({equipment.reviewCount})
                            </span>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-amber-500 transition-colors line-clamp-1">
                        {equipment.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4 line-clamp-2 flex-grow">
                        {equipment.description}
                    </p>

                    <div className="flex items-end justify-between mt-auto pt-4 border-t border-slate-800">
                        <div>
                            <p className="text-xs text-slate-500 mb-0.5">Daily Rate</p>
                            <p className="text-xl font-bold text-white">
                                ${equipment.dailyRate}
                            </p>
                        </div>


                    </div>
                </div>
            </Card>
        </Link>
    )
}
