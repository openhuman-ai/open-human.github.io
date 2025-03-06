"use client" // Error boundaries must be Client Components

import { Callout } from "@/nextra"
import { useEffect } from "react"

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="w-full p-12 justify-center h-full">
      <h2>Something went wrong!</h2>
      <div className="w-full p-12 justify-center ">
        <Callout type="error">Unknow Error, please contact support</Callout>
      </div>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
