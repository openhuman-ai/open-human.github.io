import cn from "clsx"

export function Code({
  children,
  className,
  "data-language": _language,
  ...props
}) {
  return (
    <code
      className={cn(
        "nextra-code",
        "data-line-numbers" in props && "[counter-reset:line]",
        className
      )}
      // always show code blocks in ltr
      dir="ltr"
      {...props}
    >
      {children}
    </code>
  )
}
