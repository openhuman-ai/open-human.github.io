import nextMDX from "@next/mdx"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"
import { rendererRich, transformerTwoslash } from "@shikijs/twoslash"
// import rehypeShiki from "@shikijs/rehype"
import remarkMdxDisableExplicitJsx from "./plugins/remark-mdx-disable-explicit-jsx.mjs"
import { remarkCustomHeadingId } from "./plugins/remark-custom-heading-id.mjs"
import { remarkHeadings } from "./plugins/remark-headings.mjs"
import { remarkLinkRewrite } from "./plugins/remark-link-rewrite.mjs"
import { remarkMdxFrontMatter } from "./plugins/remark-mdx-frontmatter.mjs"
// import { remarkMdxTitle } from './plugins/remark-mdx-title.mjs'
import { remarkStaticImage } from "./plugins/remark-static-image.mjs"
import { remarkStructurize } from "./plugins/remark-structurize.mjs"
import { DEFAULT_REHYPE_PRETTY_CODE_OPTIONS, rehypeAttachCodeMeta, rehypeParseCodeMeta } from "./plugins/rehype.mjs"
import { rehypeExtractTocContent } from "./plugins/rehype-extract-toc-content.mjs"
import { rehypeIcon } from "./plugins/rehype-icon.mjs"
// import { recmaRewriteJsx } from './plugins/recma-rewrite-jsx.mjs'
// import { recmaRewriteFunctionBody } from './plugins/recma-rewrite-function-body.mjs'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  baseUrl: "./",
  options: {
    remarkPlugins: [
      // remarkMermaid,
      remarkGfm,
      remarkMdxFrontMatter,
      remarkParse,
      remarkRehype,
      remarkMath,
      remarkMdxDisableExplicitJsx,
      remarkCustomHeadingId,
      // remarkMdxTitle,
      [remarkHeadings, { exportName: "useTOC" }],
      [
        remarkLinkRewrite,
        {
          pattern: /\.mdx?(?:(?=[#?])|$)/,
          replace: "",
          excludeExternalLinks: true,
        },
      ],
      remarkStaticImage,
      [remarkStructurize, { codeblocks: true }],
    ],
    rehypePlugins: [
      // [rehypeRaw, {
      //   passThrough: ['mdxjsEsm', 'mdxJsxFlowElement', 'mdxTextExpression']
      // }],
      [rehypeParseCodeMeta, { defaultShowCopyCode: true }],
      rehypeStringify,
      rehypeKatex,
      // [
      //   rehypeShiki,
      //   {
      //     themes: {
      //       light: "github-light",
      //       dark: "github-dark",
      //     },
      //   },
      // ],
      rehypeIcon,
      rehypeAttachCodeMeta,
      rehypeExtractTocContent,
    ],
    recmaPlugins: [
      // (() => (ast, file) => {
      //   const mdxContentIndex = ast.body.findIndex(node => {
      //     if (node.type === 'ExportDefaultDeclaration') {
      //       return (node.declaration).id.name === 'MDXContent'
      //     }
      //     if (node.type === 'FunctionDeclaration') {
      //       return node.id.name === 'MDXContent'
      //     }
      //   })
      //   // Remove `MDXContent` since we use custom HOC_MDXContent
      //   let [mdxContent] = ast.body.splice(mdxContentIndex, 1)
      //   // In MDX3 MDXContent is directly exported as export default when `outputFormat: 'program'` is specified
      //   if (mdxContent.type === 'ExportDefaultDeclaration') {
      //     mdxContent = mdxContent.declaration
      //   }
      //   const mdxContentArgument = mdxContent.body.body[0].argument
      //   file.data.hasMdxLayout =
      //     !!mdxContentArgument &&
      //     mdxContentArgument.openingElement.name.name === 'MDXLayout'
      //   const localExports = new Set(['title', 'frontMatter' /* 'useTOC' */])
      //   for (const node of ast.body) {
      //     if (node.type === 'ExportNamedDeclaration') {
      //       let varName
      //       const { declaration } = node
      //       if (!declaration) {
      //         // skip for `export ... from '...'` declaration
      //         continue
      //       } else if (declaration.type === 'VariableDeclaration') {
      //         const [{ id }] = declaration.declarations
      //         varName = id.name
      //       } else if (declaration.type === 'FunctionDeclaration') {
      //         varName = declaration.id.name
      //       } else {
      //         throw new Error(`\`${declaration.type}\` unsupported.`)
      //       }
      //       if (localExports.has(varName)) {
      //         Object.assign(node, node.declaration)
      //       }
      //     }
      //   }
      // }),
      // recmaRewriteJsx
      // recmaRewriteFunctionBody,
    ],
  },
})

export default withMDX({
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
    NEXT_PUBLIC_GITHUB_CLIENT_ID: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "*.githubusercontent.com",
  //       port: "",
  //       pathname: "**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "lh3.googleusercontent.com",
  //     },
  //   ],
  // },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
})
