import { memo } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth"
import Link from "next/link"

function PureAuthButton() {
  const { user, loading } = useAuth()
  if (loading || user) {
    return <></>
  }

  return (
    <Link href="/oauth"
      className="cursor-pointer bg-black text-center hover:bg-white border-black px-8 font-semibold py-2 text-white hover:text-black border rounded-full text-sm transition-all order-4 md:ml-auto mr-4"
      // onClick={login}
    >
      Log in
    </Link>
  )
}

export const AuthButton = memo(PureAuthButton, (prevProps, nextProps) => {
  return prevProps.user === nextProps.user
})
