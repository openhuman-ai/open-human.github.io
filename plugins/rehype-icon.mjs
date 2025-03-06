import { visit } from 'unist-util-visit';

export const REHYPE_ICON_DEFAULT_REPLACES = {
    js: 'JavaScriptIcon',
    jsx: 'JavaScriptIcon',
    ts: 'TypeScriptIcon',
    tsx: 'TypeScriptIcon',
    md: 'MarkdownIcon',
    mdx: 'MdxIcon',
    sh: 'TerminalIcon',
    bash: 'TerminalIcon',
    css: 'CssIcon',
    'c++': 'CPPIcon',
    cpp: 'CPPIcon',
    csharp: 'CsharpIcon',
    cs: 'CsharpIcon',
    'c#': 'CsharpIcon',
    graphql: 'GraphQLIcon',
    python: 'PythonIcon',
    py: 'PythonIcon',
    rust: 'RustIcon',
    rs: 'RustIcon',
    terraform: 'TerraformIcon',
    tf: 'TerraformIcon',
    move: 'MoveIcon'
};

function createImport(iconName) {
    return {
        type: 'mdxjsEsm',
        data: {
            estree: {
                body: [
                    {
                        type: 'ImportDeclaration',
                        source: { type: 'Literal', value: '@/nextra/icons' },
                        specifiers: [
                            {
                                type: 'ImportSpecifier',
                                imported: { type: 'Identifier', name: iconName },
                                local: { type: 'Identifier', name: iconName }
                            }
                        ]
                    }
                ]
            }
        }
    };
}

function attachIconProp(node, iconName) {
    Object.assign(node, {
        type: 'mdxJsxFlowElement',
        name: 'pre',
        attributes: [
            {
                type: 'mdxJsxAttribute',
                name: 'icon',
                value: {
                    type: 'mdxJsxAttributeValueExpression',
                    value: 'MarkdownIcon',
                    data: {
                        estree: {
                            body: [
                                {
                                    type: 'ExpressionStatement',
                                    expression: { type: 'Identifier', name: iconName }
                                }
                            ]
                        }
                    }
                }
            }
        ]
    });
}

const isMdxJsEsm = node => node.type === 'mdxjsEsm';
const isImportDeclaration = node => node.data.estree.body[0].type === 'ImportDeclaration';
const isImportFrom = node => node.data.estree.body[0].source.value === '@/nextra/icons';

export const rehypeIcon = (replaces = REHYPE_ICON_DEFAULT_REPLACES) => ast => {
    const imports = ast.children.filter(
        node =>
            isMdxJsEsm(node) && isImportDeclaration(node) && isImportFrom(node)
    );

    visit(ast, { tagName: 'figure' }, node => {
        const isRehypePrettyCode = 'data-rehype-pretty-code-figure' in node.properties;

        if (!isRehypePrettyCode) return;

        const preEl = node.children[0];
        const lang = preEl.properties['data-language'];
        const iconName = replaces[lang];

        if (!iconName) return;

        let findImportedName = '';
        for (const { data } of imports) {
            const [{ specifiers }] = data.estree.body;
            const isMatch = specifiers.some(spec => spec.imported.name === iconName);
            if (isMatch) {
                findImportedName = specifiers[0].local.name;
                break;
            }
        }

        if (!findImportedName) {
            const importNode = createImport(iconName);
            ast.children.push(importNode);
            imports.push(importNode);
        }
        attachIconProp(preEl, findImportedName || iconName);
    });
};
