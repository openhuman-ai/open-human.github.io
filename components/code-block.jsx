"use client"

import { useEffect, useState } from "react"
// import { getHighlighter } from 'shiki';
import { codeToHtml } from "shiki"

export function CodeBlock({ node, inline, className, children, ...props }) {
  const match = /language-(\w+)/.exec(className || "")
  const language = match ? match[1] : "text"

  const [highlightedCode, setHighlightedCode] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Skip for inline code
    if (inline) return

    const loadHighlighter = async () => {
      try {
        // const highlighter = await getHighlighter({
        //   theme: "github-dark",
        //   langs: ["javascript", "jsx", "typescript", "python", "css", "html", "text"],
        // })

        // Get the code content from children
        const code = String(children).replace(/\n$/, "")
        console.log("lang", language)

        // Generate HTML without pre tags - we'll add our own
        // const tokens = highlighter.codeToThemedTokens(code, language)
        const html = await codeToHtml(code, {
          lang: language,
          theme: "github-light",
        })
        // const bg = highlighter.getTheme().bg || "#1e1e1e"

        // let html = ""
        // for (const line of tokens) {
        //   for (const token of line) {
        //     html += `<span style="color: ${token.color || "inherit"}">${escapeHtml(token.content)}</span>`
        //   }
        //   html += "\n"
        // }
        const strippedHtml = html.replace(/<pre[^>]*>|<\/pre>/g, '')
        setHighlightedCode(strippedHtml)
        // setHighlightedCode(html)
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to load Shiki highlighter:", error)
        setIsLoading(false)
      }
    }
    console.log("loadHighlighter")
    loadHighlighter()
  }, [children, language, inline])

  if (!inline) {
    return match ? (
      <code className={`whitespace-pre-wrap break-words language-${match[1]} bg-transparent`} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    ) : (
      <code className="bg-primary-700/5 border-opacity-[0.04] bg-opacity-[0.03] break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10">{children}</code>
    )
  } else {
    return (
      <code className={`${className} text-sm bg-transparent py-0.5 px-1 rounded-md`} {...props}>
        {children}
      </code>
    )
  }
}
