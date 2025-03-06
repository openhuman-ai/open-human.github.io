"use client"
import { ChevronUp } from "lucide-react"
import Image from "next/image"
// import { signOut } from "next-auth/react"
// import { useTheme } from "next-themes"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { useState } from "react"
import { useAuth } from "@/contexts/auth"

const signOut = function () {
  console.log("signOut")
}

export function SidebarUserNav() {
  // const { setTheme, theme } = useTheme()
  const [theme, setTheme] = useState("light")
  const { user, logout } = useAuth()

  if (!user) {
    return <></>
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent bg-background data-[state=open]:text-sidebar-accent-foreground h-10">
              <Image src={user ? user.avatar : ""} alt={user.email ?? "User Avatar"} width={24} height={24} className="rounded-full" />
              <span className="truncate">{user ? (user.email ? user.email : "sample@gmail.com") : "sample@gmail.com"}</span>
              <ChevronUp className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
            <DropdownMenuItem className="cursor-pointer" onSelect={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {`Toggle ${theme === "light" ? "dark" : "light"} mode`}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <button
                type="button"
                className="w-full cursor-pointer"
                onClick={() => {
                  logout()
                }}
              >
                Sign out
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
