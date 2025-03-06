import { textblockTypeInputRule } from "prosemirror-inputrules"
import { Schema } from "prosemirror-model"
import { schema } from "prosemirror-schema-basic"
import { addListNodes } from "prosemirror-schema-list"

import { buildContentFromDocument } from "./functions"

export const documentSchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  marks: schema.spec.marks,
})

export function headingRule(level) {
  return textblockTypeInputRule(new RegExp(`^(#{1,${level}})\\s$`), documentSchema.nodes.heading, () => ({ level }))
}

export const handleTransaction = ({ transaction, editorRef, onSaveContent }) => {
  if (!editorRef || !editorRef.current) return

  const newState = editorRef.current.state.apply(transaction)
  editorRef.current.updateState(newState)

  if (transaction.docChanged && !transaction.getMeta("no-save")) {
    const updatedContent = buildContentFromDocument(newState.doc)

    if (transaction.getMeta("no-debounce")) {
      onSaveContent(updatedContent, false)
    } else {
      onSaveContent(updatedContent, true)
    }
  }
}
