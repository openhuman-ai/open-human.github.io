"use client"

import { ActiveAnchorProvider } from "@/contexts/active-anchor"
import { useMenu } from "@/contexts/menu"
import Link from "next/link"
import React, { createContext, useEffect, useRef, useState } from "react"
import Introduction from "@/icons/introduction"
import UserStudy from "@/icons/userstudy"
import SubmissionIcon from "@/icons/submit"
import TeamIcon from "@/icons/team"
import Evaluation from "@/icons/evaluation"
import Question from "@/icons/question"
import AboutUs from "@/icons/about"
import AISystem from "@/icons/aisystem"
import Leaderboard from "@/icons/leaderboard"

// Advanced
export const OnFocusItemContext = createContext(null)
OnFocusItemContext.displayName = "OnFocusItem"

export default function LeftMenuBar() {
  const { menu, setMenu } = useMenu()
  const [focused, setFocused] = useState(null)
  const [showSidebar, setSidebar] = useState(true)
  const [showToggleAnimation, setToggleAnimation] = useState(false)

  // const anchors = useMemo(() => toc.filter((v) => v.depth === 2), [toc])
  const sidebarRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-hidden", "md:overflow-auto")
    } else {
      document.body.classList.remove("overflow-hidden", "md:overflow-auto")
    }
  }, [menu])

  useEffect(() => {
    const activeElement = sidebarRef.current?.querySelector("li.active")

    if (activeElement && (window.innerWidth > 767 || menu)) {
      const scroll = () => {
        scrollIntoView(activeElement, {
          block: "center",
          inline: "center",
          scrollMode: "always",
          boundary: containerRef.current,
        })
      }
      if (menu) {
        // needs for mobile since menu has transition transform
        setTimeout(scroll, 300)
      } else {
        scroll()
      }
    }
  }, [menu])

  const items = [
    {
      title: "Title",
      type: "file",
    },
  ]
  const anchors = [
    {
      value: "Thanh",
      id: "item 1",
    },
    {
      value: "Thanh",
      id: "item 1",
    },
  ]

  return (
    <ActiveAnchorProvider>
      {/* <OnFocusItemContext.Provider
        value={(item) => {
          setFocused(item)
        }}
      >
        <File items={items} anchors={anchors} />
      </OnFocusItemContext.Provider> */}
      <aside className="nextra-sidebar-container flex flex-col md:top-16 md:shrink-0 motion-reduce:transform-none transform-gpu transition-all ease-in-out print:hidden md:w-64 md:sticky md:self-start max-md:[transform:translate3d(0,-100%,0)]">
        <div className="overflow-y-auto overflow-x-hidden p-4 grow md:h-[calc(100vh-var(--nextra-navbar-height)-var(--nextra-menu-height))] nextra-scrollbar">
          <div className="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none">
            <div className="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-100">
              <ul className="flex flex-col gap-1 nextra-menu-desktop max-md:hidden">
                {/* <li className="flex flex-col gap-1 active">
                  <a
                    className="flex rounded gap-2 items-center px-2 py-1.5 text-sm transition-colors cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border bg-primary-100 font-semibold text-primary-800 dark:bg-primary-400/10 dark:text-primary-600 contrast-more:border-primary-500 contrast-more:dark:border-primary-500"
                    href="/getting-started"
                  >
                    Getting&nbsp;Started
                  </a>
                </li> */}
                <li className="flex flex-col gap-1">
                  <Link
                    className="flex rounded gap-2 items-center px-2 py-1.5 text-sm transition-colors cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50"
                    href="/getting-started"
                  >
                    <Introduction className="w-5" />
                    Getting&nbsp;Started
                  </Link>
                </li>
                <li className="flex flex-col gap-1">
                  <Link
                    className="flex rounded gap-2 items-center px-2 py-1.5 text-sm transition-colors cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50"
                    href="/submission"
                  >
                    <SubmissionIcon className="w-5" />
                    Submission
                  </Link>
                </li>

                <li className="flex flex-col gap-1">
                  <Link
                    className="flex rounded gap-2 items-center px-2 py-1.5 text-sm transition-colors cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50"
                    href="/leaderboard"
                  >
                    <Leaderboard className="w-5" />
                    Leaderboard
                  </Link>
                </li>
                <li className="flex flex-col gap-1">
                  <Link
                    className="flex rounded gap-2 items-center px-2 py-1.5 text-sm transition-colors cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50"
                    href="/result"
                  >
                    <Evaluation className="w-5" />
                    Evaluation Result
                  </Link>
                </li>
                <li className="flex flex-col gap-1">
                  <Link
                    className="flex rounded gap-2 items-center px-2 py-1.5 text-sm transition-colors cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50"
                    href="/question"
                  >
                    <Question className="w-5" />
                    Question
                  </Link>
                </li>

                <li className="flex flex-col gap-1">
                  <Link
                    target="blank"
                    rel="blank"
                    className="flex rounded gap-2 items-center px-2 py-1.5 text-sm transition-colors cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50"
                    href="https://open-human.github.io/leaderboard/organisers/"
                  >
                    <AboutUs className="w-5" />
                    About us ↗
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </ActiveAnchorProvider>
  )
}
