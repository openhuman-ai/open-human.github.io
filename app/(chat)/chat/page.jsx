"use client" // Mark this as a Client Component

import { Suspense, useEffect, useState } from "react"
import ChatPage from "./ChatPage"

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatPage />
    </Suspense>
  )
}
