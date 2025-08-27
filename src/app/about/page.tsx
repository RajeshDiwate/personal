"use client";
import { motion, useInView, useScroll } from "framer-motion";
import Brain from "../component/brain";
import { useRef } from "react";
import PdfDownloader from "./download";
export default function AboutPage() {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef as any });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef as any, { margin: "100px" });
  const experineceRef = useRef();
  const isexperince = useInView(experineceRef as any);
  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        {/* Conatainer */}
        <div
          className="h-full overflow-scroll lg:flex"
          ref={containerRef as any}
        >
          {/* Text Container */}
          <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
            {/* BIOGRAPHY Container */}
            <div className="flex flex-col gap-12 justify-center">
              {/* BIOGRAPHY title */}
              <h1 className="font-bold text-2xl">Biography </h1>
              {/* BIOGRAPHY DESC */}
              <p className="text-lg italic">
                As a Web Developer with over three years of experience, I
                deliver high-quality web solutions throughout the development
                lifecycle. I transform complex requirements into user-friendly
                digital experiences, excelling in responsive design, performance
                optimization, and cross-browser compatibility. Skilled in both
                front-end and back-end development, I use diverse technologies
                and frameworks to create robust applications.
              </p>
              <p className="text-lg italic">
                I focus on clear communication and teamwork, aligning with
                client goals while adapting to evolving project needs. Driven by
                problem-solving and continuous learning, I stay current with
                industry trends to provide innovative and effective web
                solutions
              </p>
              {/* BIOGRAPHY QUOTE*/}
              {/* <span className="italic">
                Let `&apos` s connect, collaborate, and learn together to make
                history
              </span> */}
              {/* BIOGRAPHY  sign*/}
              <div className="self-end">
                <h2>R.B.Diwate</h2>
              </div>
              {/* BIOGRAPHY scroll svg */}
            </div>
            {/* SKills */}
            <div
              className="flex flex-col gap-12 justify-center"
              ref={skillRef as any}
            >
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl"
              >
                Skills
              </motion.h1>
              {/* SKILL LIST */}
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                className="flex gap-4 flex-wrap"
              >
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  HTML
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  CSS
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  SASS
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Bootastrap
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JavaSCript
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  TypeScript
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  ReactJs
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Nextjs
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Nodejs
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  MongoDB
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  MySQL
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  ShadcnUI
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  TailwindUI
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  MUI
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Performance Optimization
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  State Management
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  GitHub
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Responsive Design
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Performance analysis
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Team collaboration
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Formik
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Yup
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Axios
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  API integration
                </div>
              </motion.div>
              {/* SKILL SCROlling */}
            </div>
            {/* experineced container */}
            <div
              ref={experineceRef as any}
              className="flex flex-col gap-12 justify-center pb-48"
            >
              {/* experineced title */}
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isexperince ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl"
              >
                Experience
              </motion.h1>
              {/* Experienance List */}
              <motion.div
                initial={{ x: "-300px" }}
                animate={isexperince ? { x: 0 } : {}}
              >
                <div className="space-y-4 mb-6">
                  <p className="text-xl font-medium">Juno Software Systems</p>
                  Jul2023 - Present
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="tracking-wider italic text-lg leading-relaxed">
                      Built and maintained web applications using React.js and
                      Next.js, ensuring timely delivery and seamless feature
                      integration.
                    </li>
                    <li className="tracking-wider italic text-lg leading-relaxed">
                      Created responsive, user-friendly interfaces with
                      React.js, Redux, and optimized database performance.
                    </li>
                    <li className="tracking-wider italic text-lg leading-relaxed">
                      Conducted code reviews to ensure adherence to quality
                      standards and collaborated with clients to gather
                      requirements and address their needs effectively.
                    </li>
                    <li className="tracking-wider italic text-lg leading-relaxed">
                      Designed and implemented scalable solutions to improve
                      application functionality and user experience.
                    </li>
                    <li className="tracking-wider italic text-lg leading-relaxed">
                      Ensure code quality and adherence to coding standards
                      through thorough code reviews and testing.
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <p className="text-xl font-medium">Primal Infosys</p>
                  Mar2022 - Jun2023
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="tracking-wider italic text-lg leading-relaxed">
                      Gather and analyze requirements from team leads and
                      stakeholders to develop responsive user interfaces using
                      HTML, CSS, Bootstrap, and React.js.
                    </li>

                    <li className="tracking-wider italic text-lg leading-relaxed">
                      Design and implement features for event management and
                      hotel booking applications using React.js, Redux, Material
                      Design, Express.js, and Node.js.
                    </li>
                    <li className="tracking-wider italic text-lg leading-relaxed">
                      Write clean, efficient, and cross-browser-compatible code
                      while fixing bugs and enhancing application functionality
                      and performance.
                    </li>
                    <li className="tracking-wider italic text-lg leading-relaxed">
                      Collaborate with cross-functional teams, maintain code
                      integration using Git, and ensure adherence to coding
                      standards through reviews and testing.
                    </li>

                    <li className="tracking-wider italic text-lg leading-relaxed">
                      Stay updated with the latest technologies and industry
                      trends to improve development processes and practices.
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
          {/* svg Conatiner */}
          <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0 xl:1/2">
            <Brain scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </motion.div>
    </>
  );
}

{
  /* <div className=" flex justify-between h-48"> */
}
{
  /* LEFT */
}
{
  /* <div className="w-1/3 "> */
}
{
  /* JOB TITLE */
}
// <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
// Senior Javascript Engineer
// </div>
{
  /* JOB DEC */
}
// <div className="p-3 text-sm italic">
//   My current employment, Way better than the position
//   before!
// </div>
// {/* JOB DATE */}
// <div className="p-3 text-red-400 text-sm font-semibold">
//   2024-Present
// </div>
{
  /* JOB Compay */
}
//   <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
//     My World
//   </div>
// </div>
// {/* CENTER */}
// <div className="w-1/6">
//   {/* LINE */}
//   <div className="w-1 h-full bg-gray-600 rounded relative">
//     {/* LINE CIRCLE */}
//     <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//   </div>
// </div>
// {/* RIGHT */}
// <div className="w-1/3"></div>
// </div>
