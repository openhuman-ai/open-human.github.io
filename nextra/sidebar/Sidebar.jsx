"use client"

import cn from "clsx"
import { ArrowRightIcon, ExpandIcon } from "@/nextra/icons"
import {
  createContext,
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import scrollIntoView from "scroll-into-view-if-needed"
// import { useActiveAnchor, useMenu, useThemeConfig } from "../contexts"
// import { renderComponent } from '../utils'
import { Anchor } from "@/nextra/anchor"
import { Collapse } from "@/nextra/collapse"
// import { LocaleSwitch } from "@/nextra/locale-switch"
import { renderComponent } from "@/nextra/utils/render"
import { useMenu } from "@/contexts/menu"

const TreeState = Object.create(null)

const FocusedItemContext = createContext(null)
FocusedItemContext.displayName = "FocusedItem"
const OnFocusItemContext = createContext(null)
OnFocusItemContext.displayName = "OnFocusItem"
const FolderLevelContext = createContext(0)
FolderLevelContext.displayName = "FolderLevel"

export function Sidebar({
  docsDirectories,
  fullDirectories,
  asPopover = false,
  toc,
  includePlaceholder,
}) {
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

  // const themeConfig = useThemeConfig()
  // const hasI18n = themeConfig.i18n.length > 0
  // const hasMenu =
  //   themeConfig.darkMode || hasI18n || themeConfig.sidebar.toggleButton

  return (
    <>
      {/* {includePlaceholder && asPopover && (
        <div className="max-xl:hidden h-0 w-64 shrink-0" />
      )}
      <div
        className={cn(
          "motion-reduce:transition-none [transition:background-color1.5sease]",
          menu
            ? "fixed inset-0 z-10 bg-black/80 dark:bg-black/60"
            : "bg-transparent"
        )}
        onClick={() => setMenu(false)}
      /> */}

      <aside
        className={cn(
          "nextra-sidebar-container flex flex-col",
          "md:top-16 md:shrink-0 motion-reduce:transform-none",
          "transform-gpu transition-all ease-in-out",
          "print:hidden",
          showSidebar ? "md:w-64" : "md:w-20",
          asPopover ? "md:hidden" : "md:sticky md:self-start",
          menu
            ? "max-md:[transform:translate3d(0,0,0)]"
            : "max-md:[transform:translate3d(0,-100%,0)]"
        )}
        ref={containerRef}
      >
        {/* 
         {process.env.NEXTRASEARCH && (
          <div className="px-4 pt-4 md:hidden">
            {renderComponent(themeConfig.search.component)}
          </div>
        )} */}
        {/* <FocusedItemContext.Provider value={focused}>
          <OnFocusItemContext.Provider
            value={(item) => {
              setFocused(item)
            }}
          >
            <div
              className={cn(
                "overflow-y-auto overflow-x-hidden",
                "p-4 grow md:h-[calc(100vh-var(--nextra-navbar-height)-var(--nextra-menu-height))]",
                showSidebar ? "nextra-scrollbar" : "no-scrollbar"
              )}
              ref={sidebarRef}
            >
              {mounted && window.innerWidth < 768 && (
                <Menu
                  className="nextra-menu-mobile md:hidden"
                  // The mobile dropdown menu, shows all the directories.
                  directories={fullDirectories}
                  // Always show the anchor links on mobile (`md`).
                  anchors={anchors}
                />
              )}
            </div>
          </OnFocusItemContext.Provider>
        </FocusedItemContext.Provider> */}
        {/* {(!asPopover || !showSidebar) && (
                <Collapse isOpen={showSidebar} horizontal>
                  <Menu
                    className="nextra-menu-desktop max-md:hidden"
                    // The sidebar menu, shows only the docs directories.
                    directories={docsDirectories}
                    // When the viewport size is larger than `md`, hide the anchors in
                    // the sidebar when `floatTOC` is enabled.
                    anchors={themeConfig.toc.float ? [] : anchors}
                    onlyCurrentDocs
                  />
                </Collapse>
              )}
              
           */}
        Sidebar
        {/* {hasMenu && (
          <div
            className={cn(
              "sticky bottom-0",
              "bg-white dark:bg-dark", // when banner is showed, sidebar links can be behind menu, set bg color as body bg color
              "mx-4 py-4 shadow-[0-12px16px#fff]",
              "flex items-center gap-2",
              "dark:border-neutral-800 dark:shadow-[0-12px16px#111]",
              "contrast-more:border-neutral-400 contrast-more:shadow-none contrast-more:dark:shadow-none",
              showSidebar
                ? cn(hasI18n && "justify-end", "border-t")
                : "py-4 flex-wrap justify-center"
            )}
            data-toggle-animation={
              showToggleAnimation ? (showSidebar ? "show" : "hide") : "off"
            }
          >
            <LocaleSwitch
              lite={!showSidebar}
              className={showSidebar ? "grow" : "max-md:grow"}
            />
            {themeConfig.darkMode && (
              <div
                className={showSidebar && !hasI18n ? "grow flex flex-col" : ""}
              >
                {renderComponent(themeConfig.themeSwitch.component, {
                  lite: !showSidebar || hasI18n,
                })}
              </div>
            )}
            {themeConfig.sidebar.toggleButton && (
              <button
                title={showSidebar ? "Hide sidebar" : "Show sidebar"}
                className="max-md:hidden h-7 rounded-md transition-colors text-gray-600 dark:text-gray-400 px-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50"
                onClick={() => {
                  setSidebar(!showSidebar)
                  setToggleAnimation(true)
                }}
              >
                <ExpandIcon isOpen={showSidebar} />
              </button>
            )}
          </div>
        )} */}
      </aside>
    </>
  )
}
