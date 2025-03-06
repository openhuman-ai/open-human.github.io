
import { visit } from 'unist-util-visit'

const remarkMdxDisableExplicitJsx =
    () => {
        const whiteList = ["details", "summary"]
        return (ast => {
            const test = whiteList.map(name => ({ name }))
            visit(ast, test, node => {
                delete node.data._mdxExplicitJsx
            })
        })
    }

export default remarkMdxDisableExplicitJsx;