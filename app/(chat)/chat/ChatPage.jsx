import { Chat } from "@/components/chat"
import { DataStreamHandler } from "@/components/data-stream-handler"
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models"
import { convertToUIMessages } from "@/lib/utils"
import { getCookie } from "@/utils/cookies"
import { apiFetcher } from "@/utils/fetcher"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
// import { getChatById, getMessagesByChatId } from "@/lib/db/queries"

export default function ChatPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id") // Extract the `id` from the URL query params
  const [chat, setChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const [chatModelFromCookies, setChatModelFromCookies] = useState(null)

  async function getChatById({ chatid }) {
    const resp = await apiFetcher(`/chats/${chatid}`)
    // console.log("resp", resp)
    return resp.data
  }

  async function getMessagesByChatId({ chatid }) {
    const resp = await apiFetcher(`/chats/${chatid}/messages`)

    // console.log("getMessagesByChatId")
    // console.log("resp", resp)

    return resp
  }

  useEffect(() => {
    let chatModel = getCookie("chat-model")
    setChatModelFromCookies(chatModel)
  }, [])

  useEffect(() => {
    if (!id) return

    const fetchData = async () => {
      try {
        const chatData = await getChatById({ chatid: id })
        // console.log('chatData', chatData)
        if (!chatData) {
          throw new Error("Chat not found")
        }
        setChat(chatData)

        const messagesData = await getMessagesByChatId({ chatid: id })
        if (!messagesData) {
          throw new Error("Messages not found")
        }
        setMessages(messagesData.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id, searchParams])

  if (error) {
    return <div>Error: {error}</div>
  }

  // if (!chat) {
  //   return <div>Chat not found</div>
  // }
  if (isLoading || !id) {
    return <></>
    // <div>Loading...</div>
  }

  // Since we can't use cookies in a static context, we assume a default chat model
  const selectedChatModel = chatModelFromCookies ? chatModelFromCookies : DEFAULT_CHAT_MODEL

  // console.log("messages", messages)

  return (
    <>
      <Chat 
        key={id} 
        id={id} 
        initialMessages={convertToUIMessages(messages)} 
        selectedChatModel={selectedChatModel} 
        selectedVisibilityType={chat.visibility} 
        isReadonly={false} 
      />
      <DataStreamHandler id={id} />
    </>
  )
}
