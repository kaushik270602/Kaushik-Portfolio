"use client";
import React from "react";
import { motion } from "framer-motion";
import Certification from "./Certification";

type Props = {};

function Certifications({}: Props) {
  const certifications = [
    {
      img: "./aws.png",
      title: "AWS Solutions Architect",
      earned: "Associate Level",
      score: "In Progress",
    },
    {
      img: "./AWSCCP.png",
      title: "AWS Cloud Practitioner",
      earned: "February 2024",
      score: "Certified Cloud Professional",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center py-8 px-6 overflow-hidden"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mt-24 mb-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="font-credits text-sm tracking-[8px] text-gray-500 uppercase"
        >
          Cloud Credentials
        </motion.span>
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto mt-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-500 mt-6 max-w-xl mx-auto"
        >
          Validated expertise in cloud architecture and AWS services,
          demonstrating commitment to professional growth
        </motion.p>
      </motion.div>

      {/* Certifications Grid */}
      <div className="relative z-10 w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center px-4">
          {certifications.map((cert, index) => (
            <Certification
              key={cert.title}
              img={cert.img}
              title={cert.title}
              earned={cert.earned}
              score={cert.score}
              index={index}
            />
          ))}
        </div>
      </div>

    </motion.div>
  );
}

export default Certifications;
