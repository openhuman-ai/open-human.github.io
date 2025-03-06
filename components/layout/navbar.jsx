import React from 'react'

export default function Navbar({ children }) {
    return (
        <div className="nextra-nav-container sticky top-0 z-20 w-full bg-transparent print:hidden">
            <div className="nextra-navbar-blur absolute -z-1 size-full nextra-border border-b backdrop-blur-md bg-nextra-bg/70"></div>
            <nav className="mx-auto flex h-[var(--nextra-navbar-height)] max-w-[90rem] items-center justify-end gap-4 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
                {children}
                {/* {themeConfig.logoLink ? (
          <NextLink
            href={
              typeof themeConfig.logoLink === 'string'
                ? themeConfig.logoLink
                : '/'
            }
            className="flex items-center hover:opacity-75 ltr:mr-auto rtl:ml-auto"
          >
            {renderComponent(themeConfig.logo)}
          </NextLink>
        ) : (
          <div className="flex items-center ltr:mr-auto rtl:ml-auto">
            {renderComponent(themeConfig.logo)}
          </div>
        )} */}
                {/* {items.map(pageOrMenu => {
          if (pageOrMenu.display === 'hidden') return null

          if (pageOrMenu.type === 'menu') {
            const menu = pageOrMenu
            return (
              <NavbarMenu key={menu.title} menu={menu}>
                {menu.title}
                <ArrowRightIcon
                  className="h-[18px] min-w-[18px] rounded-sm p-0.5"
                  pathClassName="origin-center transition-transform rotate-90"
                />
              </NavbarMenu>
            )
          }
          const page = pageOrMenu
          let href = page.href || page.route || '#'

          // If it's a directory
          if (page.children) {
            href =
              (page.withIndexPage ? page.route : page.firstChildRoute) || href
          }

          const isActive =
            page.route === activeRoute ||
            activeRoute.startsWith(page.route + '/')

          return (
            <Anchor
              href={href}
              key={href}
              className={cn(
                classes.link,
                'max-md:hidden whitespace-nowrap',
                !isActive || page.newWindow ? classes.inactive : classes.active
              )}
              newWindow={page.newWindow}
              aria-current={!page.newWindow && isActive}
            >
              {page.title}
            </Anchor>
          )
        })} */}

                {/* {process.env.NEXTRASEARCH &&
          renderComponent(themeConfig.search.component, {
            className: 'max-md:hidden'
          })} */}

                {/* {themeConfig.project.link ? (
          <Anchor href={themeConfig.project.link} newWindow>
            {renderComponent(themeConfig.project.icon)}
          </Anchor>
        ) : null} */}

                {/* {themeConfig.chat.link ? (
          <Anchor href={themeConfig.chat.link} newWindow>
            {renderComponent(themeConfig.chat.icon)}
          </Anchor>
        ) : null} */}

                {/* {renderComponent(themeConfig.navbar.extraContent)} */}

                {/* <button
          type="button"
          aria-label="Menu"
          className="nextra-hamburger rounded active:bg-gray-400/20 md:hidden"
          onClick={() => setMenu(!menu)}
        >
          <MenuIcon className={cn({ open: menu })} />
        </button> */}
            </nav>
        </div>
    )
}
