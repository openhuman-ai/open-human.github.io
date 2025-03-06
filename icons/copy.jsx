import React from "react"

export default function CopyIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      height="1em"
      className="nextra-copy-icon"
    >
      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
      <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"></path>
    </svg>
  )
}
