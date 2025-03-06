"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

import { SubmitButton } from "@/components/submit-button"
import { AuthForm } from "@/components/auth-form"
import { apiPost } from "@/utils/fetcher"
import { useAuth } from "@/contexts/auth"
import Image from "next/image"

// import { login, type LoginActionState } from '../actions';

export default function Page() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [isSuccessful, setIsSuccessful] = useState(false)

  // status: 'idle' | 'in_progress' | 'success' | 'failed' | 'invalid_data';
  const [state, setState] = useState({ status: "idle" })
  const {login, loginWithGoogle} = useAuth()

  useEffect(() => {
    if (state.status === "failed") {
      toast.error("Invalid credentials!")
    } else if (state.status === "invalid_data") {
      toast.error("Failed validating your submission!")
    } else if (state.status === "success") {
      setIsSuccessful(true)
      router.refresh()
    }
  }, [router, state.status])

  const handleSubmit = async (formData) => {
    setEmail(formData.get("email"))
    const res = await apiPost("/api/auth/login", formData)
    // formAction(formData)
  }

  return (
    <div className="flex h-dvh w-screen items-start pt-12 md:pt-0 md:items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white overflow-hidden rounded-2xl flex flex-col gap-6 px-8 py-20">
        <div className="flex flex-col items-center justify-center gap-2 pb-8 text-center">
          <h3 className="text-xl font-semibold dark:text-zinc-50">OAuth Login</h3>
          <p className="text-sm text-gray-500 dark:text-zinc-400">Using your provider to login</p>
        </div>
        <div className="card flex flex-col gap-4">
          {/* <div className="provider">
            <div className="w-[90%] mx-auto">
              <button
                className="oauth-provider flex w-full items-center gap-2 rounded-lg  cursor-pointer dark:bg-[#161b22] dark:hover:bg-gray-900 text-black dark:text-white transition-all"
                tabIndex="1"
              >
                <span className="mix-blend-luminosity flex-grow text-left">Sign in with Apple</span>
                <img loading="lazy" className="w-6 h-6" src="/img/oauth-provider/apple.svg" alt="Apple logo" />
              </button>
            </div>
          </div> */}
          <div className="provider">
            <div className="w-[90%] mx-auto">
              <button
                className="oauth-provider flex w-full items-center gap-2  cursor-pointer dark:bg-[#161b22] dark:hover:bg-gray-900 text-black dark:text-white transition-all"
                tabIndex="2"
                onClick={login}
              >
                <span className="mix-blend-luminosity flex-grow text-left">Sign in with Github</span>
                <Image loading="lazy" className="w-6 h-6" width={24} height={24} src="/img/oauth-provider/github.svg" alt="Github logo" />
              </button>
            </div>
          </div>
          <div className="provider">
            <div className="w-[90%] mx-auto">
              <button
                className="oauth-provider flex w-full items-center gap-2  cursor-pointer dark:bg-[#161b22] dark:hover:bg-gray-900 text-black dark:text-white transition-all"
                tabIndex="2"
                onClick={loginWithGoogle}
              >
                <span className="mix-blend-luminosity flex-grow text-left">Sign in with Google</span>
                <img loading="lazy" className="w-6 h-6"   width={24} height={24} src="/img/oauth-provider/google.svg" alt="Google logo" />
              </button>
            </div>
          </div>

          {/* <p className="text-center text-sm text-gray-600 mt-4 dark:text-zinc-400">
            {"Don't have an account? "}
            <Link href="/register" className="font-semibold text-gray-800 hover:underline dark:text-zinc-200">
              Sign up
            </Link>
            {" for free."}
          </p> */}
        </div>
      </div>
    </div>
  )
}
