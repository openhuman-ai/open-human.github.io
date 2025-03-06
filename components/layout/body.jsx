import React from "react"
import Sidebar from "./sidebar"

export default function Body({ children }) {
  return (
    <div className="mx-auto flex max-w-[90rem]">
      <div className="motion-reduce:transition-none [transition:background-color1.5sease]"></div>
      {/* <Sidebar/> */}
      {/* <nav className="nextra-toc order-last max-xl:hidden w-64 shrink-0 print:hidden px-4" aria-label="table of contents">
                <div className="nextra-scrollbar sticky top-16 overflow-y-auto pr-4 pt-6 text-sm [hyphens:auto] max-h-[calc(100vh-var(--nextra-navbar-height)-env(safe-area-inset-bottom))] ltr:-mr-4 rtl:-ml-4">
                    <p className="mb-4 font-semibold tracking-tight">On This Page</p>
                    <ul>
                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#one" className="ltr:pl-4 rtl:pr-4 inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">One</a>
                        </li>
                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#two" className="ltr:pl-4 rtl:pr-4 inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Two</a>
                        </li>
                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#three" className="ltr:pl-4 rtl:pr-4 inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Three</a>
                        </li>
                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#four" className="ltr:pl-4 rtl:pr-4 inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Four</a>
                        </li>
                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#five" className="ltr:pl-4 rtl:pr-4 inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Five</a>
                        </li>
                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#six" className="ltr:pl-4 rtl:pr-4 inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Six</a>
                        </li>
                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#seven" className="ltr:pl-4 rtl:pr-4 inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Seven</a>
                        </li>
                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#foo-myvar" className="font-semibold inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Foo "I am from export const"</a>
                        </li>
                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#bar-code" className="ltr:pl-4 rtl:pr-4 inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Bar <code className="nextra-code" dir="ltr">code</code>
                            </a>
                        </li>

                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#da" className="ltr:pl-16 rtl:pr-16 inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">
                                <strong>Da</strong>
                            </a>
                        </li>
                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#machina" className="ltr:pl-16 rtl:pr-16 inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">
                                <em>Ma</em>
                                <strong>Chi</strong>
                                <s>na</s>
                            </a>
                        </li>
                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#qux-" className="ltr:pl-8 rtl:pr-8 inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Qux <b>someVal</b>
                            </a>
                        </li>
                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#quick-start-latex" className="font-semibold inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Quick Start <span className="katex">

                            </a>
                        </li>
                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#make-it-reusable" className="font-semibold inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Make It Reusable</a>
                        </li>
                        <li className="my-2 scroll-my-6 scroll-py-6">
                            <a href="#example" className="font-semibold inline-block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Example</a>
                        </li>
                    </ul>
                    <div className="nextra-toc-footer mt-8 pt-8 sticky bottom-0 flex flex-col items-start gap-2 pb-8">
                        <a href="https://google.com/search?q=Feedback%20for%20Getting%20Started" target="blank" rel="noreferrer" className="text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 contrast-more:text-gray-800 contrast-more:dark:text-gray-50">Question? Give us feedback →</a>
                        <a className="text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 contrast-more:text-gray-800 contrast-more:dark:text-gray-50" href="https://github.com/pithagon/nextra/blob/core/examples/pithagon.github.io/pages/docs/getting-started.mdx">Edit this page on GitHub →</a>
                        <button aria-hidden="true" className="flex items-center gap-1.5 transition opacity-100 disabled:opacity-0 text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 contrast-more:text-gray-800 contrast-more:dark:text-gray-50" disabled="">Scroll to top<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="-rotate-90 size-4 border rounded-full border-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7">
                            </path>
                        </svg>
                        </button>
                    </div>
                </div>
            </nav> */}
      <div id="reach-skip-nav"></div>
      <article className="w-full break-words nextra-content flex min-h-[calc(100vh-var(--nextra-navbar-height))] min-w-0 justify-center pb-8 pr-[calc(env(safe-area-inset-right)-1.5rem)]">
        {children}
      </article>
    </div>
  )
}
