import { toEstree } from 'hast-util-to-estree';
import { visit } from 'unist-util-visit';
import { createAstObject } from './utils.mjs';


export const TOC_HEADING_REGEX = /^h[2-6]$/

export const rehypeExtractTocContent = () => (ast, file) => {
    const toc = [];
    const idSet = new Set((file.data.toc || []).map(({ id }) => id));

    visit(ast, 'element', node => {
        if (!TOC_HEADING_REGEX.test(node.tagName)) return;

        const { id } = node.properties;
        if (typeof id === 'string' && idSet.has(id)) {
            toc.push(structuredClone(node));
        }
    });

    const TocToExpression = Object.fromEntries(
        toc.map(node => [
            node.properties.id,
            toEstree(node).body[0].expression
        ])
    );

    const elements = (file.data.toc || []).map(n => {
        if (typeof n === 'string') {
            return {
                type: 'SpreadElement',
                argument: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: n }
                }
            };
        }

        const node = TocToExpression[n.id];

        const isText = node.children.every(
            child =>
                child.type === 'JSXExpressionContainer' &&
                child.expression.type === 'Literal'
        );

        const result = isText
            ? node.children.map(n => n.expression)[0]
            : {
                type: 'JSXFragment',
                openingFragment: { type: 'JSXOpeningFragment' },
                closingFragment: { type: 'JSXClosingFragment' },
                children: node.children
            };

        return createAstObject({
            value: result,
            id: node.openingElement.attributes.find(
                attr => attr.name.name === 'id'
            ).value.value,
            depth: Number(node.openingElement.name.name[1])
        });
    });

    ast.children.push({
        type: 'mdxjsEsm',
        data: {
            estree: {
                body: [
                    {
                        type: 'ExportNamedDeclaration',
                        specifiers: [],
                        declaration: {
                            type: 'FunctionDeclaration',
                            id: { type: 'Identifier', name: 'useTOC' },
                            params: [{ type: 'Identifier', name: 'props' }],
                            body: {
                                type: 'BlockStatement',
                                body: [
                                    {
                                        type: 'ReturnStatement',
                                        argument: { type: 'ArrayExpression', elements }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    });

    file.data.toc = toc;
};
