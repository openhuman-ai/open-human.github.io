export function GPTSidebar() {
  return (
    <div className="flex flex-col gap-2 text-token-text-primary text-sm mt-5 first:mt-0 false">
      <div>
        <div className="relative mt-5 first:mt-0 last:mb-5">
          <div className="sticky top-0 z-20 bg-token-sidebar-surface-primary">
            <span className="flex h-9 items-center">
              <h3 className="px-2 text-xs font-semibold text-ellipsis overflow-hidden break-all pt-3 pb-2 text-token-text-primary">Today</h3>
            </span>
          </div>
          <ol>
            <li className="relative" data-testid="history-item-0">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bebc06-85c0-8007-a59b-518d0e4be898"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Koliin native application usage">
                    Koliin native application usage
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-1">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67beb989-9d90-8007-8a58-a77f76f3bef2"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Access Signal SQLite DB">
                    Access Signal SQLite DB
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-2">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bd89ab-0e2c-8007-a649-fda8985d64c8"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="App Store ID Retrieval">
                    App Store ID Retrieval
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-3">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bd8928-6aa4-8007-92a2-b661a3fec39c"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Signal Push Notifications Setup">
                    Signal Push Notifications Setup
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-4">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bc23b3-d984-8007-bec9-921a66ce6425"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Argo Smart Routing Cost">
                    Argo Smart Routing Cost
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-5">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bc5cb0-5488-8007-9da2-adb22061c0a3"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Mutate custom API hostname">
                    Mutate custom API hostname
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-6">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bc2274-57b4-8007-9b98-cc3874844095"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="API Pricing Comparison">
                    API Pricing Comparison
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-7">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bc1a97-c660-8007-b2ab-a9baa438f92f"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="DeepSeek V3 vs R1">
                    DeepSeek V3 vs R1
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-8">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bc14dc-dcd4-8007-a365-f82deeb2460e"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="CNAME Proxy Setup Guide">
                    CNAME Proxy Setup Guide
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-9">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bc14ae-8d6c-8007-8c88-f7ef7400fd8b"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Nginx CNAME Proxy Setup">
                    Nginx CNAME Proxy Setup
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-10">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bb5ecd-bbf4-8007-ac53-dbf22f9d97e4"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="DeepSeek 671B RAM Requirements">
                    DeepSeek 671B RAM Requirements
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-11">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bb5ec7-efa8-8007-8cac-0969f4d80e77"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Deepseek 671b RAM需求">
                    Deepseek 671b RAM需求
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-12">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bb570c-3ed8-8007-bd49-c58d98f5768e"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Cloudflare Functions vs Workers">
                    Cloudflare Functions vs Workers
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-13">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bb4c2b-0f90-8007-85ab-8196e119b962"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="CORS Handling with DataStream">
                    CORS Handling with DataStream
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-14">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bb4514-d00c-8007-be18-d04141c3e6fe"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Renaming Tables and Foreign Keys">
                    Renaming Tables and Foreign Keys
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-15">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bb43a0-6bd0-8007-b54b-63d24eff0265"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="SQL Query Correction">
                    SQL Query Correction
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-16">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bb3ed9-6494-8007-9d6e-fdc2b4a0570c"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Argo Smart Routing Explained">
                    Argo Smart Routing Explained
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-17">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bb3d8a-97f0-8007-882b-30cf56df32d3"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Redirect www to Pages">
                    Redirect www to Pages
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-18">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bb3729-3e20-8007-8d9b-261bba5beb6e"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Cloudflare Worker Date Fix">
                    Cloudflare Worker Date Fix
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-19">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bb254b-566c-8007-80ae-755db584e511"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Retrieval-Augmented Generation Explained">
                    Retrieval-Augmented Generation Explained
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-20">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bb24c4-bad0-8007-853b-d37e66bf799d"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Getting Started with VDB">
                    Getting Started with VDB
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-21">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bb24ab-1a40-8007-bcbc-f7abe76ea8b7"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="Getting Started with VDB">
                    Getting Started with VDB
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-22">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bb1caf-6340-8007-b06f-54e098d14a51"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="How to delete a post">
                    How to delete a post
                  </div>
                </a>
              </div>
            </li>
            <li className="relative" data-testid="history-item-23">
              <div
                draggable="true"
                className="no-draggable group rounded-lg active:opacity-90 bg-[var(--item-background-color)] h-9 text-sm relative screen-arch:bg-transparent"
                style={{ "--item-background-color": "var(--sidebar-surface-primary)" }}
              >
                <a
                  className="flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100"
                  href="/c/67bb1c96-f618-8007-b3a1-cdbfa4fac42b"
                  data-discover="true"
                  style={{ maskImage: "var(--sidebar-mask)" }}
                >
                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto" title="How to unpost Facebook">
                    How to unpost Facebook
                  </div>
                </a>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
