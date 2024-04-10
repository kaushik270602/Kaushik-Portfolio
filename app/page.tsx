'use client'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";
import { useInView } from "react-intersection-observer";
import { useState, useRef } from "react";
import { motion } from "framer-motion";


export default function Home() {
  const { ref: bannerRef, inView: bannerIsVisible } = useInView();
  const [bannerIsVisibleState, setBannerVisibleState] = useState(false);

  if (!bannerIsVisible) {
    setTimeout(() => setBannerVisibleState(true), 100);
  } else {
    setTimeout(() => setBannerVisibleState(false), 100);
  }

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7Ab0A]/80">
      <Header />

      <section id="hero" className="snap-start">
        <Hero reff={bannerRef} />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="certifications" className="snap-start">
        <Certifications />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
      {bannerIsVisibleState && (
        <Link href="#hero">
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            exit={{ opacity: 0 }}
            className="sticky bottom-0 w-full cursor-pointer"
          >
            <div className="flex items-center justify-center">
              <img
                className="h-10 w-10 rounded-full filter gray-scale hover:grayscale-0 cursor-pointer"
                src="./photo2.jpeg"
                alt=""
              />
            </div>
          </motion.footer>
        </Link>
      )}
    </div>
  );
}