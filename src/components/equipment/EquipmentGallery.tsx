'use client'

import React, { useState } from 'react'
import { Modal } from '@/components/ui/modal'

interface EquipmentGalleryProps {
    images: string[]
    name: string
}

export const EquipmentGallery = ({ images, name }: EquipmentGalleryProps) => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div
                className="aspect-[4/3] bg-slate-800 rounded-xl overflow-hidden cursor-zoom-in relative group"
                onClick={() => setIsModalOpen(true)}
            >
                <img
                    src={images[selectedImage]}
                    alt={`${name} view ${selectedImage + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`
              aspect-square rounded-lg overflow-hidden border-2 transition-all
              ${selectedImage === idx ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-transparent opacity-70 hover:opacity-100'}
            `}
                    >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>

            {/* Fullscreen Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                size="xl"
            >
                <div className="relative aspect-video bg-slate-950 rounded-lg overflow-hidden">
                    <img
                        src={images[selectedImage]}
                        alt={name}
                        className="w-full h-full object-contain"
                    />
                </div>
            </Modal>
        </div>
    )
}
