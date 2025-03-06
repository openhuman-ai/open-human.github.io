import { createContext, useContext } from "react"

const MenuContext = createContext({
  menu: false,
  setMenu: () => false,
})
MenuContext.displayName = "Menu"
export const useMenu = () => useContext(MenuContext)

export const MenuProvider = MenuContext.Provider
