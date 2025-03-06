"use client"

import cn from 'clsx'
import { Children, useEffect, useMemo, useState } from 'react'
import { Summary } from '.'


export function Details({
    children,
    open,
    ...props
}) {
    const [openState, setOpen] = useState(!!open)
    // To animate the close animation we have to delay the DOM node state here.
    const [delayedOpenState, setDelayedOpenState] = useState(openState)

    useEffect(() => {
        if (!openState) {
            const timeout = setTimeout(() => setDelayedOpenState(openState), 500)
            return () => clearTimeout(timeout)
        }
        setDelayedOpenState(true)
    }, [openState])

    const [summary, restChildren] = useMemo(() => {
        let summary
        const restChildren = Children.map(children, child => {
            const isSummary =
                child &&
                typeof child === 'object' &&
                'type' in child &&
                child.type === Summary

            if (!isSummary) return child

            summary ||= cloneElement(child, {
                onClick(event) {
                    event.preventDefault()
                    setOpen(v => !v)
                }
            })
        })
        return [summary, restChildren]
    }, [children])

    return (
        <details
            className="my-4 rounded border border-gray-200 bg-white p-2 shadow-sm first:mt-0 dark:border-neutral-800 dark:bg-neutral-900"
            {...props}
            open={delayedOpenState}
            data-expanded={openState ? '' : undefined}
        >
            {summary}
            {restChildren}
        </details>
    )
}