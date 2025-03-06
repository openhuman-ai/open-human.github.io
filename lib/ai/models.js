// import { openai } from "@ai-sdk/openai"
// import { fireworks } from "@ai-sdk/fireworks"
import { fireworks } from "@ai-sdk/fireworks"
import { customProvider, extractReasoningMiddleware, wrapLanguageModel } from "ai"

export const DEFAULT_CHAT_MODEL = "chat-model-small"

export const myProvider = customProvider({
  // languageModels: {
  //   "chat-model-small": openai("gpt-4o-mini"),
  //   "chat-model-large": openai("gpt-4o"),
  //   "chat-model-reasoning": wrapLanguageModel({
  //     model: fireworks("accounts/fireworks/models/deepseek-r1"),
  //     middleware: extractReasoningMiddleware({ tagName: "think" }),
  //   }),
  //   "title-model": openai("gpt-4-turbo"),
  //   "artifact-model": openai("gpt-4o-mini"),
  // },
  languageModels: {
    "chat-model-small": wrapLanguageModel({
      model: fireworks("accounts/fireworks/models/deepseek-r1"),
      middleware: extractReasoningMiddleware({ tagName: "think" }),
    }),
    "title-model": wrapLanguageModel({
      model: fireworks("accounts/fireworks/models/deepseek-r1"),
      middleware: extractReasoningMiddleware({ tagName: "think" }),
    }),
  },
  // imageModels: {
  //   "small-model": openai.image("dall-e-2"),
  //   "large-model": openai.image("dall-e-3"),
  // },
})

export const chatModels = [
  {
    id: "chat-model-small",
    name: "Small model",
    description: "Small model for fast, lightweight tasks",
  },
  {
    id: "chat-model-large",
    name: "Large model",
    description: "Large model for complex, multi-step tasks",
  },
  {
    id: "chat-model-reasoning",
    name: "Reasoning model",
    description: "Uses advanced reasoning",
  },
]
