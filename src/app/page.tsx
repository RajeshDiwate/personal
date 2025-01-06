"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Category from "./homePageSkills";

export default function Home() {
  const router = useRouter();
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Conatiner */}
        <div className="h-[16vh] mb-7 md:mb-0  lg:h-full lg:w-1/2 relative">
          <Image
            src="/Logo_RD.png"
            alt="RD"
            fill
            className="object-contain lg:opacity-0 sm:opacity-100"
          />
          <Category />
        </div>

        {/* Text Container */}
        <div className="h-1/2 mb-4 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h2 className="text-4xl mb-4 text-black md:text-6xl font-bold">
            Crafting Innovative Digital Experiences Today, Designing the Future
            with Creative Excellence.
          </h2>
          {/* DESC */}
          <p className="md:text-xl text-black">
            Welcome to my digital world, where creativity meets innovations my
            portfolio blends aesthetic precision with coding mastery, showcasing
            a diverse range of projects committed to excellence.
          </p>
          {/* Buttons */}
          <div className="w-full flex gap-4">
            <button
              onClick={() => {
                router.push("/portfolio");
              }}
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white  hover:ring-2 hover:ring-white "
            >
              View My Work
            </button>
            <button
              onClick={() => {
                router.push("/contact");
              }}
              className="p-4 rounded-lg ring-1  ring-black hover:ring-2 hover:ring-white"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
