"use client"

import { useChat } from "@ai-sdk/react"
import { useState } from "react"
import useSWR, { useSWRConfig } from "swr"

import { fetcher, generateUUID } from "@/lib/utils"

import { Artifact } from "./artifact"
import { MultimodalInput } from "./multimodal-input"
import { Messages } from "./messages"
import { VisibilityType } from "./visibility-selector"
import { useArtifactSelector } from "@/utils/hooks/use-artifact"
import { toast } from "sonner"
import { ChatHeader } from "@/components/chat-header"
import { apiFetcherData } from "@/utils/fetcher"
import { API_ENDPOINT } from "@/config/constants"

// {
//   id: string;
//   initialMessages: Array<Message>;
//   selectedChatModel: string;
//   selectedVisibilityType: VisibilityType;
//   isReadonly: boolean;
// }
export function Chat({ id, initialMessages, selectedChatModel, selectedVisibilityType, isReadonly }) {
  const { mutate } = useSWRConfig()
  // messages: JSON.stringify(initialMessages), 
  const { messages, setMessages, handleSubmit, input, setInput, append, isLoading, stop, reload } = useChat({
    api: `${API_ENDPOINT}/chat/${id}`,
    id,
    body: { id:id, selectedChatModel:selectedChatModel },
    initialMessages,
    credentials: "include",
    experimental_throttle: 100,
    sendExtraMessageFields: true,
    generateId: generateUUID,
    onFinish: () => {
      mutate(`${API_ENDPOINT}/history`)
    },
    onError: (error) => {
      toast.error("An error occured, please try again!")
    },
  })

  // console.log("id", id)

  // const { data: votes } = useSWR(`/api/vote?chatId=${id}`, apiFetcherData)
  const votes = []

  const [attachments, setAttachments] = useState([])
  const isArtifactVisible = useArtifactSelector((state) => state.isVisible)
  return (
    <>
      <div className="flex flex-col min-w-0 h-dvh bg-background">
        <ChatHeader chatId={id} selectedModelId={selectedChatModel} selectedVisibilityType={selectedVisibilityType} isReadonly={isReadonly} />

        <Messages
          chatId={id}
          isLoading={isLoading}
          votes={votes}
          messages={messages}
          setMessages={setMessages}
          reload={reload}
          isReadonly={isReadonly}
          isArtifactVisible={isArtifactVisible}
        />

        <form className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl">
          {!isReadonly && (
            <MultimodalInput
              chatId={id}
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              stop={stop}
              attachments={attachments}
              setAttachments={setAttachments}
              messages={messages}
              setMessages={setMessages}
              append={append}
            />
          )}
        </form>
      </div>

      {/* <Artifact
        chatId={id}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        stop={stop}
        attachments={attachments}
        setAttachments={setAttachments}
        append={append}
        messages={messages}
        setMessages={setMessages}
        reload={reload}
        votes={votes}
        isReadonly={isReadonly}
      /> */}
    </>
  )
}
