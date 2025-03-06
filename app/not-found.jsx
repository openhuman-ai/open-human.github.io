import { Callout } from "@/nextra"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
      <div className="inset-0 h-screen flex items-center justify-center  mx-auto">
        <Callout type="warning" className="min-w-[500px]">
          <h2 className="text-xl font-bold">Not found</h2>
          <div className="container py-2">
            <p className="text-sm">Could not find requested resource</p>
            <Link href="/">Return Home</Link>
          </div>
        </Callout>
      </div>
    </div>
  )
}
