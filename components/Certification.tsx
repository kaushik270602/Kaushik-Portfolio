"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  img?: string;
  title?: string;
  earned?: string;
  score?: string;
  index?: number;
};

function Certification({ img, title, earned, score, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col items-center flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px] snap-center cursor-pointer"
    >
      {/* Award Card */}
      <div className="relative w-full bg-white border border-gray-200 rounded-3xl p-8 overflow-hidden transition-all duration-500 group-hover:border-cinema-gold group-hover:shadow-xl">
        {/* Trophy/Star Decoration */}
        <motion.div
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-cinema-gold to-cinema-amber rounded-full flex items-center justify-center shadow-lg z-10"
        >
          <svg
            className="w-8 h-8 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>

        {/* Certificate Image */}
        <div className="relative mt-6 mb-6 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-cinema-gold/40"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover"
            />
            {/* Shine Effect */}
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          {/* Title */}
          <h3 className="font-cinematic text-2xl md:text-3xl text-black group-hover:text-cinema-gold transition-colors">
            {title}
          </h3>

          {/* Date Earned */}
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-8 bg-cinema-gold" />
            <span className="font-credits text-sm tracking-[3px] text-cinema-gold">
              {earned}
            </span>
            <div className="h-[1px] w-8 bg-cinema-gold" />
          </div>

          {/* Score/Achievement */}
          <div className="bg-gray-100 rounded-xl px-6 py-4 border border-gray-200">
            <p className="font-credits text-lg tracking-wider text-gray-700">
              {score}
            </p>
          </div>
        </div>

        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cinema-gold/30 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cinema-gold/30 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cinema-gold/30 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cinema-gold/30 rounded-br-3xl" />
      </div>

      {/* "CERTIFIED" Badge */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
        viewport={{ once: true }}
        className="absolute -bottom-4 bg-cinema-gold text-black px-6 py-2 rounded-full font-credits text-sm tracking-[3px] shadow-lg"
      >
        CERTIFIED
      </motion.div>
    </motion.article>
  );
}

export default Certification;
