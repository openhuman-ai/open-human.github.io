"use client"

import { createPopper } from "@popperjs/core"
import { useCallback, useMemo, useRef } from "react"

/**
 * https://github.com/tailwindlabs/headlessui/issues/59
 * Example implementation to use Popper: https://popper.js.org
 */
export function usePopper(options) {
  const reference = useRef(null)
  const popper = useRef(null)

  const cleanupCallback = useRef()

  const instantiatePopper = useCallback(() => {
    if (!reference.current || !popper.current) return

    cleanupCallback.current?.()
    cleanupCallback.current = createPopper(reference.current, popper.current, options).destroy
  }, [reference, popper, cleanupCallback, options])

  return useMemo(
    () => [
      (referenceDomNode) => {
        reference.current = referenceDomNode
        instantiatePopper()
      },
      (popperDomNode) => {
        popper.current = popperDomNode
        instantiatePopper()
      },
    ],
    [reference, popper, instantiatePopper]
  )
}
