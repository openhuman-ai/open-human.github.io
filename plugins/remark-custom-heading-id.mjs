import { visit } from "unist-util-visit"

export function remarkCustomHeadingId() {
  return (ast) => {
    visit(ast, "heading", (node) => {
      const lastChild = node.children[node.children.length - 1]
      if (!lastChild || lastChild.type !== "text") return

      const heading = lastChild.value
      const matched = heading.match(/\s*\[#([^]+?)]\s*$/)

      if (!matched) return
      node.data = node.data || {}
      const headingProps = (node.data.hProperties = node.data.hProperties || {})
      headingProps.id = matched[1]

      lastChild.value = heading.slice(0, matched.index)
    })
  }
}
