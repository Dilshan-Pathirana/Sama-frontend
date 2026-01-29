"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
    Star,
    Shield,
    Truck,
    ArrowLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EquipmentGallery } from '@/components/equipment/EquipmentGallery';
import { SpecificationsTable } from '@/components/equipment/SpecificationsTable';
import { AvailabilityCalendar } from '@/components/equipment/AvailabilityCalendar';
import { useCart } from '@/hooks/useCart';
import { Equipment } from '@/types';

export default function EquipmentDetailClient({ item }: { item: Equipment }) {
    const { addItem } = useCart();
    const [activeTab, setActiveTab] = useState<'specs' | 'included' | 'reviews'>('specs');

    if (!item) return <div className="pt-24 text-center">Item not found</div>;

    const handleAddToCart = () => {
        addItem(item);
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-6">
            <div className="container mx-auto">
                <Link
                    href="/catalog"
                    className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Catalog
                </Link>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left Column - Gallery */}
                    <div>
                        <EquipmentGallery images={item.images} name={item.name} />
                    </div>
                    {/* Right Column - Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Badge>{item.category}</Badge>
                            {item.stock > 0 ? (
                                <Badge variant="success">In Stock</Badge>
                            ) : (
                                <Badge variant="error">Out of Stock</Badge>
                            )}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            {item.name}
                        </h1>
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="flex items-center text-amber-500">
                                <Star className="w-5 h-5 fill-current" />
                                <span className="ml-1 font-bold">{item.rating}</span>
                            </div>
                            <span className="text-slate-500">|</span>
                            <span className="text-slate-400">{item.reviewCount} Reviews</span>
                        </div>
                        {/* ...rest of the info, pricing, add to cart, etc. ... */}
                    </div>
                </div>
            </div>
        </div>
    );
}
