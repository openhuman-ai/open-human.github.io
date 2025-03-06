import { createContext, useContext } from "react"

const ErrorContext = createContext({
  error: ["Sample eror 1", "Sample eror 2"],
  setError: () => {},
})

export const useError = () => useContext(ErrorContext)

export const ErrorProvider = ErrorContext.Provider
