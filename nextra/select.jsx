import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react'
import { createPortal } from 'react-dom'
import cn from 'clsx'
import { useMounted } from '@/utils/hooks/use-mounted'
import { usePopper } from '@/utils/hooks/use-popper'
import { CheckIcon } from './icons'

export function Select({ options, selected, onChange, title, className }) {
  const [trigger, container] = usePopper({
    strategy: 'fixed',
    placement: 'top-start',
    modifiers: [
      { name: 'offset', options: { offset: [0, 10] } },
      {
        name: 'sameWidth',
        enabled: true,
        fn({ state }) {
          state.styles.popper.minWidth = `${state.rects.reference.width}px`
        },
        phase: 'beforeWrite',
        requires: ['computeStyles'],
      },
    ],
  })

  return (
    <Listbox value={selected} onChange={onChange}>
      {({ open }) => (
        <ListboxButton
          ref={trigger}
          title={title}
          className={cn(
            'h-7 rounded-md px-2 text-left text-xs font-bold text-gray-600 transition-colors dark:text-gray-400',
            open
              ? 'bg-gray-200 text-gray-900 dark:bg-primary-100/10 dark:text-gray-50'
              : 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50',
            className
          )}
        >
          {selected.name}
          <Portal>
            <Transition
              ref={container}
              show={open}
              as={ListboxOptions}
              className="z-20 max-h-64 overflow-auto rounded-md ring-1 ring-black/5 bg-white py-1 text-sm shadow-lg dark:ring-white/20 dark:bg-neutral-800"
              leave="transition-opacity"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {options.map((option) => (
                <ListboxOption
                  key={option.key}
                  value={option}
                  className={({ active }) =>
                    cn(
                      active
                        ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10'
                        : 'text-gray-800 dark:text-gray-100',
                      'relative cursor-pointer whitespace-nowrap py-1.5',
                      'transition-colors ltr:pl-3 ltr:pr-9 rtl:pr-3 rtl:pl-9'
                    )
                  }
                >
                  {option.name}
                  {option.key === selected.key && (
                    <span className="absolute inset-y-0 flex items-center ltr:right-3 rtl:left-3">
                      <CheckIcon />
                    </span>
                  )}
                </ListboxOption>
              ))}
            </Transition>
          </Portal>
        </ListboxButton>
      )}
    </Listbox>
  )
}

function Portal(props) {
  const mounted = useMounted()
  if (!mounted) return null
  return createPortal(props.children, document.body)
}
