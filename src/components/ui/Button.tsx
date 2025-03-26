'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        return (
            <button
                className={cn(
                    'btn',
                    {
                        'btn-primary': variant === 'primary',
                        'btn-secondary': variant === 'secondary',
                        'btn-outline': variant === 'outline',
                        'px-4 py-2 text-sm': size === 'sm',
                        'px-6 py-3': size === 'md',
                        'px-8 py-4 text-lg': size === 'lg',
                    },
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'

export default Button 