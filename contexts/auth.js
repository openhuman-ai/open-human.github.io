"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { API_ENDPOINT, GITHUB_CLIENT_ID, GITHUB_REDIRECT_URI, GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "@/config/constants"

const AuthContext = createContext({
  user: null,
  provider: "google",
  status: "loading",
  loading: false,
  login: () => {},
  logout: () => {},
  loginWithGoogle: () => {},
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [authStatus, setAuthStatus] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const cachedSession = localStorage.getItem("session-authenticated")

      if (!cachedSession) {
        return
      }

      const { status, user } = JSON.parse(cachedSession)
      if (status === "authenticated") {
        setUser(user)
        setLoading(false)
        return
      } else if (status === "unauthenticated") {
        // console.log("API_ENDPOINT", `${API_ENDPOINT}/auth/user`)
        setAuthStatus("loading")
        // Fetch from the API if no cached user
        const res = await fetch(`${API_ENDPOINT}/auth/user`, {
          credentials: "include", // Important for sendiwng cookies
        })

        if (res.ok) {
          const resJSON = await res.json()
          console.log("resJSON", resJSON)
          setUser(resJSON.data)
          localStorage.setItem("session-authenticated", JSON.stringify({ status: "authenticated", user: resJSON.data })) // Cache user
          setAuthStatus("authenticated")
        } else {
          console.log("Login failed")
          localStorage.removeItem("session-authenticated") // Remove cache if session is invalid
          setAuthStatus("unauthenticated")
        }
      }
    } catch (error) {
      console.error("Error checking user session:", error)
      localStorage.removeItem("session-authenticated")
      setAuthStatus("unauthenticated")
    } finally {
      setLoading(false)
    }
  }

  const login = () => {
    const redirectURI = encodeURIComponent(GITHUB_REDIRECT_URI)
    console.log("redirectURI", redirectURI)
    localStorage.setItem("session-authenticated", JSON.stringify({ status: "unauthenticated", user: null }))
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirectURI}&scope=read:user user:email`
    window.location.href = githubAuthUrl
  }

  const loginWithGoogle = () => {
    const redirectURI = encodeURIComponent(GOOGLE_REDIRECT_URI)
    console.log("redirectURI", redirectURI)
    localStorage.setItem("session-authenticated", JSON.stringify({ status: "unauthenticated", user: null }))
    const scope = encodeURIComponent("email profile")
    const responseType = "code"
    const accessType = "offline"
    const prompt = "consent"
    const googleClientID = GOOGLE_CLIENT_ID

    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientID}&redirect_uri=${redirectURI}&response_type=${responseType}&scope=${scope}&access_type=${accessType}&prompt=${prompt}`
    console.log("googleAuthUrl", googleAuthUrl)

    window.location.href = googleAuthUrl
  }

  const logout = async () => {
    try {
      const res = await fetch(`${API_ENDPOINT}/auth/logout`, {
        method: "POST",
        credentials: "include",
      })
    } catch (error) {
      console.error("Error during logout:", error)
    } finally {
      setUser(null)
      localStorage.removeItem("session-authenticated")
      router.push("/")
    }
  }

  return <AuthContext.Provider value={{ user, loading, status: authStatus, login, logout, loginWithGoogle }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
