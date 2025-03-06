import { codeDocumentHandler } from "@/artifacts/code/server"
import { imageDocumentHandler } from "@/artifacts/image/server"
import { sheetDocumentHandler } from "@/artifacts/sheet/server"
import { textDocumentHandler } from "@/artifacts/text/server"
import { ArtifactKind } from "@/components/artifact"

export function createDocumentHandler(config) {
  return {
    kind: config.kind,
    onCreateDocument: async (args) => {
      const draftContent = await config.onCreateDocument({
        id: args.id,
        title: args.title,
        dataStream: args.dataStream,
        session: args.session,
      })

      if (args.session?.user?.id) {
        await saveDocument({
          id: args.id,
          title: args.title,
          content: draftContent,
          kind: config.kind,
          userId: args.session.user.id,
        })
      }

      return
    },
    onUpdateDocument: async (args) => {
      const draftContent = await config.onUpdateDocument({
        document: args.document,
        description: args.description,
        dataStream: args.dataStream,
        session: args.session,
      })

      if (args.session?.user?.id) {
        await saveDocument({
          id: args.document.id,
          title: args.document.title,
          content: draftContent,
          kind: config.kind,
          userId: args.session.user.id,
        })
      }

      return
    },
  }
}

/*
 * Use this array to define the document handlers for each artifact kind.
 */
export const documentHandlersByArtifactKind = [textDocumentHandler, codeDocumentHandler, imageDocumentHandler, sheetDocumentHandler]

export const artifactKinds = ["text", "code", "image", "sheet"]
