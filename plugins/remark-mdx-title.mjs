import path from 'node:path';
import { visit } from 'unist-util-visit';
import { createAstExportConst, pageTitleFromFilename } from './utils.mjs';
import { getFlattenedValue } from './remark-headings.mjs';

function getFrontMatterASTObject(node) {
    const [n] = node.data.estree.body;
    return n.declaration.declarations[0].init.properties;
}

export function isExportNode(node, varName) {
    if (node.type !== 'mdxjsEsm') return false;
    const [n] = node.data.estree.body;

    if (n.type !== 'ExportNamedDeclaration') return false;

    const name = n.declaration?.declarations?.[0].id.name;
    if (!name) return false;

    return name === varName;
}

export function remarkMdxTitle() {
    return (ast, file) => {
        let title = '';

        const frontMatterNode = ast.children.find(node =>
            isExportNode(node, 'frontMatter')
        );
        const frontMatter = getFrontMatterASTObject(frontMatterNode);

        for (const { key, value } of frontMatter) {
            if (key.type === 'Literal' && key.value === 'title') {
                title = value.value;
                break;
            }
            if (key.type === 'Identifier' && key.name === 'title') {
                title = value.value;
                break;
            }
        }

        if (!title) {
            visit(ast, { type: 'heading', depth: 1 }, node => {
                title = getFlattenedValue(node);
                return false; // Stop traversing immediately
            });
        }
        if (!title) {
            const [filePath] = file.history;
            if (filePath) {
                title = pageTitleFromFilename(path.parse(filePath).name);
            }
        }

        ast.children.unshift({
            type: 'mdxjsEsm',
            data: {
                estree: {
                    body: [createAstExportConst('title', { type: 'Literal', value: title })]
                }
            }
        });
        file.data.title = title;
    };
}
