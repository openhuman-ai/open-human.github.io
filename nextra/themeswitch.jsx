'use client'

import React from 'react'
import { MoonIcon, SunIcon } from '@/nextra/icons'
import { useMounted } from '@/utils/hooks/use-mounted'
import { useTheme } from 'next-themes'
import { Select } from './select'

export function ThemeSwitch({ lite, className }) {
  const { setTheme, resolvedTheme, theme = '' } = useTheme()
  const mounted = useMounted()
  //   const config = useThemeConfig().themeSwitch

  const IconToUse = mounted && resolvedTheme === 'dark' ? MoonIcon : SunIcon
  const options = { light: 'Light', dark: 'Dark', system: 'System' }

  return (
    // <button
    //   title="Change theme"
    //   className="h-7 rounded-md px-2 text-left text-xs font-bold text-gray-600 transition-colors dark:text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50"
    //   id="headlessui-listbox-button-:Rkt6:"
    //   type="button"
    //   aria-haspopup="listbox"
    //   aria-expanded="false"
    //   data-headlessui-state=""
    // >
    //   <div className="flex items-center gap-2 capitalize">
    //     <svg
    //       fill="none"
    //       viewBox="2 2 20 20"
    //       width="12"
    //       height="12"
    //       stroke="currentColor"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         fill="currentColor"
    //         d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    //       ></path>
    //     </svg>
    //     <span className="">Dark</span>
    //   </div>
    // </button>
    <Select
      className={className}
      title="Change theme"
      options={[
        { key: 'light', name: options.light },
        { key: 'dark', name: options.dark },
        { key: 'system', name: options.system },
      ]}
      onChange={(option) => {
        setTheme(option.key)
      }}
      selected={{
        key: theme,
        name: (
          <div className="flex items-center gap-2 capitalize">
            <IconToUse />
            <span className={lite ? 'md:hidden' : ''}>
              {mounted ? options[theme] : options.light}
            </span>
          </div>
        ),
      }}
    />
  )
}
