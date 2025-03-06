import Image from "next/image";
import EditableDiv from "./EditableDiv";

export function GPTMainContent() {
  return (
    <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
      <div className="draggable sticky top-0 z-10 flex min-h-[60px] items-center justify-center border-transparent bg-token-main-surface-primary pl-0 md:hidden">
        <div className="no-draggable absolute bottom-0 left-0 top-0 ml-3 inline-flex items-center justify-center">
          <button
            type="button"
            className="inline-flex rounded-md hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50"
            data-testid="open-sidebar-button"
          >
            <span className="sr-only">Open sidebar</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-lg mx-2 text-token-text-secondary">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <div className="no-draggable">
          <button
            aria-label="Model switcher"
            type="button"
            id="radix-:r2b:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
            data-testid="model-switcher-dropdown-button"
            className="group flex cursor-pointer items-center gap-1 rounded-lg py-1.5 px-3 text-lg hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary font-semibold text-token-text-secondary overflow-hidden whitespace-nowrap"
            style={{viewTransitionName: "var(--vt-thread-model-switcher)"}}
          >
            <div className="text-token-text-secondary">
              ChatGPT <span className="text-token-text-secondary"></span>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md text-token-text-tertiary">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <div className="no-draggable absolute bottom-0 right-0 top-0 mr-3 inline-flex items-center justify-center">
          <span className="flex" data-state="closed">
            <button
              aria-label="New chat"
              className="h-10 rounded-lg px-2 text-token-text-secondary focus-visible:bg-token-surface-hover focus-visible:outline-0 enabled:hover:bg-token-surface-hover disabled:text-token-text-quaternary"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="icon-xl-heavy">
                <path
                  d="M15.6729 3.91287C16.8918 2.69392 18.8682 2.69392 20.0871 3.91287C21.3061 5.13182 21.3061 7.10813 20.0871 8.32708L14.1499 14.2643C13.3849 15.0293 12.3925 15.5255 11.3215 15.6785L9.14142 15.9899C8.82983 16.0344 8.51546 15.9297 8.29289 15.7071C8.07033 15.4845 7.96554 15.1701 8.01005 14.8586L8.32149 12.6785C8.47449 11.6075 8.97072 10.615 9.7357 9.85006L15.6729 3.91287ZM18.6729 5.32708C18.235 4.88918 17.525 4.88918 17.0871 5.32708L11.1499 11.2643C10.6909 11.7233 10.3932 12.3187 10.3014 12.9613L10.1785 13.8215L11.0386 13.6986C11.6812 13.6068 12.2767 13.3091 12.7357 12.8501L18.6729 6.91287C19.1108 6.47497 19.1108 5.76499 18.6729 5.32708ZM11 3.99929C11.0004 4.55157 10.5531 4.99963 10.0008 5.00007C9.00227 5.00084 8.29769 5.00827 7.74651 5.06064C7.20685 5.11191 6.88488 5.20117 6.63803 5.32695C6.07354 5.61457 5.6146 6.07351 5.32698 6.63799C5.19279 6.90135 5.10062 7.24904 5.05118 7.8542C5.00078 8.47105 5 9.26336 5 10.4V13.6C5 14.7366 5.00078 15.5289 5.05118 16.1457C5.10062 16.7509 5.19279 17.0986 5.32698 17.3619C5.6146 17.9264 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8993 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8993 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9264 18.673 17.3619C18.7988 17.1151 18.8881 16.7931 18.9393 16.2535C18.9917 15.7023 18.9991 14.9977 18.9999 13.9992C19.0003 13.4469 19.4484 12.9995 20.0007 13C20.553 13.0004 21.0003 13.4485 20.9999 14.0007C20.9991 14.9789 20.9932 15.7808 20.9304 16.4426C20.8664 17.116 20.7385 17.7136 20.455 18.2699C19.9757 19.2107 19.2108 19.9756 18.27 20.455C17.6777 20.7568 17.0375 20.8826 16.3086 20.9421C15.6008 21 14.7266 21 13.6428 21H10.3572C9.27339 21 8.39925 21 7.69138 20.9421C6.96253 20.8826 6.32234 20.7568 5.73005 20.455C4.78924 19.9756 4.02433 19.2107 3.54497 18.2699C3.24318 17.6776 3.11737 17.0374 3.05782 16.3086C2.99998 15.6007 2.99999 14.7266 3 13.6428V10.3572C2.99999 9.27337 2.99998 8.39922 3.05782 7.69134C3.11737 6.96249 3.24318 6.3223 3.54497 5.73001C4.02433 4.7892 4.78924 4.0243 5.73005 3.54493C6.28633 3.26149 6.88399 3.13358 7.55735 3.06961C8.21919 3.00673 9.02103 3.00083 9.99922 3.00007C10.5515 2.99964 10.9996 3.447 11 3.99929Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </span>
        </div>
      </div>
      <div className="no-draggable flex w-full items-center justify-center bg-token-main-surface-primary md:hidden"></div>
      <main className="relative h-full w-full flex-1 overflow-auto transition-width">
        <div role="presentation" className="composer-parent flex flex-col focus-visible:outline-0 h-[calc(100%-2rem)]">
          <div className="flex-1 overflow-hidden @container/thread translate-y-[2rem] -mt-[2rem] pb-[1.5rem]">
            <div className="relative h-full">
              <div className="absolute left-0 right-0">
                <div className="draggable no-draggable-children sticky top-0 p-3 mb-1.5 flex items-center justify-between z-10 h-header-height font-semibold bg-token-main-surface-primary max-md:hidden">
                  <div className="absolute start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2"></div>
                  <div className="flex items-center gap-0 overflow-hidden">
                    <button
                      aria-label="Model switcher"
                      type="button"
                      id="radix-:r2d:"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                      data-testid="model-switcher-dropdown-button"
                      className="group flex cursor-pointer items-center gap-1 rounded-lg py-1.5 px-3 text-lg hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary font-semibold text-token-text-secondary overflow-hidden whitespace-nowrap"
                      style={{viewTransitionName: "var(--vt-thread-model-switcher)"}}
                    >
                      <div className="text-token-text-secondary">
                        ChatGPT <span className="text-token-text-secondary"></span>
                      </div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md text-token-text-tertiary">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-2 pr-1 leading-[0]">
                    <button
                      aria-label="Open Profile Menu"
                      data-testid="profile-button"
                      className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary focus-visible:outline-0"
                      type="button"
                      id="radix-:r3:"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                      style={{legacySidebarOffset: "260px"}}
                    >
                      <div className="relative">
                        <div className="flex items-center justify-center overflow-hidden rounded-full">
                          <div className="relative">
                            <div className="relative flex">
                              <Image
                                alt="User"
                                width="32"
                                height="32"
                                className="rounded-sm"
                                referrerPolicy="no-referrer"
                                src="https://lh3.googleusercontent.com/a/AGNmyxb0qC1Xp4IZ704PRUZUr4oU-n-W2oaF6OmVAPL_=s96-c"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex h-full flex-col items-center justify-center text-token-text-primary">
                <div className="h-full w-full @lg/thread:py-[18px]">
                  <div className="m-auto text-base px-3 md:px-4 w-full lg:px-4 xl:px-5 h-full">
                    <div className="mx-auto flex h-full w-full flex-col text-base @lg/thread:justify-center @md/thread:max-w-3xl @lg/thread:max-w-[40rem] @xl/thread:max-w-[48rem] relative">
                      <div className="hidden text-center mb-7 @lg/thread:block">
                        <div className="relative inline-flex justify-center text-center text-2xl font-semibold leading-9">
                          <h1 style={{viewTransitionName: "var(--vt-splash-screen-headline)"}}>What can I help with?</h1>
                        </div>
                      </div>
                      <div
                        className="h-full flex-col text-token-text-primary [display:var(--display-hidden-until-loaded,flex)] mt-[var(--screen-optical-compact-offset-amount)] flex-shrink items-center justify-center overflow-hidden @lg/thread:hidden"
                        style={{opacity: 1, willChange: "auto"}}
                      >
                        <div className="relative inline-flex justify-center text-center text-2xl font-semibold leading-9">
                          <h1 style={{viewTransitionName: "var(--vt-splash-screen-headline)"}}>What can I help with?</h1>
                        </div>
                        <div className="h-[116px]" style={{opacity: 1, willChange: "auto"}}></div>
                      </div>
                      <div className="@lg/thread:absolute @lg/thread:bottom-8 @lg/thread:left-0 @lg/thread:w-full">
                        <div className="mx-auto flex h-full w-full flex-col text-base @lg/thread:justify-center @md/thread:max-w-3xl @lg/thread:max-w-[40rem] @xl/thread:max-w-[48rem] relative @lg/thread:pb-0">
                          <div className="block z-20">
                            <div className="relative h-full w-full">
                              <div className="mb-2 flex flex-col gap-3.5 pt-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-center empty:hidden"></div>
                        <form className="w-full" type="button">
                          <div className="relative z-[1] flex h-full max-w-full flex-1 flex-col">
                            <div className="group relative z-[1] flex w-full items-center" style={{forceHideLabel: "block"}}>
                              <div className="w-full">
                                <div
                                  id="composer-background"
                                  className="flex w-full cursor-text flex-col rounded-3xl border border-token-border-light px-3 py-1 duration-150 ease-in-out contain-inline-size motion-safe:transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] dark:border-none dark:shadow-none shadow-[0_9px_9px_0px_rgba(0,0,0,0.01),_0_2px_5px_0px_rgba(0,0,0,0.06)] has-[:focus]:shadow-[0_2px_12px_0px_rgba(0,0,0,0.04),_0_9px_9px_0px_rgba(0,0,0,0.01),_0_2px_5px_0px_rgba(0,0,0,0.06)] bg-token-main-surface-primary dark:bg-[#303030]"
                                  style={{viewTransitionName: "var(--vt-composer)"}}
                                >
                                  <div className="flex flex-col justify-start" style={{minHeight: "0"}}>
                                    <div className="flex min-h-[44px] items-start pl-1">
                                      <div className="min-w-0 max-w-full flex-1">
                                        <div className="_prosemirror-parent_1r7mb_1 text-token-text-primary max-h-[25dvh] max-h-52 overflow-auto default-browser">
                                          <textarea
                                            className="block h-10 w-full resize-none border-0 bg-transparent px-0 py-2 text-token-text-primary placeholder:text-token-text-tertiary"
                                            autoFocus={false}
                                            placeholder="Ask anything"
                                            data-virtualkeyboard="true"
                                            style={{display: "none"}}
                                          ></textarea>
                                          {/* <script nonce=""> */}
                                            {/* window.__oai_logHTML?window.__oai_logHTML():window.__oai_SSR_HTML=window.__oai_SSR_HTML||Date.now();requestAnimationFrame((function() */}
                                            {/* {window.__oai_logTTI ? window.__oai_logTTI() : (window.__oai_SSR_TTI = window.__oai_SSR_TTI || Date.now())})) */}
                                          {/* </script> */}
                                          {/* <EditableDiv /> */}
                                        </div>
                                      </div>
                                      <div className="w-[32px] pt-1">
                                        <span aria-hidden="true" className="pointer-events-none invisible fixed left-0 top-0 block">
                                          O
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mb-2 mt-1 flex items-center justify-between sm:mt-5">
                                    <div className="flex gap-x-1.5 text-token-text-primary">
                                      <div style={{viewTransitionName: "var(--vt-composer-attach-file-action)"}}>
                                        <div className="relative">
                                          <div className="relative">
                                            <div className="flex flex-col">
                                              <input multiple={true} tabIndex="-1" className="hidden" type="file" style={{display: "none"}} />
                                              <span className="hidden"></span>
                                              <button
                                                type="button"
                                                id="radix-:r16:"
                                                aria-haspopup="menu"
                                                aria-expanded="false"
                                                data-state="closed"
                                                className="text-token-text-primary border border-transparent inline-flex items-center justify-center gap-1 rounded-lg text-sm dark:transparent dark:bg-transparent leading-none outline-none cursor-pointer hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-state-active:text-token-text-secondary radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent m-0 h-0 w-0 border-none bg-transparent p-0"
                                              ></button>
                                              <span className="flex" data-state="closed">
                                                <button
                                                  aria-disabled="false"
                                                  aria-label="Upload files and more"
                                                  className="flex items-center justify-center h-9 rounded-full border border-token-border-light text-token-text-secondary w-9 hover:bg-token-main-surface-secondary dark:hover:bg-gray-700"
                                                >
                                                  <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-label=""
                                                    className="h-[18px] w-[18px]"
                                                  >
                                                    <path
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M12 3C12.5523 3 13 3.44772 13 4L13 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L13 13L13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20L11 13L4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11L11 11L11 4C11 3.44772 11.4477 3 12 3Z"
                                                      fill="currentColor"
                                                    ></path>
                                                  </svg>
                                                </button>
                                              </span>
                                              <div className="w-fit" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r19:" data-state="closed">
                                                <div></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div style={{viewTransitionName: "var(--vt-composer-search-action)"}}>
                                        <div>
                                          <span className="" data-state="closed">
                                            <button
                                              className="flex h-9 min-w-8 items-center justify-center rounded-full border p-2 text-[13px] font-medium radix-state-open:bg-black/10 text-token-text-secondary border-token-border-light focus-visible:outline-black can-hover:hover:bg-token-main-surface-secondary dark:focus-visible:outline-white dark:can-hover:hover:bg-gray-700"
                                              aria-pressed="false"
                                              aria-label="Search"
                                            >
                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]">
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9851 4.00291C11.9933 4.00046 11.9982 4.00006 11.9996 4C12.001 4.00006 12.0067 4.00046 12.0149 4.00291C12.0256 4.00615 12.047 4.01416 12.079 4.03356C12.2092 4.11248 12.4258 4.32444 12.675 4.77696C12.9161 5.21453 13.1479 5.8046 13.3486 6.53263C13.6852 7.75315 13.9156 9.29169 13.981 11H10.019C10.0844 9.29169 10.3148 7.75315 10.6514 6.53263C10.8521 5.8046 11.0839 5.21453 11.325 4.77696C11.5742 4.32444 11.7908 4.11248 11.921 4.03356C11.953 4.01416 11.9744 4.00615 11.9851 4.00291ZM8.01766 11C8.08396 9.13314 8.33431 7.41167 8.72334 6.00094C8.87366 5.45584 9.04762 4.94639 9.24523 4.48694C6.48462 5.49946 4.43722 7.9901 4.06189 11H8.01766ZM4.06189 13H8.01766C8.09487 15.1737 8.42177 17.1555 8.93 18.6802C9.02641 18.9694 9.13134 19.2483 9.24522 19.5131C6.48461 18.5005 4.43722 16.0099 4.06189 13ZM10.019 13H13.981C13.9045 14.9972 13.6027 16.7574 13.1726 18.0477C12.9206 18.8038 12.6425 19.3436 12.3823 19.6737C12.2545 19.8359 12.1506 19.9225 12.0814 19.9649C12.0485 19.9852 12.0264 19.9935 12.0153 19.9969C12.0049 20.0001 11.9999 20 11.9999 20C11.9999 20 11.9948 20 11.9847 19.9969C11.9736 19.9935 11.9515 19.9852 11.9186 19.9649C11.8494 19.9225 11.7455 19.8359 11.6177 19.6737C11.3575 19.3436 11.0794 18.8038 10.8274 18.0477C10.3973 16.7574 10.0955 14.9972 10.019 13ZM15.9823 13C15.9051 15.1737 15.5782 17.1555 15.07 18.6802C14.9736 18.9694 14.8687 19.2483 14.7548 19.5131C17.5154 18.5005 19.5628 16.0099 19.9381 13H15.9823ZM19.9381 11C19.5628 7.99009 17.5154 5.49946 14.7548 4.48694C14.9524 4.94639 15.1263 5.45584 15.2767 6.00094C15.6657 7.41167 15.916 9.13314 15.9823 11H19.9381Z"
                                                  fill="currentColor"
                                                ></path>
                                              </svg>
                                              <div className="whitespace-nowrap pl-1 pr-1 [display:--force-hide-label]">Search</div>
                                            </button>
                                          </span>
                                        </div>
                                      </div>
                                      <div style={{viewTransitionName: "var(--vt-composer-reason-action)"}}>
                                        <div>
                                          <span className="" data-state="closed">
                                            <button
                                              className="flex h-9 min-w-8 items-center justify-center rounded-full border p-2 text-[13px] font-medium radix-state-open:bg-black/10 text-token-text-secondary border-token-border-light focus-visible:outline-black can-hover:hover:bg-token-main-surface-secondary dark:focus-visible:outline-white dark:can-hover:hover:bg-gray-700"
                                              aria-pressed="false"
                                              aria-label="Reason"
                                            >
                                              <div className="[&amp;_svg]:h-full [&amp;_svg]:w-full h-[18px] w-[18px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                                  <path
                                                    fillRule="evenodd"
                                                    fill="currentColor"
                                                    clipRule="evenodd"
                                                    d="m12 3c-3.585 0-6.5 2.9225-6.5 6.5385 0 2.2826 1.162 4.2913 2.9248 5.4615h7.1504c1.7628-1.1702 2.9248-3.1789 2.9248-5.4615 0-3.6159-2.915-6.5385-6.5-6.5385zm2.8653 14h-5.7306v1h5.7306v-1zm-1.1329 3h-3.4648c0.3458 0.5978 0.9921 1 1.7324 1s1.3866-0.4022 1.7324-1zm-5.6064 0c0.44403 1.7252 2.0101 3 3.874 3s3.43-1.2748 3.874-3c0.5483-0.0047 0.9913-0.4506 0.9913-1v-2.4593c2.1969-1.5431 3.6347-4.1045 3.6347-7.0022 0-4.7108-3.8008-8.5385-8.5-8.5385-4.6992 0-8.5 3.8276-8.5 8.5385 0 2.8977 1.4378 5.4591 3.6347 7.0022v2.4593c0 0.5494 0.44301 0.9953 0.99128 1z"
                                                  ></path>
                                                </svg>
                                              </div>
                                              <div className="whitespace-nowrap pl-1 pr-1 [display:--force-hide-label]">Reason</div>
                                            </button>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex gap-x-1.5">
                                      <div className="min-w-9">
                                        <span className="" data-state="closed">
                                          <button
                                            data-testid="composer-speech-button"
                                            aria-label="Start voice mode"
                                            className="relative flex h-9 items-center justify-center rounded-full bg-black text-white transition-colors focus-visible:outline-none focus-visible:outline-black disabled:text-gray-50 disabled:opacity-30 can-hover:hover:opacity-70 dark:bg-white dark:text-black w-9"
                                            style={{viewTransitionName: "var(--vt-composer-speech-button)"}}
                                          >
                                            <div className="flex items-center justify-center">
                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                  d="M9.5 4C8.67157 4 8 4.67157 8 5.5V18.5C8 19.3284 8.67157 20 9.5 20C10.3284 20 11 19.3284 11 18.5V5.5C11 4.67157 10.3284 4 9.5 4Z"
                                                  fill="currentColor"
                                                ></path>
                                                <path
                                                  d="M13 8.5C13 7.67157 13.6716 7 14.5 7C15.3284 7 16 7.67157 16 8.5V15.5C16 16.3284 15.3284 17 14.5 17C13.6716 17 13 16.3284 13 15.5V8.5Z"
                                                  fill="currentColor"
                                                ></path>
                                                <path
                                                  d="M4.5 9C3.67157 9 3 9.67157 3 10.5V13.5C3 14.3284 3.67157 15 4.5 15C5.32843 15 6 14.3284 6 13.5V10.5C6 9.67157 5.32843 9 4.5 9Z"
                                                  fill="currentColor"
                                                ></path>
                                                <path
                                                  d="M19.5 9C18.6716 9 18 9.67157 18 10.5V13.5C18 14.3284 18.6716 15 19.5 15C20.3284 15 21 14.3284 21 13.5V10.5C21 9.67157 20.3284 9 19.5 9Z"
                                                  fill="currentColor"
                                                ></path>
                                              </svg>
                                            </div>
                                          </button>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="w-full translate-y-4 px-2 py-2 text-center text-xs text-token-text-secondary empty:hidden xs:translate-y-8 md:px-[60px] @lg/thread:absolute @lg/thread:bottom-0 @lg/thread:left-0">
                        <div className="min-h-4">
                          <div>ChatGPT can make mistakes. Check important info.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent w-full isolate has-[[data-has-thread-error]]:[box-shadow:var(--sharp-edge-bottom-shadow)] has-[[data-has-thread-error]]:pt-2">
            <div>
              <div className="relative w-full px-2 py-2 text-center text-xs text-token-text-secondary empty:hidden md:px-[60px]"></div>
            </div>
          </div>
        </div>
        <div className="group absolute bottom-2 end-2 z-20 flex flex-col gap-1 md:flex lg:bottom-3 lg:end-3">
          <button
            className="flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary"
            type="button"
            id="radix-:rd:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
            data-testid="undefined-button"
          >
            ?
          </button>
        </div>
      </main>
    </div>
  )
}
