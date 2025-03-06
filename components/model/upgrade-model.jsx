export function UpgradeModel() {
  return (
    <div className="absolute inset-0">
      <div data-state="open" className="fixed inset-0 z-50 bg-black/50 dark:bg-black/80 pointer-events-auto">
        <div className="z-50 h-full w-full overflow-y-auto">
          <div
            role="dialog"
            id="radix-:r40:"
            aria-describedby="radix-:r42:"
            aria-labelledby="radix-:r41:"
            data-state="open"
            className="relative start-1/2 col-auto col-start-2 row-auto row-start-2 h-full w-full bg-token-main-surface-primary text-start ltr:-translate-x-1/2 rtl:translate-x-1/2 shadow-xl flex flex-col focus:outline-none h-full w-full overflow-hidden flex flex-col pointer-events-auto"
            tabIndex="-1"
          >
            <div className="flex-grow overflow-y-auto">
              <div>
                <div className="relative grid grid-cols-[1fr_auto_1fr] px-6 py-4 md:pb-10 md:pt-[4.5rem]">
                  <div></div>
                  <div className="my-1 flex flex-col items-center justify-center md:mb-0 md:mt-0">
                    <div className="text-2xl font-semibold md:text-3xl">Upgrade your plan</div>
                  </div>
                  <button className="justify-self-end text-token-text-primary opacity-50 transition hover:opacity-75 md:absolute md:right-6 md:top-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-lg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.63603 5.63604C6.02656 5.24552 6.65972 5.24552 7.05025 5.63604L12 10.5858L16.9497 5.63604C17.3403 5.24552 17.9734 5.24552 18.364 5.63604C18.7545 6.02657 18.7545 6.65973 18.364 7.05025L13.4142 12L18.364 16.9497C18.7545 17.3403 18.7545 17.9734 18.364 18.364C17.9734 18.7545 17.3403 18.7545 16.9497 18.364L12 13.4142L7.05025 18.364C6.65972 18.7545 6.02656 18.7545 5.63603 18.364C5.24551 17.9734 5.24551 17.3403 5.63603 16.9497L10.5858 12L5.63603 7.05025C5.24551 6.65973 5.24551 6.02657 5.63603 5.63604Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="mb-3 flex justify-center md:mb-10">
                  <div className="w-[fit-content]">
                    <div
                      role="group"
                      dir="ltr"
                      aria-label="Toggle for switching between Personal and Business plans"
                      className="cursor-pointer select-none rounded-full border border-solid border-token-border-light bg-token-main-surface-tertiary p-0.5 outline-none"
                      tabIndex="0"
                    >
                      <div className="relative grid grid-cols-2">
                        <div className="relative z-10 px-3 py-1.5 text-center text-sm font-semibold">
                          <button
                            type="button"
                            data-state="on"
                            role="radio"
                            aria-checked="true"
                            aria-label="Toggle for switching to Personal plans"
                            className="text-token-text-primary"
                            tabIndex="-1"
                            data-radix-collection-item=""
                          >
                            Personal
                          </button>
                          <div className="absolute inset-0 -z-10 rounded-full bg-token-main-surface-primary transform-none origin-center"></div>
                        </div>
                        <div className="relative z-10 px-3 py-1.5 text-center text-sm font-semibold">
                          <button
                            type="button"
                            data-state="off"
                            role="radio"
                            aria-checked="false"
                            aria-label="Toggle for switching to Business plans"
                            className="text-token-text-tertiary"
                            tabIndex="0"
                            data-radix-collection-item=""
                          >
                            Business
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-4 px-3 py-3 md:min-h-[30rem] md:flex-row md:gap-0 md:py-0">
                  <div
                    className="text-sm relative flex-1 flex gap-5 flex-col border-t border-l border-r border-b rounded-xl md:min-h-[30rem] md:rounded-none md:border-r-0 md:last:border-r md:first:rounded-tl-xl md:first:rounded-bl-xl md:last:rounded-tr-xl md:last:rounded-br-xl md:max-w-96 justify-center px-6 pt-6 pb-10 md:pb-6"
                    data-testid="free-pricing-modal-column"
                  >
                    <div className="relative flex flex-col bg-token-main-surface-primary">
                      <div className="flex flex-col gap-1">
                        <p className="flex items-center gap-2 text-2xl font-semibold">Free</p>
                        <div className="ml-4 mt-2 flex items-baseline gap-1.5" data-testid="free-pricing-column-cost">
                          <div className="relative">
                            <p className="absolute -left-4 -top-0 text-2xl text-token-text-secondary">$</p>
                            <div className="flex items-baseline gap-1.5">
                              <div className="text-5xl text-token-text-primary">
                                <div className="text-5xl text-token-text-primary">0</div>
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="absolute mb-6 text-xs text-token-text-tertiary">USD/</p>
                                <p className="text-xs text-token-text-tertiary">month</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="mr-2 mt-2 text-base text-token-text-primary" data-testid="free-pricing-column-cost-summary">
                          Explore how AI can help you with everyday tasks
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col bg-token-main-surface-primary">
                      <button
                        className="opacity-50 hover:bg-inherit cursor-not-allowed btn relative btn-secondary btn-large border-none bg-token-sidebar-surface-tertiary font-semibold text-token-text-primary hover:bg-token-sidebar-surface-tertiary dark:bg-token-text-tertiary dark:text-token-text-primary dark:hover:bg-token-text-tertiary"
                        disabled=""
                      >
                        <div className="flex items-center justify-center">Your current plan</div>
                      </button>
                    </div>
                    <div className="flex flex-col flex-grow gap-2">
                      <div className="relative bg-token-main-surface-primary">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Access to GPT-4o mini and reasoning</span>
                        </div>
                      </div>
                      <div className="relative bg-token-main-surface-primary">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Standard voice mode</span>
                        </div>
                      </div>
                      <div className="relative bg-token-main-surface-primary">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Real-time data from the web with search</span>
                        </div>
                      </div>
                      <div className="relative bg-token-main-surface-primary">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Limited access to GPT-4o</span>
                        </div>
                      </div>
                      <div className="relative bg-token-main-surface-primary">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Limited access to file uploads, advanced data analysis, and image generation</span>
                        </div>
                      </div>
                      <div className="relative bg-token-main-surface-primary">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Use custom GPTs</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative flex flex-col text-xs text-token-text-secondary bg-token-main-surface-primary">
                        <div>
                          Have an existing plan? See{" "}
                          <a className="underline" href="https://help.openai.com/en/collections/3943089-billing" target="_blank">
                            billing help
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-sm relative flex-1 flex gap-5 flex-col border-t border-l border-r border-b rounded-xl md:first:rounded-tl-xl md:first:rounded-bl-xl md:last:rounded-tr-xl md:last:rounded-br-xl md:max-w-96 justify-center px-6 pt-6 pb-10 md:pb-6 md:min-h-[20rem] -mt-4 -mb-4 border-green-600 bg-green-600 bg-opacity-5"
                    data-testid="plus-pricing-modal-column"
                  >
                    <div className="relative flex flex-col mt-4">
                      <div className="flex flex-col gap-1">
                        <p className="flex items-center gap-2 text-2xl font-semibold">
                          Plus<span className="ml-1 rounded border px-1 py-0 text-xs font-semibold border-green-600 text-green-600">POPULAR</span>
                        </p>
                        <div className="ml-4 mt-2 flex items-baseline gap-1.5" data-testid="plus-pricing-column-cost">
                          <div className="relative">
                            <p className="absolute -left-4 -top-0 text-2xl text-token-text-secondary">$</p>
                            <div className="flex items-baseline gap-1.5">
                              <div className="text-5xl text-token-text-primary">
                                <div className="text-5xl text-token-text-primary">20</div>
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="absolute mb-6 text-xs text-token-text-tertiary">USD/</p>
                                <p className="text-xs text-token-text-tertiary">month</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="mr-2 mt-2 text-base text-token-text-primary" data-testid="plus-pricing-column-cost-summary">
                          Level up productivity and creativity with expanded access
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col bg-token-main-surface-primary">
                      <div>
                        <div className="bg-green-600 bg-opacity-5">
                          <button className="btn relative btn-green btn-large w-full font-semibold" data-testid="select-plan-button-plus-upgrade">
                            <div className="flex items-center justify-center">Get Plus</div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-grow gap-2">
                      <div className="relative">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Everything in Free</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Extended limits on messaging, file uploads, advanced data analysis, and image generation</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Standard and advanced voice mode</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Access to deep research and multiple reasoning models (o3-mini, o3-mini-high, and o1)</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Create and use projects and custom GPTs</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Limited access to Sora video generation</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Opportunities to test new features</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative flex flex-col text-xs text-token-text-secondary">
                        <div>
                          <a className="px-2 underline" href="https://help.openai.com/en/articles/7864572-what-is-the-chatgpt-model-selector" target="_blank">
                            Limits apply
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-sm relative flex-1 flex gap-5 flex-col border-t border-l border-r border-b rounded-xl md:min-h-[30rem] md:rounded-none md:border-r-0 md:last:border-r md:first:rounded-tl-xl md:first:rounded-bl-xl md:last:rounded-tr-xl md:last:rounded-br-xl md:max-w-96 justify-center px-6 pt-6 pb-10 md:pb-6 bg-token-main-surface-primary"
                    data-testid="pro-pricing-modal-column"
                  >
                    <div className="relative flex flex-col bg-token-main-surface-primary">
                      <div className="flex flex-col gap-1">
                        <p className="flex items-center gap-2 text-2xl font-semibold">Pro</p>
                        <div className="ml-4 mt-2 flex items-baseline gap-1.5" data-testid="pro-pricing-column-cost">
                          <div className="relative">
                            <p className="absolute -left-4 -top-0 text-2xl text-token-text-secondary">$</p>
                            <div className="flex items-baseline gap-1.5">
                              <div className="text-5xl text-token-text-primary">
                                <div className="text-5xl text-token-text-primary">200</div>
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <p className="absolute mb-6 text-xs text-token-text-tertiary">USD/</p>
                                <p className="text-xs text-token-text-tertiary">month</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="mr-2 mt-2 text-base text-token-text-primary" data-testid="pro-pricing-column-cost-summary">
                          Get the best of OpenAI with the highest level of access
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col bg-token-main-surface-primary">
                      <div>
                        <button className="btn relative btn-primary btn-large w-full" data-testid="select-plan-button-pro-upgrade">
                          <div className="flex items-center justify-center">Get Pro</div>
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col flex-grow gap-2">
                      <div className="relative bg-token-main-surface-primary">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Everything in Plus</span>
                        </div>
                      </div>
                      <div className="relative bg-token-main-surface-primary">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Unlimited access to all reasoning models and GPT-4o</span>
                        </div>
                      </div>
                      <div className="relative bg-token-main-surface-primary">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Extended access to deep research</span>
                        </div>
                      </div>
                      <div className="relative bg-token-main-surface-primary">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Access to research preview of GPT-4.5</span>
                        </div>
                      </div>
                      <div className="relative bg-token-main-surface-primary">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Access to o1 pro mode, which uses more compute for the best answers to the hardest questions</span>
                        </div>
                      </div>
                      <div className="relative bg-token-main-surface-primary">
                        <div className="text-l flex justify-start gap-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Extended access to Sora video generation</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative flex flex-col text-xs text-token-text-secondary bg-token-main-surface-primary px-2">
                        <div>
                          Unlimited subject to abuse guardrails.{" "}
                          <a className="underline" rel="noreferrer" href="https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro" target="_blank">
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative grid grid-cols-[1fr_auto_1fr] h-[136px]">
                <div></div>
                <span className="mb-12 mt-8 flex flex-col items-center justify-start gap-2 text-sm text-token-text-secondary md:mb-8 md:mt-8">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 19C6.44772 19 6 18.5523 6 18C6 16.3077 6.81186 15.0179 7.98298 14.1851C9.12436 13.3734 10.5892 13 12 13C13.4108 13 14.8756 13.3734 16.017 14.1851C17.1881 15.0178 18 16.3076 18 18C18 18.5523 17.5523 19 17 19C15.6012 19 8.39878 19 7 19Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M19.5 18C19.5 18 19.5 18 19.5 18C19.5 16.0565 18.6712 14.498 17.4529 13.4137C18.0999 13.1329 18.8086 13 19.5 13C20.5581 13 21.6567 13.3112 22.5128 13.9875C23.3911 14.6815 24 15.7564 24 17.1667C24 17.6269 23.6642 18 23.25 18H19.5Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6.54712 13.4137C5.32885 14.498 4.5 16.0564 4.5 18C4.5 18 4.5 18 4.5 18L0.75 18C0.335786 18 0 17.6269 0 17.1667C0 15.7564 0.608892 14.6815 1.48723 13.9875C2.34327 13.3112 3.44193 13 4.5 13C5.19138 13 5.90009 13.1329 6.54712 13.4137Z"
                      fill="currentColor"
                    ></path>
                    <path d="M12 5C10.067 5 8.5 6.567 8.5 8.5C8.5 10.433 10.067 12 12 12C13.933 12 15.5 10.433 15.5 8.5C15.5 6.567 13.933 5 12 5Z" fill="currentColor"></path>
                    <path d="M4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7Z" fill="currentColor"></path>
                    <path
                      d="M19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div className="flex flex-col items-center justify-center">
                    Need more capabilities for your business?
                    <div>
                      See
                      <a className="mx-1 underline" href="https://openai.com/chatgpt/enterprise" target="_blank">
                        ChatGPT Enterprise
                      </a>
                    </div>
                  </div>
                </span>
                <span className="justify-self-end text-token-text-primary opacity-50 transition hover:opacity-75 md:absolute md:bottom-4 md:right-4">
                  <div data-testid="country-selector-in-pricing-modal">
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:r4h:"
                      aria-expanded="false"
                      aria-autocomplete="none"
                      dir="ltr"
                      data-state="closed"
                      className="text-token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm dark:transparent dark:bg-transparent leading-none outline-none cursor-pointer hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-state-active:text-token-text-secondary radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent"
                    >
                      <span className="pointer-events-none">Vietnam</span>
                      <span aria-hidden="true">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-sm">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
