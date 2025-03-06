"use client"

import cn from 'clsx'
import { useCallback, useRef } from 'react'
import { Button, classes } from '@/nextra/button'
import { CopyToClipboard } from '@/nextra/copy-to-clipboard'

export function Pre({
    children,
    className,
    'data-filename': filename,
    'data-copy': copy,
    'data-language': language,
    icon: Icon,
    ...props
}) {
    const preRef = useRef(true)

    const toggleWordWrap = useCallback(() => {
        const htmlDataset = document.documentElement.dataset
        const hasWordWrap = 'nextraWordWrap' in htmlDataset
        if (hasWordWrap) {
            delete htmlDataset.nextraWordWrap
        } else {
            htmlDataset.nextraWordWrap = ''
        }
    }, [])

    const copyButton = copy === '' && (
        <CopyToClipboard
            className={filename ? 'ml-auto' : ''}
            getValue={() => preRef.current?.querySelector('code')?.textContent || ''}
        />
    )

    return (
        <div className="nextra-code relative mt-6 first:mt-0">
            {filename && (
                <div
                    className={cn(
                        'px-4 text-xs text-gray-700 dark:text-gray-200',
                        'bg-gray-100 dark:bg-neutral-900',
                        'flex items-center h-10 gap-2 rounded-t-md',
                        classes.border,
                        'border-b-0'
                    )}
                >
                    {Icon && <Icon className="h-3.5 w-auto shrink-0" />}
                    <span className="truncate">{filename}</span>
                    {copyButton}
                </div>
            )}
            <pre
                className={cn(
                    'overflow-x-auto subpixel-antialiased text-[.9em]',
                    'dark:bg-black py-4',
                    'ring-1 ring-inset ring-gray-300 dark:ring-neutral-700',
                    'contrast-more:ring-gray-900 contrast-more:dark:ring-gray-50',
                    'contrast-more:contrast-150',
                    filename ? 'rounded-b-md' : 'rounded-md',
                    className
                )}
                ref={preRef}
                {...props}
            >
                {children}
            </pre>
            <div
                className={cn(
                    'opacity-0 transition [div:hover>&]:opacity-100 focus-within:opacity-100',
                    'flex gap-1 absolute right-4',
                    filename ? 'top-14' : 'top-2'
                )}
            >
                <Button
                    onClick={toggleWordWrap}
                    className="md:hidden bg-red-500"
                    title="Toggle word wrap"
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="h-4 w-auto"
                    >
                        <path
                            fill="currentColor"
                            d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
                        />
                    </svg>
                </Button>
                {!filename && copyButton}
            </div>
        </div>
    )
}