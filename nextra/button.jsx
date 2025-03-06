"use client"

import cn from 'clsx'


export const classes = {
    border: cn(
        'border border-gray-300 dark:border-neutral-700',
        'contrast-more:border-gray-900 contrast-more:dark:border-gray-50'
    )
}

export function Button({
    children,
    className,
    ...props
}) {
    return (
        <button
            className={cn(
                'transition rounded-md p-1.5',
                classes.border,
                className,
            )}
            {...props}
        >
            {children}
        </button>
    )
}