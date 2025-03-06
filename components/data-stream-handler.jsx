"use client"

import { useChat } from "@ai-sdk/react"
import { useEffect, useRef } from "react"
import { artifactDefinitions, ArtifactKind } from "./artifact"
import { initialArtifactData, useArtifact } from "@/utils/hooks/use-artifact"

// export type DataStreamDelta = {
//   type:
//     | 'text-delta'
//     | 'code-delta'
//     | 'sheet-delta'
//     | 'image-delta'
//     | 'title'
//     | 'id'
//     | 'suggestion'
//     | 'clear'
//     | 'finish'
//     | 'kind';
//   content: string | Suggestion;
// };

export function DataStreamHandler({ id }) {
  const { data: dataStream } = useChat({ id })
  const { artifact, setArtifact, setMetadata } = useArtifact()
  const lastProcessedIndex = useRef(-1)

  useEffect(() => {
    if (!dataStream?.length) return

    const newDeltas = dataStream.slice(lastProcessedIndex.current + 1)
    lastProcessedIndex.current = dataStream.length - 1

    newDeltas.forEach((delta) => {
      const artifactDefinition = artifactDefinitions.find((artifactDefinition) => artifactDefinition.kind === artifact.kind)

      if (artifactDefinition?.onStreamPart) {
        artifactDefinition.onStreamPart({
          streamPart: delta,
          setArtifact,
          setMetadata,
        })
      }

      setArtifact((draftArtifact) => {
        if (!draftArtifact) {
          return { ...initialArtifactData, status: "streaming" }
        }

        switch (delta.type) {
          case "id":
            return {
              ...draftArtifact,
              documentId: delta.content,
              status: "streaming",
            }

          case "title":
            return {
              ...draftArtifact,
              title: delta.content,
              status: "streaming",
            }

          case "kind":
            return {
              ...draftArtifact,
              kind: delta.content,
              status: "streaming",
            }

          case "clear":
            return {
              ...draftArtifact,
              content: "",
              status: "streaming",
            }

          case "finish":
            return {
              ...draftArtifact,
              status: "idle",
            }

          default:
            return draftArtifact
        }
      })
    })
  }, [dataStream, setArtifact, setMetadata, artifact])

  return null
}
