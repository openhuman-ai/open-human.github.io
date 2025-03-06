import cn from 'clsx'


export const Td = ({ className = '', ...props }) => (
  <td
    className={cn(
      'm-0 border border-gray-300 px-4 py-2 dark:border-gray-600',
      className
    )}
    {...props}
  />
)
