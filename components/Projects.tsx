"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      title: "Fantasy King",
      description:
        "Built a full IPL fantasy platform with homepage, schedule, teams, leaderboard, and authentication, serving 50+ users in beta and achieving 75% active participation weekly. Designed and implemented a React-based interface for creating and managing fantasy teams, integrating live match schedules, team profiles, and a dynamic leaderboard. Built Node.js APIs with MongoDB for real-time data handling and deployed on AWS to ensure scalable, low-latency performance during peak match hours.",
      imgSrc: "",
    },
    {
      id: 2,
      title: "ISS Keyboard Warriors",
      description:
        "Engineered a speed typing application for UWB Hacks 2025, boosting participation by 40% over prior events. Implemented secure authentication via Clerk and real-time metrics tracking with Supabase, enabling live leaderboards. Deployed on AWS Amplify, achieving 30+ users completing 90+ tests in 24 hours, demonstrating fast adoption and system reliability.",
      imgSrc: "",
    },
    {
      id: 3,
      title: "LidLift",
      description:
        "Developed a hands-free IoT waste management system, reducing manual collection errors by 50% in testing. Integrated ESP32 Thing and HC-SR04 sensors with AWS IoT Core, DynamoDB, Lambda, and SNS for real-time notifications and high reliability (95%). Optimized collection routes and automated lid operations, demonstrating potential operational cost savings for smart facilities.",
      imgSrc: "",
    },
    {
      id: 4,
      title: "Cartmaster",
      description:
        " Developed an e-commerce website for a clothing store from scratch, encompassing essential features such as homepage, sign-up/sign-in pages, shop, cart, and checkout, ensuring a seamless user experience throughout. Utilized React and SASS for front-end development, integrating React routing for smooth page transitions, and Firebase for authentication and database management, ensuring secure and efficient handling of user data. Implemented Redux for optimizing performance and scalability, and hosted the website on Firebase for reliable and accessible deployment.",
      imgSrc: "",
    },
    {
      id: 5,
      title: "Amazon clone using HTML5 and CSS3",
      description:
        " Developed a web application mimicking the user interface and basic functionality of the Amazon e-commerce platform using HTML and CSS. Designed and structured the front-end layout to closely resemble the Amazon website, incorporating product listings, search functionality, and navigation elements.Utilized CSS for styling, including customizing fonts, colors, and layout for a polished visual presentation.",
      imgSrc: "",
    },
    {
      id: 6,
      title: "HMM based Trust Evaluation in VANETs",
      description:
        " Developed a Trust worthy model using HMM and block chain to increase accuracy in wireless communication in VANETs using using TCL and NS2 simulator. Results indicated that the HMM-based approach achieved higher accuracy, lower false positive rates and can be effective in mitigating various security threats in VANETs.",
      imgSrc: "",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#ADD8E6] text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7Ab0A]/80">
        {projects.map((project, i) => (
          <div
            key={project?.id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project?.imgSrc}
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 pt-10 md:pt-[8rem] max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <p className="text-lg text-center md:text-left">
                {project?.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
