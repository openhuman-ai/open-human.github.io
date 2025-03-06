import { visit } from 'unist-util-visit';

const EXTERNAL_URL_REGEX = /^https?:\/\//

export function remarkLinkRewrite({ pattern, replace, excludeExternalLinks }) {
    return (ast) => {
        visit(ast, 'link', (node) => {
            if (!(excludeExternalLinks && EXTERNAL_URL_REGEX.test(node.url))) {
                node.url = node.url.replace(pattern, replace);
            }
        });
    };
}