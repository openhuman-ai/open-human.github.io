"use client"

import { Callout } from "@/nextra"
import { useEffect } from "react"

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="w-full p-12 justify-center ">
      <Callout type="error">Unknow Error, please contact support</Callout>
    </div>
  )
}
