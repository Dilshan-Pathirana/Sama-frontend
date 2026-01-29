'use client'

import React, { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    icon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', label, error, icon, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        {label}
                    </label>
                )}
                <div className="relative">
                    {icon && (
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            {icon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        className={`
              w-full bg-slate-900 border border-slate-700 rounded-lg 
              ${icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5
              text-white placeholder-slate-500
              focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200
              ${error ? 'border-rose-500 focus:ring-rose-500' : ''}
              ${className}
            `}
                        {...props}
                    />
                </div>
                {error && <p className="mt-1 text-sm text-rose-500">{error}</p>}
            </div>
        )
    },
)
Input.displayName = 'Input'
