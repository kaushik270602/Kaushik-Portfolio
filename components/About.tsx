"use client";
import React from "react";
import { motion } from "framer-motion";

function About() {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Built", value: "10+" },
    { label: "Technologies", value: "25+" },
    { label: "Certifications", value: "2" },
  ];

  const education = [
    {
      degree: "Master of Science",
      field: "Computer Science & Software Engineering",
      school: "University of Washington",
      location: "Bothell, WA",
      period: "Sep. 2023 - Aug. 2025",
    },
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science & Engineering",
      school: "Chaitanya Bharathi Institute of Technology",
      location: "Hyderabad, India",
      period: "Aug. 2019 - May 2023",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center pb-12 px-6 overflow-hidden"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-4"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="font-credits text-sm tracking-[8px] text-gray-500 uppercase"
        >
          Chapter One
        </motion.span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto mt-3"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Decorative Frame */}
          <div className="relative">
            {/* Gold Corner Accents */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-cinema-gold" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-cinema-gold" />
            
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-lg shadow-2xl"
            >
              <img
                src="./photo1.jpeg"
                alt="Kaushik Mitta"
                className="w-72 h-72 md:w-96 md:h-96 object-cover"
              />
              
              {/* Shine Effect */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
            </motion.div>

          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {/* Intro */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              I&apos;m <span className="text-cinema-gold font-semibold">Venkata Kaushik Mitta</span>, 
              a Software Developer currently working at <span className="text-cinema-gold">Secure AIs</span>, 
              where I architect enterprise-grade AI security solutions. Recently graduated with a Master&apos;s in 
              Computer Science and Software Engineering from the University of Washington Bothell, I specialize 
              in building secure, scalable applications with a focus on ML/AI, cloud architecture, and full-stack development.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h4 className="font-credits text-sm tracking-[4px] text-cinema-gold uppercase">Education</h4>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <h5 className="text-black font-semibold">{edu.degree}</h5>
                    <p className="text-gray-500 text-sm">{edu.field}</p>
                    <p className="text-cinema-gold text-sm">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-xs">{edu.location}</p>
                    <p className="text-gray-500 text-xs font-credits tracking-wider">{edu.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

    </motion.div>
  );
}

export default About;
