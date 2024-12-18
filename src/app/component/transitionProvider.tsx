"use client";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
export default function TransistionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="w-screen h-screen bg-gradient-to-b from-red-300 to-purple-400"
        // className="w-screen h-screen bg-gradient-to-b from-purple-400 to-red-400"
        // className="w-screen h-screen bg-gradient-to-b from-orange-300 to-pink-500"

        // className="w-screen h-screen"
      >
        <motion.div
          className="h-screen w-screen fixed bg-green rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathname.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
}
