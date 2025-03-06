import cn from "clsx"

export function Steps({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "nextra-steps ml-4 mb-12 border-l border-gray-200 pl-6",
        "dark:border-neutral-800 [counter-reset:step]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
