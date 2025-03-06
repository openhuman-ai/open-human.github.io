import cn from 'clsx'

export const Tr = ({ className = '', ...props }) => (
  <tr
    className={cn(
      'm-0 border-t border-gray-300 p-0 dark:border-gray-600',
      'even:bg-gray-100 even:dark:bg-gray-600/20',
      className
    )}
    {...props}
  />
)
