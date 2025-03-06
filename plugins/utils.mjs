export function createAstExportConst(name, value) {
    return {
        type: 'ExportNamedDeclaration',
        specifiers: [],
        declaration: {
            type: 'VariableDeclaration',
            kind: 'const',
            declarations: [
                {
                    type: 'VariableDeclarator',
                    id: { type: 'Identifier', name },
                    init: value
                }
            ]
        }
    }
}

export function pageTitleFromFilename(fileName) {
    return title(fileName.replaceAll(/[-_]/g, ' '), { special: ['SSR'] })
}

export function createAstObject(obj) {
    return {
        type: 'ObjectExpression',
        properties: Object.entries(obj).map(([key, value]) => ({
            ...DEFAULT_PROPERTY_PROPS,
            key: { type: 'Identifier', name: key },
            value:
                value && typeof value === 'object' ? value : { type: 'Literal', value }
        }))
    }
}
