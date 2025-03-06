"use client"

import { useRouter } from "next/navigation"

import { PlusIcon } from "@/components/icons"
import { SidebarHistory } from "@/components/sidebar-history"
import { SidebarUserNav } from "@/components/sidebar-user-nav"
import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu } from "@/components/ui/sidebar"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { useSidebar } from "@/contexts/sidebar"
import Image from "next/image"

export function AppSidebar() {
  const router = useRouter()
  const { setOpenMobile } = useSidebar()

  return (
    <Sidebar className="group-data-[side=left]:border-r-0">
      <SidebarHeader>
        <SidebarMenu>
          <div className="flex flex-row justify-between items-center">
            <Link
              href="/"
              onClick={() => {
                setOpenMobile(false)
              }}
              className="flex flex-row gap-3 items-center"
            >
              <div className="flex gap-2 px-4">
                <Image src="/logo.svg" width={24} height={24} alt="Logo" />
                <span className="select-none text-lg font-bold  rounded-md cursor-pointer">MillionScope</span>
              </div>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  type="button"
                  className="p-2 h-fit cursor-pointer"
                  onClick={() => {
                    setOpenMobile(false)
                    router.push("/")
                    router.refresh()
                  }}
                >
                  <PlusIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent align="end">New Chat</TooltipContent>
            </Tooltip>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarHistory />
      </SidebarContent>
      <SidebarFooter>
        <SidebarUserNav />
      </SidebarFooter>
    </Sidebar>
  )
}
