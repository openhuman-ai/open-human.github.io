import { ArrowRightIcon } from "./icons/arrow-right";
import cn from 'clsx'


export function Summary({
    children,
    ...props
}) {
    return (
        <summary
            className="flex items-center cursor-pointer p-1 transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800"
            {...props}
        >
            {children}
            <ArrowRightIcon
                className={cn(
                    'order-first', // if prettier formats `summary` it will have unexpected margin-top
                    'size-4 shrink-0 mx-1.5',
                    'rtl:rotate-180 [[data-expanded]>summary>&]:rotate-90 transition'
                )}
                pathClassName="stroke-[3px]"
            />
        </summary>
    )
}