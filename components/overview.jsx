import { motion } from "framer-motion"
import Link from "next/link"

import { MessageIcon, VercelIcon } from "./icons"
import Image from "next/image"

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-2 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          {/* <VercelIcon size={32} /> */}
          <Image width={100} height={100} alt="logo" src={"/logo.svg"} />
          {/* <span>+</span> */}
          {/* <MessageIcon size={32} /> */}
        </p>
        <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-2  pb-1 text-3xl contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400">
          Welcome, Can I help you today?
        </h3>
        <p className="text-sm">MillionScope can make mistakes. Check important info.</p>
        {/* <p>
          You can learn more about the AI SDK by visiting the{" "}
          <Link className="font-bold underline underline-offset-4" href="https://sdk.vercel.ai/docs" target="_blank">
            docs
          </Link>
          .
        </p> */}
      </div>
    </motion.div>
  )
}
