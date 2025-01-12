"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Zoom Clone",
    desc: "Built an enterprise-ready video conferencing app using Next.js 14, Stream, and Tailwind CSS, featuring real-time communication and a scalable, intuitive design. Integrated Stream's API for video and chat with responsive UI components styled using Tailwind CSS. Delivered the project swiftly, highlighting proficiency in cutting-edge web development tools.",
    img: "/Webimages/zoomweb.jpeg",
    link: "https://zoom-project-rajeshdiwate-projects.vercel.app/sign-in?redirect_url=https%3A%2F%2Fzoom-project-rajeshdiwate-projects.vercel.app%2F/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Trip Rowers",
    desc: "Developed a travel website, TripRowers, using React.js, inspired by the spirit of adventure and exploration. The platform features interactive destination guides, seamless booking experiences, and a user-friendly interface, fostering deeper connections and discovery. Focused on responsive design and smooth navigation to ensure an engaging experience for travelers.",
    img: "/Webimages/image.png",
    link: "https://www.triprowers.com",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Brand Markety",
    desc: "Developed a responsive website for Brand Markety, a digital marketing agency, using React.js. The site highlights the agency's expertise with engaging layouts, smooth navigation, and fast loading speeds, ensuring a professional and user-friendly experience across devices.",
    img: "/Webimages/website7.png",
    link: "https://brandmarkety.com",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Portfolio",
    desc: "Welcome to my portfolio! Built with React.js, this site highlights my expertise in creating scalable, high-performance web applications. Explore my projects, skills, and experience through a clean, responsive, and user-friendly interface. Thanks for visiting",
    img: "/Webimages/Portfolio.png",
    link: "https://portfoliord.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref as any });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref as any}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-gray-700">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-6xlxl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[350px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 text-gray-800 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                    <Link
                      target="_blank"
                      href={item.link}
                      className="flex justify-end  text-gray-950 mr-10"
                    >
                      See Live
                    </Link>
                    {/* <button
                      onClick={() => item.link}
                      className="text-sm md:p-4 md:text-md lg:p-1 lg:text-md bg-white text-gray-600 font-semibold m-4 rounded"
                    >
                      See Demo
                    </button> */}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
