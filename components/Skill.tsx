"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  img?: string;
  name?: string;
  index?: number;
};

function Skill({ img, name, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
        {/* Card Container */}
        <div className="relative w-full h-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {/* Skill Image */}
          <img
            src={img}
            alt={name || "Skill"}
            className="w-full h-full object-cover p-3"
          />

          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-t-cinema-gold/50 border-l-[20px] border-l-transparent" />
        </div>

        {/* Skill Name Below */}
        {name && (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.05 }}
            viewport={{ once: true }}
            className="block text-gray-600 text-[10px] md:text-xs mt-2 font-credits tracking-wider text-center"
          >
            {name}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}

export default Skill;
