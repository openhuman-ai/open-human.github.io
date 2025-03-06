import Slugger from 'github-slugger';
import { visit } from 'unist-util-visit';

const MARKDOWN_EXTENSION_REGEX = /\.mdx?$/

const SKIP_FOR_PARENT_NAMES = new Set(['Tab', 'Tabs.Tab']);

export const getFlattenedValue = (node) =>
    node.children
        .map(child =>
            'children' in child
                ? getFlattenedValue(child)
                : 'value' in child
                    ? child.value
                    : ''
        )
        .join('')

export function remarkHeadings({ exportName = 'useTOC' }) {
    const headings = [];
    let hasJsxInH1;

    const slugger = new Slugger();

    return (ast, file) => {
        const PartialComponentToHeadingsName = Object.create(null);

        visit(
            ast,
            [
                'heading',
                'mdxJsxFlowElement',
                'mdxjsEsm'
            ],
            (node, _index, parent) => {
                if (node.type === 'heading') {
                    if (node.depth === 1) {
                        const hasJsx = node.children.some(
                            (child) => child.type === 'mdxJsxTextElement'
                        );
                        if (hasJsx) {
                            hasJsxInH1 = true;
                        }
                        return;
                    }

                    node.data ||= {};
                    const headingProps = (node.data.hProperties ||= {});
                    if (SKIP_FOR_PARENT_NAMES.has(parent.name)) {
                        delete headingProps.id;
                    } else {
                        const value = getFlattenedValue(node);
                        const id = slugger.slug(headingProps.id || value);
                        headingProps.id = id;
                        headings.push({ depth: node.depth, value, id });
                    }
                    return;
                }

                if (node.type === 'mdxjsEsm') {
                    for (const child of node.data.estree.body) {
                        if (child.type !== 'ImportDeclaration') continue;
                        const importPath = child.source.value;
                        const isMdxImport = MARKDOWN_EXTENSION_REGEX.test(importPath);
                        if (!isMdxImport) continue;

                        const componentName = child.specifiers.find(
                            (o) => o.type === 'ImportDefaultSpecifier'
                        )?.local.name;

                        if (!componentName) continue;
                        const { length } = Object.keys(PartialComponentToHeadingsName);
                        const exportAsName = `${exportName}${length}`;
                        PartialComponentToHeadingsName[componentName] = exportAsName;

                        child.specifiers.push({
                            type: 'ImportSpecifier',
                            imported: { type: 'Identifier', name: exportName },
                            local: { type: 'Identifier', name: exportAsName }
                        });
                    }
                } else {
                    const headingsName = PartialComponentToHeadingsName[node.name];
                    if (headingsName) {
                        headings.push(headingsName);
                    }
                }
            }
        );

        file.data.hasJsxInH1 = hasJsxInH1;
        file.data.toc = headings;
    };
}
