"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  reff: any;
};

function Hero({ reff }: Props) {
  const [showContent, setShowContent] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Software Developer",
    "ML/AI Engineer",
    "Full Stack Developer",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const firstName = "KAUSHIK".split("");
  const lastName = "MITTA".split("");

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative z-20 flex flex-col items-center text-center px-6 max-w-7xl mx-auto"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 md:mt-24 mb-3 md:mb-5"
            >
              <span className="font-credits text-[10px] md:text-xs tracking-[4px] md:tracking-[6px] text-gray-500 uppercase">
                Written and Directed by
              </span>
            </motion.div>

            {/* Main Name - Cinematic Scaling */}
            <div className="flex flex-col gap-0 md:gap-1 mb-3 md:mb-5">
              <motion.h1 
                className="font-cinematic text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black leading-[0.85] tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex justify-center flex-wrap">
                  {firstName.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 1,
                        delay: 1 + index * 0.08,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                      className="text-black inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
                <div className="flex justify-center flex-wrap">
                  {lastName.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 1,
                        delay: 1.6 + index * 0.08,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                      className="inline-block"
                      style={{ color: "#d4af37", textShadow: "0 0 40px rgba(212,175,55,0.4)" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </motion.h1>
            </div>

            {/* Dynamic Role - Credit Style */}
            <motion.div
              ref={reff}
              className="flex flex-col items-center justify-center"
            >
              <span className="font-credits text-[10px] md:text-xs tracking-[3px] md:tracking-[5px] text-gray-500 uppercase mb-1 md:mb-2">Lead Role</span>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-credits text-sm sm:text-lg md:text-3xl text-gray-700 uppercase tracking-[4px] sm:tracking-[6px] md:tracking-[10px]"
                >
                  {roles[currentRole]}
                </motion.h2>
              </AnimatePresence>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Hero;
