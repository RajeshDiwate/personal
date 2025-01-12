"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavLink } from "./navlink";
import { motion } from "framer-motion";
import { ModeToggle } from "./theme";
import PdfDownloader from "../about/download";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const topVarient = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };
  const centerVarient = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVarient = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  //List animation

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        staggerChilder: 0.2,
        when: "beforeChildern",
      },
    },
  };

  const listitemVaraiants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    // Links
    <>
      <div className="h-full items-center flex justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        <div>
          <Image
            src="/Logo_RD.png"
            alt="RD"
            className="hidden lg:block md:hidden"
            width={100}
            height={100}
          />
        </div>
        <div className="hidden md:flex lg:ml-6 gap-4 w-1/3">
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
            // <Link href={link.url}>{link.title}</Link>
          ))}
        </div>
        {/* logo */}
        <div className="md:hidden  lg:flex w-1/3 xl:justify-center">
          <Link
            href={"/"}
            className="bg-black font-semibold text-white rounded-md p-1  md:ml-20 flex items-center justify-center"
          >
            <span className="text-white mr-1.5 ml-1 ">React</span>
            <span className=" w-16 h-8 rounded bg-white px-1 text-black flex items-center justify-center">
              Next
            </span>
          </Link>
        </div>
        <div className="hidden md:flex md:ml-32 gap-4 w-1/3">
          {/* <Link href={""}>
            <Image src="/facebook.png" alt="git Image" width={30} height={24} />
          </Link> */}
          <Link href={""}>
            <Image
              src="https://github.com/RajeshDiwate?tab=repositories"
              alt="git Image"
              width={24}
              height={24}
            />
          </Link>
          <Link href={""}>
            <Image
              src="/linkedin.com/in/rajesh-diwate-050a20273"
              alt="git Image"
              width={24}
              height={24}
            />
          </Link>
          {/* 
          <Link href={""}>
            <Image
              src="/pinterest.png"
              alt="git Image"
              width={24}
              height={24}
            />
          </Link> */}
        </div>
        <PdfDownloader />
        {/* <ModeToggle /> */}
        {/* Responsive Menu */}
        <div className=" md:hidden">
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVarient}
              animate={open ? "opened" : "closed"}
              className={`w-10 h-1 ${
                open ? "bg-white" : "bg-black"
              } rounded origin-left`}
            ></motion.div>
            <motion.div
              variants={centerVarient}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded"
            ></motion.div>
            <motion.div
              variants={bottomVarient}
              animate={open ? "opened" : "closed"}
              className={`w-10 h-1 ${
                open ? "bg-white" : "bg-black"
              } rounded origin-left`}
            ></motion.div>
          </button>
          {/* Menu List */}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40 "
            >
              {links.map((link) => (
                <>
                  <motion.div variants={listVariants}></motion.div>
                  <Link href={link.url} key={link.title}>
                    {link.title}
                  </Link>
                </>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
