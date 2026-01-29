'use client'

import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    size = 'md',
}: ModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen) return null

    const sizes = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
    }

    // Check if window is defined (for SSR safety) though useEffect handles most.
    if (typeof document === 'undefined') return null

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />
            <div
                className={`relative w-full ${sizes[size]} bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl transform transition-all`}
            >
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    {title && (
                        <h3 className="text-xl font-semibold text-white">{title}</h3>
                    )}
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6">{children}</div>
            </div>
        </div>,
        document.body,
    )
}
