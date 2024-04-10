"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "@/typings";

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/venkata-sai-kaushik-reddy-mitta-ba0a9121a"
          fgColor="#0A66C2"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/kaushik270602"
          fgColor="#fafafa"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/Kaushik2706"
          fgColor="#1DA1F2"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon 
          network="email" 
          fgColor="#d44638" 
          bgColor="transparent"
          href="#contact"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-[40E0D0]">
            <a href="#contact">Get In Touch</a>
          </p>
      </motion.div>
    </header>
  );
}
