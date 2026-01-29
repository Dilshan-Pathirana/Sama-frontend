'use client'

import React, { forwardRef } from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', hover = false, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`
          bg-slate-900 border border-slate-800 rounded-xl overflow-hidden
          ${hover ? 'hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300' : ''}
          ${className}
        `}
                {...props}
            >
                {children}
            </div>
        )
    },
)
Card.displayName = 'Card'
