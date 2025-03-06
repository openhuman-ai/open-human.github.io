"use client"

import cx from "classnames"
import { useRef, useEffect, useState, useCallback, memo } from "react"
import { toast } from "sonner"
import { useLocalStorage, useWindowSize } from "usehooks-ts"

import { sanitizeUIMessages } from "@/lib/utils"

import { ArrowUpIcon, PaperclipIcon, StopIcon } from "./icons"
import { PreviewAttachment } from "./preview-attachment"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { SuggestedActions } from "./suggested-actions"
import equal from "fast-deep-equal"

function PureMultimodalInput({ chatId, input, setInput, isLoading, stop, attachments, setAttachments, messages, setMessages, append, handleSubmit, className }) {
  const textareaRef = useRef(null)
  const { width } = useWindowSize()

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight()
    }
  }, [])

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`
    }
  }

  const resetHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = "98px"
    }
  }

  const [localStorageInput, setLocalStorageInput] = useLocalStorage("input", "")

  useEffect(() => {
    if (textareaRef.current) {
      const domValue = textareaRef.current.value
      // Prefer DOM value over localStorage to handle hydration
      const finalValue = domValue || localStorageInput || ""
      setInput(finalValue)
      adjustHeight()
    }
    // Only run once after hydration
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setLocalStorageInput(input)
  }, [input, setLocalStorageInput])

  const handleInput = (event) => {
    setInput(event.target.value)
    adjustHeight()
  }

  const fileInputRef = useRef(null)
  const [uploadQueue, setUploadQueue] = useState([])

  const submitForm = useCallback(() => {
    // window.history.replaceState({}, "", `/chat?id=${chatId}`)

    handleSubmit(undefined, {
      experimental_attachments: attachments,
    })

    setAttachments([])
    setLocalStorageInput("")
    resetHeight()

    if (width && width > 768) {
      textareaRef.current?.focus()
    }
  }, [attachments, handleSubmit, setAttachments, setLocalStorageInput, width])

  const uploadFile = async (file) => {
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/files/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        const { url, pathname, contentType } = data

        return {
          url,
          name: pathname,
          contentType: contentType,
        }
      }
      const { error } = await response.json()
      toast.error(error)
    } catch (error) {
      toast.error("Failed to upload file, please try again!")
    }
  }

  const handleFileChange = useCallback(
    async (event) => {
      const files = Array.from(event.target.files || [])

      setUploadQueue(files.map((file) => file.name))

      try {
        const uploadPromises = files.map((file) => uploadFile(file))
        const uploadedAttachments = await Promise.all(uploadPromises)
        const successfullyUploadedAttachments = uploadedAttachments.filter((attachment) => attachment !== undefined)

        setAttachments((currentAttachments) => [...currentAttachments, ...successfullyUploadedAttachments])
      } catch (error) {
        console.error("Error uploading files!", error)
      } finally {
        setUploadQueue([])
      }
    },
    [setAttachments]
  )

  return (
    <div className="relative w-full flex flex-col gap-4">
      {messages.length === 0 && attachments.length === 0 && uploadQueue.length === 0 && <SuggestedActions append={append} chatId={chatId} />}

      <input type="file" className="fixed -top-4 -left-4 size-0.5 opacity-0 pointer-events-none" ref={fileInputRef} multiple onChange={handleFileChange} tabIndex={-1} />

      {(attachments.length > 0 || uploadQueue.length > 0) && (
        <div className="flex flex-row gap-2 overflow-x-scroll items-end">
          {attachments.map((attachment) => (
            <PreviewAttachment key={attachment.url} attachment={attachment} />
          ))}

          {uploadQueue.map((filename) => (
            <PreviewAttachment
              key={filename}
              attachment={{
                url: "",
                name: filename,
                contentType: "",
              }}
              isUploading={true}
            />
          ))}
        </div>
      )}

      <Textarea
        ref={textareaRef}
        placeholder="Ask anything..."
        value={input}
        onChange={handleInput}
        className={cx("min-h-[24px] max-h-[calc(75dvh)] overflow-hidden resize-none rounded-2xl !text-base bg-muted pb-10 dark:border-zinc-700", className)}
        rows={2}
        autoFocus
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault()

            if (isLoading) {
              toast.error("Please wait for the model to finish its response!")
            } else {
              submitForm()
            }
          }
        }}
      />

      <div className="absolute bottom-0 p-2 w-fit flex flex-row justify-start">
        <AttachmentsButton fileInputRef={fileInputRef} isLoading={isLoading} />
      </div>

      <div className="absolute bottom-0 right-0 p-2 w-fit flex flex-row justify-end">
        {isLoading ? <StopButton stop={stop} setMessages={setMessages} /> : <SendButton input={input} submitForm={submitForm} uploadQueue={uploadQueue} />}
      </div>
    </div>
  )
}

export const MultimodalInput = memo(PureMultimodalInput, (prevProps, nextProps) => {
  if (prevProps.input !== nextProps.input) return false
  if (prevProps.isLoading !== nextProps.isLoading) return false
  if (!equal(prevProps.attachments, nextProps.attachments)) return false

  return true
})

function PureAttachmentsButton({ fileInputRef, isLoading }) {
  return (
    <Button
      className="rounded-md rounded-bl-lg p-[7px] h-fit dark:border-zinc-700 hover:dark:bg-zinc-900 hover:bg-zinc-200"
      onClick={(event) => {
        event.preventDefault()
        fileInputRef.current?.click()
      }}
      disabled={isLoading}
      variant="ghost"
    >
      <PaperclipIcon size={14} />
    </Button>
  )
}

const AttachmentsButton = memo(PureAttachmentsButton)

function PureStopButton({ stop, setMessages }) {
  return (
    <Button
      className="rounded-full p-1.5 h-fit border dark:border-zinc-600"
      onClick={(event) => {
        event.preventDefault()
        stop()
        setMessages((messages) => sanitizeUIMessages(messages))
      }}
    >
      <StopIcon size={14} />
    </Button>
  )
}

const StopButton = memo(PureStopButton)

function PureSendButton({ submitForm, input, uploadQueue }) {
  return (
    <Button
      className="rounded-full p-1.5 h-fit border dark:border-zinc-600"
      onClick={(event) => {
        event.preventDefault()
        submitForm()
      }}
      disabled={input.length === 0 || uploadQueue.length > 0}
    >
      <ArrowUpIcon size={14} />
    </Button>
  )
}

const SendButton = memo(PureSendButton, (prevProps, nextProps) => {
  if (prevProps.uploadQueue.length !== nextProps.uploadQueue.length) return false
  if (prevProps.input !== nextProps.input) return false
  return true
})
