"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Search, Star, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import EquipmentFilters from "./EquipmentFilters";

const CATEGORIES = [
  "Cinema Cameras",
  "Lenses",
  "Lighting",
  "Audio",
  "Gimbals",
  "Drones",
];

export default function EquipmentPage() {
    const [filters, setFilters] = useState({
        q: '',
        category: [] as string[],
        available: false,
        minPrice: '',
        maxPrice: '',
    });
    const [equipment, setEquipment] = useState<any[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const pageSize = 9;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let ignore = false;
        async function fetchEquipment() {
            setLoading(true);
            const params = new URLSearchParams();
            if (filters.q) params.append('q', filters.q);
            if (filters.category.length > 0) params.append('category', filters.category[0]);
            if (filters.available) params.append('available', 'true');
            if (filters.minPrice) params.append('minPrice', filters.minPrice);
            if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
            params.append('page', String(page));
            params.append('pageSize', String(pageSize));
            // Note: This fetch will fail in static export, but the code is now syntactically valid
            // and can be further adapted for static data if needed.
            const res = await fetch(`/api/equipment/search?${params.toString()}`);
            const data = await res.json();
            if (!ignore) {
                setEquipment(data.items);
                setTotal(data.total);
                setLoading(false);
            }
        }
        fetchEquipment();
        return () => { ignore = true; };
    }, [filters, page]);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Equipment Catalog</h1>
                    <p className="text-gray-400">Browse professional gear for your next shoot</p>
                </div>
                <div className="flex items-center space-x-2 w-full md:w-auto">
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Search cameras, lenses..."
                            className="pl-9 bg-white/5 border-white/10"
                            value={filters.q}
                            onChange={e => setFilters(f => ({ ...f, q: e.target.value }))}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Filters */}
                <div className="hidden lg:block space-y-6">
                    <EquipmentFilters categories={CATEGORIES} onChange={f => { setFilters(f); setPage(1); }} />
                </div>

                {/* Product Grid */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {loading ? (
                        <div className="col-span-full text-center text-white">Loading...</div>
                    ) : equipment.length === 0 ? (
                        <div className="col-span-full text-center text-white">No equipment found.</div>
                    ) : equipment.map((item) => (
                        <Link href={`/equipment/${item.id}`} key={item.id} className="group">
                            <div className="glass-card rounded-xl overflow-hidden hover:ring-2 hover:ring-primary/50 transition-all duration-300 h-full flex flex-col">
                                <div className="relative h-48 overflow-hidden bg-gray-900">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={item.imageUrl || '/placeholder.png'} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                                    <div className="absolute top-3 right-3">
                                        <button className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-primary transition-colors">
                                            <Heart className="h-4 w-4" />
                                        </button>
                                    </div>
                                    {!item.available && (
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                            <span className="bg-red-500/80 text-white px-3 py-1 rounded-full text-xs font-bold uppercase backdrop-blur-sm">Rented Out</span>
                                        </div>
                                    )}
                                </div>

                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{item.category?.name || ''}</span>
                                            <div className="flex items-center text-amber-500 text-xs">
                                                <Star className="h-3 w-3 fill-current mr-1" />
                                                {/* TODO: Show real rating */}
                                                5.0 (0)
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-2 leading-tight mb-2">
                                            {item.name}
                                        </h3>
                                    </div>

                                    <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
                                        <div>
                                            <span className="text-2xl font-bold text-white">${item.dailyRate}</span>
                                            <span className="text-gray-500 text-xs ml-1">/ day</span>
                                        </div>
                                        <Button size="sm" variant={item.available ? "primary" : "secondary"} className={!item.available ? "opacity-50" : ""}>
                                            {item.available ? "Rent Now" : "Unavailable"}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
                {Array.from({ length: Math.ceil(total / pageSize) }, (_, i) => (
                    <button
                        key={i}
                        className={`mx-1 px-3 py-1 rounded ${page === i + 1 ? 'bg-primary text-white' : 'bg-white/10 text-white'}`}
                        onClick={() => setPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
