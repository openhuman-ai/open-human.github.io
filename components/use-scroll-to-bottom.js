import { useEffect, useRef } from "react"

export function useScrollToBottom() {
  const containerRef = useRef(null)
  const endRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const end = endRef.current

    if (container && end) {
      const observer = new MutationObserver(() => {
        end.scrollIntoView({ behavior: "instant", block: "end" })
      })

      observer.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      })

      return () => observer.disconnect()
    }
  }, [])

  return [containerRef, endRef]
}
