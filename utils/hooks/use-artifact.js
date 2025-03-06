"use client"

import useSWR from "swr"
import { useCallback, useMemo } from "react"

export const initialArtifactData = {
  documentId: "init",
  content: "",
  kind: "text",
  title: "",
  status: "idle",
  isVisible: false,
  boundingBox: {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  },
}

export function useArtifactSelector(selector) {
  const { data: localArtifact } = useSWR("artifact", null, {
    fallbackData: initialArtifactData,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  const selectedValue = useMemo(() => {
    if (!localArtifact) return selector(initialArtifactData)
    return selector(localArtifact)
  }, [localArtifact, selector])

  return selectedValue
}

export function useArtifact() {
  const { data: localArtifact, mutate: setLocalArtifact } = useSWR("artifact", null, {
    fallbackData: initialArtifactData,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  const artifact = useMemo(() => {
    if (!localArtifact) return initialArtifactData
    return localArtifact
  }, [localArtifact])

  const setArtifact = useCallback(
    (updaterFn) => {
      setLocalArtifact((currentArtifact) => {
        const artifactToUpdate = currentArtifact || initialArtifactData

        if (typeof updaterFn === "function") {
          return updaterFn(artifactToUpdate)
        }

        return updaterFn
      })
    },
    [setLocalArtifact]
  )

  const { data: localArtifactMetadata, mutate: setLocalArtifactMetadata } = useSWR(() => (artifact.documentId ? `artifact-metadata-${artifact.documentId}` : null), null, {
    fallbackData: null,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return useMemo(
    () => ({
      artifact,
      setArtifact,
      metadata: localArtifactMetadata,
      setMetadata: setLocalArtifactMetadata,
    }),
    [artifact, setArtifact, localArtifactMetadata, setLocalArtifactMetadata]
  )
}
