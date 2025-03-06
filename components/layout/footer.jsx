import { ThemeSwitch } from "@/nextra"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 pb-[env(safe-area-inset-bottom)] dark:bg-neutral-900 print:bg-transparent">
      <div className="mx-auto flex max-w-[90rem] gap-2 py-2 px-4 ">
        {/* <button
          title="Change language"
          className="h-7 rounded-md px-2 text-left text-xs font-bold text-gray-600 transition-colors dark:text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50"
          id="headlessui-listbox-button-:Rit6:"
          type="button"
          aria-haspopup="listbox"
          aria-expanded="false"
          data-headlessui-state=""
        >
          <span className="flex items-center gap-2">
            <svg viewBox="2 2 16 16" width="12" height="12" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="">English</span>
          </span>
        </button> */}
        <ThemeSwitch />
      </div>
      <hr className="dark:border-neutral-800" />
      <div className="mx-auto flex max-w-[90rem] justify-center py-12 text-gray-600 dark:text-gray-400 md:justify-end pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        <a className="focus-visible:nextra-focus flex flex-col  items-start gap-2" target="_blank" rel="noreferrer" title="MillionScope">
          <div className="flex w-full justify-between">
            <span className="font-semibold">Powered by</span>
            <span>© 2025</span>
          </div>
          <div className="flex">
            <Image src="/logo.svg" width={25} height={25} className="h-7 w-7" alt="logo" />
            <span className="max-md:hidden select-none font-extrabold ltr:ml-2 rtl:mr-2" title="MillionScope">
              MillionScope
            </span>
          </div>
        </a>
      </div>
    </footer>
  )
}
