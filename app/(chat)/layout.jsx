"use client"

import React from "react"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/contexts/sidebar"
import { SidebarInset } from "@/components/ui/sidebar"

export default function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <SidebarProvider defaultOpen={!isCollapsed}>
        <AppSidebar  />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </>
  )
}
