"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {
  reff: any;
};

function Hero({ reff }: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, This is Kaushik Reddy Mitta"],
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="./photo.jpeg"
        alt=""
      />
      <div className="z-20">
        <h2
          ref={reff}
          className="text-sm uppercase text-gray-300 pb-2 tracking-[15px]"
        >
          Software Developer{" "}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 text-[#ADD8E6]">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className=" px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a]/40 cursor-pointer  hover:text-[#f7ab0a]/40">
              About
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a]/40 cursor-pointer  hover:text-[#f7ab0a]/40">
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a]/40 cursor-pointer  hover:text-[#f7ab0a]/40">
              Projects
            </button>
          </Link>
          <Link href="#certifications">
            <button className="heroButton px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a]/40 cursor-pointer  hover:text-[#f7ab0a]/40">
              Certifications
            </button>
          </Link>
          <Link href="#contact">
            <button className="heroButton px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a]/40 cursor-pointer  hover:text-[#f7ab0a]/40">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
