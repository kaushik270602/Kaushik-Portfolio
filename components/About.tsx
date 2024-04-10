"use client";
import React from "react";
import { motion } from "framer-motion";


function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#ADD8E6] text-2xl">
        About
      </h3>
      <div className="pt-[10rem] md:pt-0 md:hidden">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="./photo1.jpeg"
          className="-mb-[20rem] md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px} xl:h-[400px]"
        />
      </div>

      <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="./photo1.jpeg"
          className="-mb-[20rem] md:mb-0 hidden md:inline flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px} xl:h-[400px]"
        />
      <div className="space-y-10 px-0 md:px-10 pt-[10rem] md:pt-[18rem] lg:pt-0  ">
        <h4 className="xl:text-4xl md:text-2xl font-semibold">
          <span className="underline decoration-[#F7AB0A]/50">
            {" "}
            Get to Know Me
          </span>
        </h4>
        <p className="md:text-md">
          Welcome to my portfolio website. This is Kaushik, an enthusiastic software
          developer currently pursuing a Masters in Computer Science and
          Software Engineering at the University of Washington Bothell. As a
          recent graduate with a Bachelor&apos;s in Computer Science and Engineering
          in 2023, I bring a fresh perspective and a solid foundation in
          computer science principles. My expertise lies in a diverse range of
          programming languages and technologies including Java, Python,
          JavaScript, Data Structures and Algorithms (DSA), Object-Oriented
          Programming (OOPs) concepts, React, Next.js, SQL, and AWS. Throughout
          my academic journey and professional experiences, I have honed my skills
          in software development, problem-solving, and project management. I am
          passionate about leveraging technology to create innovative solutions
          that address real-world challenges. With a strong educational
          background, a passion for software development, and a commitment to
          continuous learning, I am eager to embark on new challenges and
          contribute to the ever-evolving field of technology. Thank you for
          visiting my portfolio, and I look forward to connecting with you
          further.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
