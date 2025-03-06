import { remove } from 'unist-util-remove'

export const remarkRemoveImports = () => ast => {
    remove(
        ast,
        node =>
            node.type === 'mdxjsEsm' &&
            // @ts-expect-error
            node.data.estree.body[0].type === 'ImportDeclaration'
    )
}
