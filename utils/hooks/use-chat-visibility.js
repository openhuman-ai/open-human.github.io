"use client"

// import { updateChatVisibility } from '@/app/(chat)/actions';
import { useMemo } from "react"
import useSWR, { useSWRConfig } from "swr"

export function useChatVisibility({ chatId, initialVisibility }) {
  const { mutate, cache } = useSWRConfig()
  const history = cache.get("/api/history")?.data

  const { data: localVisibility, mutate: setLocalVisibility } = useSWR(`${chatId}-visibility`, null, {
    fallbackData: initialVisibility,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  const visibilityType = useMemo(() => {
    if (!history) return localVisibility
    const chat = history.find((chat) => chat.id === chatId)
    if (!chat) return "private"
    return chat.visibility
  }, [history, chatId, localVisibility])

  const setVisibilityType = (updatedVisibilityType) => {
    setLocalVisibility(updatedVisibilityType)

    mutate(
      "/api/history",
      (history) => {
        return history
          ? history.map((chat) => {
              if (chat.id === chatId) {
                return {
                  ...chat,
                  visibility: updatedVisibilityType,
                }
              }
              return chat
            })
          : []
      },
      { revalidate: false }
    )

    // updateChatVisibility({
    //   chatId: chatId,
    //   visibility: updatedVisibilityType,
    // });
  }

  return { visibilityType, setVisibilityType }
}
