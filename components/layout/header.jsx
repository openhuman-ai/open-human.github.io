import React from "react"
import Navbar from "./navbar"
import AuthButton from "@/components/auth/auth-button"
import Image from "next/image"
import Link from "next/link"
import TwitterIcon from "@/icons/twitter"
import Github from "@/icons/github"

export default function Header() {
  return (
    // <div className="nextra-nav-container sticky top-0 z-20 w-full bg-transparent print:hidden">
    //     <div className="nextra-nav-container-blur">
    //     </div>
    //     <nav className="mx-auto flex h-[var(--nextra-navbar-height)] max-w-[90rem] items-center justify-end gap-4 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
    <Navbar>
      <Link
        className="flex items-center px-24 hovesr:opacity-75 ltr:mr-auto rtl:ml-auto"
        href="/"
      >
        <Image
          src="/logo.svg"
          width={25}
          height={25}
          style={{ height: "25px", width: "auto" }}
          className="w-auto"
          alt="logo"
        />
        <span
          className="max-md:hidden select-none font-extrabold ltr:ml-2 rtl:mr-2"
          title="MillionScope: Research Community"
        >
          MillionScope
        </span>
      </Link>
      {/* <a className="text-sm contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap font-bold subpixel-antialiased" aria-current="true" href="/docs/getting-started">Docs</a> */}
      {/* <div className="relative" data-headlessui-state="">
                <button className="text-sm contrast-more:text-gray-700 contrast-more:dark:text-gray-100 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 max-md:hidden items-center whitespace-nowrap rounded flex gap-1" id="headlessui-menu-button-:R5596:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">About<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-[18px] min-w-[18px] rounded-sm p-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" className="origin-center transition-transform rotate-90">
                    </path>
                </svg>
                </button>
            </div> */}
      {/* <a className="text-sm contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" aria-current="false" href="/examples/basic">Examples</a> */}
      {/* <a className="text-sm contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" aria-current="false" href="/blog">Blog</a> */}
      <AuthButton />

      {/* <div className="nextra-search relative md:w-64 max-md:hidden">
                    <div className="relative flex items-center text-gray-900 contrast-more:text-gray-800 dark:text-gray-300 contrast-more:dark:text-gray-300">
                        <input spellcheck="false" className="w-full appearance-none rounded-lg px-3 py-2 transition-colors text-base leading-tight md:text-sm bg-black/[.05] dark:bg-gray-50/10 focus:!bg-transparent placeholder:text-gray-500 dark:placeholder:text-gray-400 contrast-more:border contrast-more:border-current" type="search" placeholder="Search documentation…" value="" />
                        <kbd className="absolute my-1.5 select-none ltr:right-1.5 rtl:left-1.5 h-5 rounded bg-white px-1.5 font-mono text-[10px] font-bold text-gray-500 border dark:border-gray-100/20 dark:bg-black/50 contrast-more:border-current contrast-more:text-current contrast-more:dark:border-current items-center gap-1 transition-opacity flex pointer-events-none max-sm:hidden">
                            <span className="text-xs">⌘</span>K</kbd>
                    </div>
                </div> */}
      {/* <Link
        href="https://openhuman.github.io/leaderboard"
        target="blank"
        rel="blank"
        className="text-sm contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
        aria-current="false"
      >
        OpenHuman ↗
      </Link> */}
      {/* <Link
        href="https://openhuman.github.io/2024/"
        target="blank"
        rel="blank"
        className="text-sm contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
        aria-current="false"
      >
        OpenHuman Workshop
      </Link> */}
      <Link
        href="https://github.com/openhuman-ai"
        target="blank"
        rel="noreferrer"
      >
        <Github />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href="https://x.com/openhuman_ai"
        target="blank"
        rel="noreferrer"
      >
        <TwitterIcon />
      </Link>
    </Navbar>
    //     </nav>
    // </div>
  )
}
