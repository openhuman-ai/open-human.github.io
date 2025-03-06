export function renderComponent(ComponentOrNode, props) {
  if (!ComponentOrNode) return null
  if (typeof ComponentOrNode !== "function") return ComponentOrNode
  return React.createElement(ComponentOrNode, props)
}

export function renderString(stringOrFunction, props = {}) {
  const result =
    typeof stringOrFunction === "function"
      ? stringOrFunction(props)
      : stringOrFunction
  return result || ""
}
