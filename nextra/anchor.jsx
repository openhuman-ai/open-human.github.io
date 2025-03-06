import NextLink from "next/link"
import { forwardRef } from "react"

export const Anchor = forwardRef(
  ({ href = "", children, newWindow, ...props }, forwardedRef) => {
    if (newWindow) {
      return (
        <a
          ref={forwardedRef}
          href={href}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          {children}
        </a>
      )
    }

    if (!href) {
      return (
        <a ref={forwardedRef} {...props}>
          {children}
        </a>
      )
    }

    return (
      <NextLink ref={forwardedRef} href={href} {...props}>
        {children}
      </NextLink>
    )
  }
)

Anchor.displayName = "Anchor"
