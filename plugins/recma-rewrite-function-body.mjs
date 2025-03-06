export const recmaRewriteFunctionBody = () => (ast) => {
    // Rename `default: MDXContent` to `default: _createMdxContent`
    const topLevelReturn = ast.body.find(
        node => node.type === 'ReturnStatement'
    );

    const mdxContentProp = topLevelReturn.argument.properties.find(
        prop => prop.value.name === 'MDXContent'
    );

    mdxContentProp.value.name = '_createMdxContent';
};
