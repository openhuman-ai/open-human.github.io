import cn from "clsx"
import { renderComponent } from "../utils/render"

export function Separator({ title }) {
  return (
    <li
      className={cn(
        "[word-break:break-word]",
        title
          ? "mt-5 mb-2 px-2 py-1.5 text-sm font-semibold text-gray-900 first:mt-0 dark:text-gray-100"
          : "my-4"
      )}
    >
      {title ? (
        renderComponent(title)
      ) : (
        <hr className="mx-2 border-t border-gray-200 dark:border-primary-100/10" />
      )}
    </li>
  )
}
