import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

import { SidebarLeftIcon } from "./icons"
import { Button } from "./ui/button"
import { useSidebar } from "@/contexts/sidebar"

export function SidebarToggle({ className }) {
  const { toggleSidebar } = useSidebar()

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={toggleSidebar} variant="outline" className="cursor-pointer md:px-2 md:h-fit">
          <SidebarLeftIcon size={16} />
        </Button>
      </TooltipTrigger>
      <TooltipContent align="start">Toggle Sidebar</TooltipContent>
    </Tooltip>
  )
}
