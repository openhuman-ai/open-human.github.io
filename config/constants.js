export const DEFAULT_THEME = {
  darkMode: true,
  direction: "ltr",
}

const API_VERSION = "v1"

export const API_ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/${API_VERSION}`
export const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
export const GITHUB_REDIRECT_URI = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/callback/github`

export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
export const GOOGLE_REDIRECT_URI = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/callback/google`

export const DEFAULT_USER_ID = "5553a32b2fa51b29575dbe28bd6b36cd"