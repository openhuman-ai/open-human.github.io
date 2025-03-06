export default function Navbar() {
  return (
    <nav
      className="nextra-toc order-last max-xl:hidden w-64 shrink-0 sticky md:sticky print:hidden"
      aria-label="table of contents"
    >
      <div className="grid grid-rows-[min-content_1fr_min-content] sticky top-(--nextra-navbar-height) text-sm max-h-[calc(100vh-var(--nextra-navbar-height))]">
        <ul className="p-4 nextra-scrollbar overscroll-y-contain overflow-y-auto hyphens-auto nextra-mask">
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#about-the-leaderboard"
              className="focus-visible:nextra-focus font-semibold block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              About the Leaderboard
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#our-goals"
              className="focus-visible:nextra-focus ms-3 block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Our goals
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#outcomes"
              className="focus-visible:nextra-focus ms-3 block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Outcomes
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#setup-and-development-timeline"
              className="focus-visible:nextra-focus font-semibold block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Setup and development timeline
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#dataset"
              className="focus-visible:nextra-focus font-semibold block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Dataset
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#beat-2-in-the-smpl-x-format"
              className="focus-visible:nextra-focus ms-6 block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              BEAT-2 in the SMPL-X Format
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#submission-process"
              className="focus-visible:nextra-focus font-semibold block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Submission process
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#rules-for-participation"
              className="focus-visible:nextra-focus ms-3 block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Rules for participation
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#how-to-participate"
              className="focus-visible:nextra-focus ms-3 block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              How to participate
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#what-happens-after-your-submission"
              className="focus-visible:nextra-focus ms-3 block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              What happens after your submission
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#evaluation-methodology"
              className="focus-visible:nextra-focus font-semibold block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Evaluation methodology
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#evaluation-tasks"
              className="focus-visible:nextra-focus ms-3 block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Evaluation tasks
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#motion-quality"
              className="focus-visible:nextra-focus ms-6 block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Motion quality
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#motion-specificity-to-speech"
              className="focus-visible:nextra-focus ms-6 block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Motion specificity to speech
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#future-evaluations"
              className="focus-visible:nextra-focus ms-6 block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Future evaluations
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#tooling"
              className="focus-visible:nextra-focus font-semibold block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Tooling
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#standardised-visualisation"
              className="focus-visible:nextra-focus ms-3 block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Standardised visualisation
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#user-study-automation"
              className="focus-visible:nextra-focus ms-3 block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              User-study automation
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#objective-evaluation"
              className="focus-visible:nextra-focus ms-3 block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Objective evaluation
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#frequently-asked-questions"
              className="focus-visible:nextra-focus font-semibold block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Frequently Asked Questions
            </a>
          </li>
          <li className="my-2 scroll-my-6 scroll-py-6">
            <a
              href="#contact-address"
              className="focus-visible:nextra-focus ms-6 block transition-colors subpixel-antialiased text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 break-words"
            >
              Contact address
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
