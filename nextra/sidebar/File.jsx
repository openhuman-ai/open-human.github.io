"use client"

import { useMenu } from "@/contexts/menu"
import { useContext } from "react"
import { Separator } from "./Separator"
import { Anchor } from "@/nextra/anchor"
import cn from "clsx"
import { useActiveAnchor } from "@/contexts/active-anchor"
import { useRouter } from "next/navigation"

const classes = {
  link: cn(
    "flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word]",
    "cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border"
  ),
  inactive: cn(
    "text-gray-500 hover:bg-gray-100 hover:text-gray-900",
    "dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50",
    "contrast-more:text-gray-900 contrast-more:dark:text-gray-50",
    "contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50"
  ),
  active: cn(
    "bg-primary-100 font-semibold text-primary-800 dark:bg-primary-400/10 dark:text-primary-600",
    "contrast-more:border-primary-500 contrast-more:dark:border-primary-500"
  ),
  list: cn("flex flex-col gap-1"),
  border: cn(
    "relative before:absolute before:inset-y-1",
    'before:w-px before:bg-gray-200 before:content-[""] dark:before:bg-neutral-800',
    "ltr:pl-3 ltr:before:left-0 rtl:pr-3 rtl:before:right-0"
  ),
}

export function File({ item, anchors }) {
  // const route = useFSRoute()
  const route = useRouter()
  // const onFocus = useContext(OnFocusItemContext)

  // It is possible that the item doesn't have any route - for example an external link.
  // const active = item.route && [route, route + "/"].includes(item.route + "/")
  const activeAnchor = useActiveAnchor()
  const { setMenu } = useMenu()

  if (item.type === "separator") {
    return <Separator title={item.title} />
  }

  return (
    <li className={cn(classes.list, { active })}>
      <Anchor
        href={item.href || item.route}
        newWindow={item.newWindow}
        className={cn(classes.link, active ? classes.active : classes.inactive)}
        onClick={() => {
          setMenu(false)
        }}
        // onFocus={() => {
        //   onFocus?.(item.route)
        // }}
        // onBlur={() => {
        //   onFocus?.(null)
        // }}
      >
        {item.title}
      </Anchor>
      {active && anchors.length > 0 && (
        <ul className={cn(classes.list, classes.border, "ltr:ml-3 rtl:mr-3")}>
          {anchors.map(({ id, value }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  classes.link,
                  'flex gap-2 before:opacity-25 before:content-["#"]',
                  activeAnchor[id]?.isActive ? classes.active : classes.inactive
                )}
                onClick={() => {
                  setMenu(false)
                }}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
