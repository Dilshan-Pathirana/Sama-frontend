'use client'

import React, { forwardRef } from 'react'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    isLoading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className = '',
            variant = 'primary',
            size = 'md',
            isLoading,
            leftIcon,
            rightIcon,
            children,
            disabled,
            ...props
        },
        ref,
    ) => {
        const baseStyles =
            'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed'

        const variants = {
            primary:
                'bg-amber-500 text-slate-950 hover:bg-amber-400 focus:ring-amber-500',
            secondary:
                'bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-500',
            ghost:
                'text-slate-300 hover:text-white hover:bg-slate-800/50 focus:ring-slate-500',
            danger: 'bg-rose-500 text-white hover:bg-rose-600 focus:ring-rose-500',
            outline:
                'border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white focus:ring-slate-500',
        }

        const sizes = {
            sm: 'h-9 px-3 text-sm',
            md: 'h-11 px-6 text-base',
            lg: 'h-14 px-8 text-lg',
        }

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
            </button>
        )
    },
)
Button.displayName = 'Button'
