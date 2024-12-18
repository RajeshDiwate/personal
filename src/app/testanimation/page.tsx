"use client";
import { motion } from "framer-motion";
export default function TestPage() {
  return (
    <>
      <div className="h-full flrx items-center justify-center">
        <motion.div
          className="w-96 h-96 bg-red-600 round"
          initial={{ x: -100 }}
          animate={{ x: 400 }}
        ></motion.div>
      </div>
    </>
  );
}
