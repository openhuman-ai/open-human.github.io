"use client"

import cn from "clsx"
import { createContext, memo, useCallback, useContext, useState } from "react"

const ctx = createContext(0)

function useIndent() {
  return useContext(ctx)
}

function Tree({ children }) {
  return (
    <div
      className={cn(
        "nextra-filetree mt-6 select-none text-sm text-gray-800 dark:text-gray-300",
        "not-prose" // for nextra-theme-blog
      )}
    >
      <div className="inline-block rounded-lg border px-4 py-2 dark:border-neutral-800">
        {children}
      </div>
    </div>
  )
}

function Ident() {
  const length = useIndent()
  return (
    <>
      {Array.from({ length }, (k, i) => (
        <span className="w-5" key={i} />
      ))}
    </>
  )
}

const Folder = memo(
  ({ label, name, open, children, defaultOpen = false, onToggle }) => {
    const indent = useIndent()
    const [isOpen, setIsOpen] = useState(defaultOpen)

    const toggle = useCallback(() => {
      onToggle?.(!isOpen)
      setIsOpen(!isOpen)
    }, [isOpen, onToggle])

    const isFolderOpen = open === undefined ? isOpen : open

    return (
      <li className="flex list-none flex-col">
        <button
          onClick={toggle}
          title={name}
          className="inline-flex cursor-pointer items-center py-1 hover:opacity-60"
        >
          <Ident />
          <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isFolderOpen
                  ? "M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2Z"
                  : "M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z"
              }
            />
          </svg>
          <span className="ml-1">{label ?? name}</span>
        </button>
        {isFolderOpen && (
          <ul>
            <ctx.Provider value={indent + 1}>{children}</ctx.Provider>
          </ul>
        )}
      </li>
    )
  }
)
Folder.displayName = "Folder"

const File = memo(({ label, name, active }) => (
  <li
    className={cn(
      "flex list-none",
      active && "text-primary-600 contrast-more:underline"
    )}
  >
    <span className="inline-flex cursor-default items-center py-1">
      <Ident />
      <svg width="1em" height="1em" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"
        />
      </svg>
      <span className="ml-1">{label ?? name}</span>
    </span>
  </li>
))
File.displayName = "File"

// export const FileTree = Object.assign(Tree, { Folder, File })

export { Tree, Folder, File }
