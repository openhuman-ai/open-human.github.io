import { Folder } from "./Folder"
import cn from "clsx"

export function FolderImpl({ item, anchors }) {
  // const routeOriginal = useFSRoute()
  // const [route] = routeOriginal.split("#")
  // const active = [route, route + "/"].includes(item.route + "/")
  // const activeRouteInside = active || route.startsWith(item.route + "/")

  // const focusedRoute = useContext(FocusedItemContext)
  // const focusedRouteInside = !!focusedRoute?.startsWith(item.route + "/")
  // const level = useContext(FolderLevelContext)

  // const { setMenu } = useMenu()
  // const { theme } = item
  // const themeConfig = useThemeConfig()

  // const open =
  //   TreeState[item.route] === undefined
  //     ? active ||
  //       activeRouteInside ||
  //       focusedRouteInside ||
  //       (theme && "collapsed" in theme
  //         ? !theme.collapsed
  //         : level < themeConfig.sidebar.defaultMenuCollapseLevel)
  //     : TreeState[item.route] || focusedRouteInside

  // const rerender = useState({})[1]

  // useEffect(() => {
  //   const updateTreeState = () => {
  //     if (activeRouteInside || focusedRouteInside) {
  //       TreeState[item.route] = true
  //     }
  //   }
  //   const updateAndPruneTreeState = () => {
  //     if (activeRouteInside && focusedRouteInside) {
  //       TreeState[item.route] = true
  //     } else {
  //       delete TreeState[item.route]
  //     }
  //   }
  //   themeConfig.sidebar.autoCollapse
  //     ? updateAndPruneTreeState()
  //     : updateTreeState()
  // }, [
  //   activeRouteInside,
  //   focusedRouteInside,
  //   item.route,
  //   themeConfig.sidebar.autoCollapse,
  // ])

  // if (item.type === "menu") {
  //   const menu = item
  //   const routes = Object.fromEntries(
  //     (menu.children || []).map((route) => [route.name, route])
  //   )
  //   item.children = Object.entries(menu.items || {}).map(([key, item]) => {
  //     const route = routes[key] || {
  //       name: key,
  //       ...("locale" in menu && { locale: menu.locale }),
  //       route: menu.route + "/" + key,
  //     }
  //     return {
  //       ...route,
  //       ...item,
  //     }
  //   })
  // }

  // const isLink = "withIndexPage" in item && item.withIndexPage
  // // use button when link don't have href because it impacts on SEO
  // const ComponentToUse = isLink ? Anchor : "button"

  let open = ""
  let active = ""

  return (
    <li className={cn({ open, active })}>
      {/* <ComponentToUse
        href={isLink ? item.route : undefined}
        className={cn(
          "items-center justify-between gap-2",
          !isLink && "text-left w-full",
          classes.link,
          active ? classes.active : classes.inactive
        )}
        onClick={(e) => {
          const clickedToggleIcon = ["svg", "path"].includes(
            e.target.tagName.toLowerCase()
          )
          if (clickedToggleIcon) {
            e.preventDefault()
          }
          if (isLink) {
            // If it's focused, we toggle it. Otherwise, always open it.
            if (active || clickedToggleIcon) {
              TreeState[item.route] = !open
            } else {
              TreeState[item.route] = true
              setMenu(false)
            }
            rerender({})
            return
          }
          if (active) return
          TreeState[item.route] = !open
          rerender({})
        }}
      >
        {item.title}
        <ArrowRightIcon
          className="h-[18px] min-w-[18px] rounded-sm p-0.5 hover:bg-gray-800/5 dark:hover:bg-gray-100/5"
          pathClassName={cn(
            "origin-center transition-transform rtl:-rotate-180",
            open && "ltr:rotate-90 rtl:rotate-[-270deg]"
          )}
        />
      </ComponentToUse>
      <Collapse className="ltr:pr-0 rtl:pl-0 pt-1" isOpen={open}>
        {Array.isArray(item.children) ? (
          <Menu
            className={cn(classes.border, "ltr:ml-3 rtl:mr-3")}
            directories={item.children}
            base={item.route}
            anchors={anchors}
          />
        ) : null}
      </Collapse> */}
    </li>
  )
}
