import React from 'react'

interface BadgeProps {
    children: React.ReactNode
    variant?: 'default' | 'success' | 'warning' | 'error' | 'outline'
    className?: string
}

export const Badge = ({
    children,
    variant = 'default',
    className = '',
}: BadgeProps) => {
    const variants = {
        default: 'bg-slate-800 text-slate-300',
        success: 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
        warning: 'bg-amber-500/10 text-amber-500 border border-amber-500/20',
        error: 'bg-rose-500/10 text-rose-500 border border-rose-500/20',
        outline: 'border border-slate-700 text-slate-400',
    }

    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
        >
            {children}
        </span>
    )
}
