"use client";
import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="relative flex justify-center items-center"
    >
      {/* Subtle outer glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute border border-cinema-gold/5 rounded-full h-[900px] w-[900px] mt-0"
      />

      {/* Main Gold Ring */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="rounded-full border border-cinema-gold/20 h-[600px] w-[600px] absolute mt-0 shadow-[0_0_100px_rgba(212,175,55,0.05)]"
      />

      {/* Pulsing inner ring */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="rounded-full border-2 border-cinema-gold/10 h-[300px] w-[300px] absolute mt-0"
      />

      {/* Dynamic lens flare */}
      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-64 h-64 rounded-full bg-gradient-radial from-cinema-gold/10 to-transparent blur-3xl -z-10"
      />
    </motion.div>
  );
}

export default BackgroundCircles;
