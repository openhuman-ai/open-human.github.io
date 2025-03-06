export default function EditableDiv({ html, setHtml }) {
  //   const EditableDiv = ({ html, setHtml }) => {
  // return <div contentEditable dangerouslySetInnerHTML={{ __html: html }} onInput={(e) => setHtml(e.currentTarget.innerHTML)} />
  return (
    <div contentEditable={true} dangerouslySetInnerHTML={{ __html: html }} translate="no" className="ProseMirror" id="prompt-textarea" data-virtualkeyboard="true">
      <p data-placeholder="Ask anything" className="placeholder">
        <br className="ProseMirror-trailingBreak" />
      </p>
    </div>
  )
  //   }
}
