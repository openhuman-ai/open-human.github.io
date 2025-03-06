"use client"

import { Chat } from "@/components/chat"
import { DataStreamHandler } from "@/components/data-stream-handler"
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models"
import { generateUUID } from "@/lib/utils"
import { getCookie } from "@/utils/cookies"
import { useEffect, useState } from "react"

export default function Page() {
  const id = generateUUID()
  const [modelId, setModelId] = useState(null)
  console.log("useState go here")

  useEffect(() => {
    const storedModelId = getCookie("chat-model")
    // console.log("storedModelId", storedModelId)
    setModelId(storedModelId)
  }, [])

  if (!modelId) {
    return (
      <>
        <Chat key={id} id={id} initialMessages={[]} selectedChatModel={DEFAULT_CHAT_MODEL} selectedVisibilityType="private" isReadonly={false} />
        <DataStreamHandler id={id} />
      </>
    )
  }

  return (
    <>
      <Chat key={id} id={id} initialMessages={[]} selectedChatModel={modelId} selectedVisibilityType="private" isReadonly={false} />
      <DataStreamHandler id={id} />
    </>
  )
}
