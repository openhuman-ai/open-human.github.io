import path from 'node:path';
import slash from 'slash';
import { visit } from 'unist-util-visit';

const PUBLIC_DIR = path.join(process.cwd(), 'public')
const EXTERNAL_URL_REGEX = /^https?:\/\//

export function truthy(value) {
    return !!value
}

const VALID_BLUR_EXT = ['.jpeg', '.png', '.webp', '.avif', '.jpg'];
const VARIABLE_PREFIX = '__img';

export const remarkStaticImage = () => ast => {
    const definitionNodes = [];
    const imageImports = new Set();
    const imageNodes = [];

    visit(ast, 'definition', node => {
        definitionNodes.push(node);
    });

    visit(ast, ['image', 'imageReference'], _node => {
        const node = _node;
        let url = decodeURI(
            node.type === 'image'
                ? node.url
                : definitionNodes.find(definition => definition.identifier === node.identifier)?.url ?? ''
        );

        if (!url) return;

        if (EXTERNAL_URL_REGEX.test(url)) {
            return;
        }

        if (url.startsWith('/')) {
            const urlPath = path.join(PUBLIC_DIR, url);
            url = slash(urlPath);
        }
        imageImports.add(url);
        node.url = url;
        imageNodes.push(node);
    });

    const imageUrls = [...imageImports];

    for (const node of imageNodes) {
        const { url } = node;
        const imageIndex = imageUrls.indexOf(url);
        const variableName = `${VARIABLE_PREFIX}${imageIndex}`;
        const hasBlur = VALID_BLUR_EXT.some(ext => url.endsWith(ext));

        Object.assign(node, {
            type: 'mdxJsxFlowElement',
            name: 'img',
            attributes: [
                node.alt && {
                    type: 'mdxJsxAttribute',
                    name: 'alt',
                    value: node.alt
                },
                hasBlur && {
                    type: 'mdxJsxAttribute',
                    name: 'placeholder',
                    value: 'blur'
                },
                {
                    type: 'mdxJsxAttribute',
                    name: 'src',
                    value: {
                        type: 'mdxJsxAttributeValueExpression',
                        value: variableName,
                        data: {
                            estree: {
                                body: [
                                    {
                                        type: 'ExpressionStatement',
                                        expression: { type: 'Identifier', name: variableName }
                                    }
                                ]
                            }
                        }
                    }
                }
            ].filter(truthy)
        });
    }

    if (imageUrls.length) {
        ast.children.unshift(
            ...imageUrls.map((imageUrl, index) => ({
                type: 'mdxjsEsm',
                data: {
                    estree: {
                        body: [
                            {
                                type: 'ImportDeclaration',
                                source: { type: 'Literal', value: imageUrl },
                                specifiers: [
                                    {
                                        type: 'ImportDefaultSpecifier',
                                        local: {
                                            type: 'Identifier',
                                            name: `${VARIABLE_PREFIX}${index}`
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                }
            }))
        );
    }
};
