import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const fetcher = async (url) => {
  const res = await fetch(url)
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.")
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}

export function getLocalStorage(key) {
  return typeof window !== "undefined" ? JSON.parse(localStorage.getItem(key) || "[]") : []
}

export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16)
  })
}

function addToolMessageToChat({ toolMessage, messages }) {
  return messages.map((message) => {
    if (message.toolInvocations) {
      return {
        ...message,
        toolInvocations: message.toolInvocations.map((toolInvocation) => {
          const toolResult = toolMessage.content.find(({ toolCallId }) => toolCallId === toolInvocation.toolCallId)
          return toolResult ? { ...toolInvocation, state: "result", result: toolResult.result } : toolInvocation
        }),
      }
    }
    return message
  })
}

export function convertToUIMessages(messageData) {
  if (!messageData || messageData.length === 0) return []

  return Array.from(messageData).reduce((chatMessages, message) => {
    if (message.role === "tool") {
      return addToolMessageToChat({ toolMessage: message, messages: chatMessages })
    }

    let textContent = ""
    let reasoning = ""
    const toolInvocations = []
    if (message.content) {
      const messageJSON = JSON.parse(message.content)
      Array.from(messageJSON).forEach((content) => {
        if (content.type === "text") textContent += content.text
        if (content.type === "tool-call") {
          toolInvocations.push({ state: "call", ...content })
        }
        if (content.type === "reasoning") reasoning = content.reasoning
      })
    } else {
      textContent = message.content
    }

    chatMessages.push({ id: message.id, role: message.role, content: textContent, reasoning, toolInvocations })
    return chatMessages
  }, [])
}

export function sanitizeResponseMessages({ messages, reasoning }) {
  const toolResultIds = messages.flatMap((message) =>
    message.role === "tool" ? message.content.filter(({ type }) => type === "tool-result").map(({ toolCallId }) => toolCallId) : []
  )

  return messages
    .map((message) => {
      if (message.role !== "assistant") return message
      if (typeof message.content === "string") return message

      const sanitizedContent = message.content.filter((content) =>
        content.type === "tool-call" ? toolResultIds.includes(content.toolCallId) : content.type === "text" ? content.text.length > 0 : true
      )
      if (reasoning) sanitizedContent.push({ type: "reasoning", reasoning })
      return { ...message, content: sanitizedContent }
    })
    .filter(({ content }) => content.length > 0)
}

export function sanitizeUIMessages(messages) {
  return messages
    .map((message) => {
      if (message.role !== "assistant" || !message.toolInvocations) return message

      const toolResultIds = message.toolInvocations.filter(({ state }) => state === "result").map(({ toolCallId }) => toolCallId)
      const sanitizedToolInvocations = message.toolInvocations.filter(({ toolCallId, state }) => state === "result" || toolResultIds.includes(toolCallId))

      return { ...message, toolInvocations: sanitizedToolInvocations }
    })
    .filter(({ content, toolInvocations }) => content.length > 0 || (toolInvocations && toolInvocations.length > 0))
}

export function getMostRecentUserMessage(messages) {
  return messages.filter(({ role }) => role === "user").at(-1)
}

export function getDocumentTimestampByIndex(documents, index) {
  return documents && index < documents.length ? documents[index].createdAt : new Date()
}
