import React from "react"
import Navbar from "./navbar"
import Sidebar from "@/components/layout/sidebar"

export default function Layout({ children }) {
  return (
    <div className="mx-auto flex max-w-[90rem]">
      <Sidebar />
      <Navbar />
      <article className="w-full min-w-0 break-words min-h-[calc(100vh-var(--nextra-navbar-height))] text-slate-700 dark:text-slate-200 pb-8 px-6 pt-4 md:px-12">
        <main className="">{children}</main>
      </article>
    </div>
  )
}
