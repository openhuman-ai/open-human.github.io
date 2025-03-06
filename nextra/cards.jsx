import cn from 'clsx'
import NextLink from 'next/link'


const classes = {
  cards: cn(
    'nextra-cards mt-4 gap-4 grid',
    'not-prose' // for nextra-theme-blog
  ),
  card: cn(
    'nextra-card group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200',
    'text-current no-underline dark:shadow-none',
    'hover:shadow-gray-100 dark:hover:shadow-none shadow-gray-100',
    'active:shadow-sm active:shadow-gray-200',
    'transition-all duration-200 hover:border-gray-300'
  ),
  title: cn(
    'flex font-semibold items-start gap-2 p-4 text-gray-700 hover:text-gray-900'
  )
}

const arrowEl = (
  <span className="transition-transform duration-75 group-hover:translate-x-[2px]">
    →
  </span>
)

export function Card({
  children,
  title,
  icon,
  image,
  arrow,
  href,
  ...props
}) {
  const animatedArrow = arrow ? arrowEl : null

  if (image) {
    return (
      <NextLink
        href={href}
        className={cn(
          classes.card,
          'bg-gray-100 shadow dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-50 hover:shadow-lg dark:hover:border-neutral-500 dark:hover:bg-neutral-700'
        )}
        {...props}
      >
        {children}
        <span
          className={cn(
            classes.title,
            'dark:text-gray-300 dark:hover:text-gray-100'
          )}
        >
          {icon}
          <span className="flex gap-1">
            {title}
            {animatedArrow}
          </span>
        </span>
      </NextLink>
    )
  }

  return (
    <NextLink
      href={href}
      className={cn(
        classes.card,
        'bg-transparent shadow-sm dark:border-neutral-800 hover:bg-slate-50 hover:shadow-md dark:hover:border-neutral-700 dark:hover:bg-neutral-900'
      )}
      {...props}
    >
      <span
        className={cn(
          classes.title,
          'dark:text-neutral-200 dark:hover:text-neutral-50 flex items-center'
        )}
      >
        {icon}
        {title}
        {animatedArrow}
      </span>
    </NextLink>
  )
}

export function Cards({
  children,
  num = 3,
  className,
  style,
  ...props
}) {
  return (
    <div
      className={cn(classes.cards, className)}
      {...props}
      style={
        {
          ...style,
          '--rows': num
        }
      }
    >
      {children}
    </div>
  )
}

// export const Cards = Object.assign(Cards, { displayName: 'Cards', Card })