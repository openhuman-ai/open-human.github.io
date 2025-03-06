import { valueToEstree } from 'estree-util-value-to-estree';
import { parse as parseYaml } from 'yaml';
import { createAstExportConst } from './utils.mjs';


export function isExportNode(
    node,
    varName
) {
    if (node.type !== 'mdxjsEsm') return false
    const [n] = node.data.estree.body

    if (n.type !== 'ExportNamedDeclaration') return false

    const name = n.declaration?.declarations?.[0].id.name
    if (!name) return false

    return name === varName
}

function createNode(data) {
    return {
        type: 'mdxjsEsm',
        data: {
            estree: {
                body: [createAstExportConst('frontMatter', valueToEstree(data))]
            }
        }
    };
}

export function remarkMdxFrontMatter() {
    return (ast, file) => {
        const yamlNodeIndex = ast.children.findIndex(node => node.type === 'yaml');
        const esmNodeIndex = ast.children.findIndex(node =>
            isExportNode(node, 'frontMatter')
        );
        const hasYaml = yamlNodeIndex !== -1;
        const hasEsm = esmNodeIndex !== -1;

        if (hasYaml) {
            if (hasEsm) {
                throw new Error(
                    "Both yaml frontMatter and esm export frontMatter aren't supported. Keep only 1."
                );
            }

            const raw = ast.children[yamlNodeIndex].value;
            const data = parseYaml(raw);

            ast.children[yamlNodeIndex] = createNode(data);
        } else if (!hasEsm) {
            ast.children.unshift(createNode({}));
        }

        const frontMatter = ast.children.find(node =>
            isExportNode(node, 'frontMatter')
        ).data.estree.body[0].declaration.declarations[0].init.properties;

        file.data.frontMatter = estreeToValue(frontMatter);
    };
}

function traverseArray(nodes, result = []) {
    for (const node of nodes) {
        if (!node) continue;

        if (node.type === 'Literal') {
            result.push(node.value);
            continue;
        }
        if (node.type === 'ObjectExpression') {
            result.push(estreeToValue(node.properties));
            continue;
        }
        if (node.type === 'ArrayExpression') {
            result.push(traverseArray(node.elements));
        }
    }
    return result;
}

function estreeToValue(nodes, result = Object.create(null)) {
    for (const node of nodes) {
        if (node.type !== 'Property') continue;
        const { key, value } = node;

        const keyName =
            key.type === 'Literal'
                ? key.value
                : key.type === 'Identifier'
                    ? key.name
                    : '';
        if (value.type === 'Literal') {
            result[keyName] = value.value;
        } else if (value.type === 'ObjectExpression') {
            result[keyName] = estreeToValue(value.properties);
        } else if (value.type === 'ArrayExpression') {
            result[keyName] = traverseArray(value.elements);
        }
    }
    return result;
}
