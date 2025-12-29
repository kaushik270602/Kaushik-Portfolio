"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Experience({}: Props) {
  const experiences = [
    {
      id: 1,
      role: "Software Developer Intern",
      company: "Secure AIs",
      location: "Remote",
      period: "Aug. 2025 - Present",
      current: true,
      highlights: [
        "Architected 3-tier PII detection pipeline (regex + spaCy NER + HuggingFace BERT) achieving 95%+ accuracy across 12+ sensitive data categories with intelligent overlap resolution.",
        "Built enterprise secure chat sanitizing 100% of user input before OpenAI transmission, supporting 4 document formats (PDF, DOCX, TXT, XLSX) and reducing data exposure risk by 99%.",
        "Implemented end-to-end audit logging capturing 100% of processing events with user identity, IP tracking, and entity summaries enabling SOC 2 compliance and 80% faster incident investigation.",
      ],
      tech: ["Python", "spaCy", "HuggingFace", "BERT", "OpenAI", "NLP"],
    },
    {
      id: 2,
      role: "Slate CRM Student Assistant",
      company: "University of Washington",
      location: "Bothell, WA",
      period: "Jun. 2024 - Jun. 2025",
      current: false,
      highlights: [
        "Managed and updated 800+ student records weekly using Slate CRM's in-built application tools, ensuring high accuracy and data integrity.",
        "Designed and customized reports, forms, and portals within Slate using HTML, CSS, JavaScript, and SQL, improving accessibility and reducing manual workload by 30%.",
        "Automated routine data queries and updates through SQL scripting, accelerating report generation from 2 hours to 20 minutes.",
      ],
      tech: ["HTML", "CSS", "JavaScript", "SQL", "Slate CRM"],
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
        className="relative z-10 text-center mb-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="font-credits text-sm tracking-[8px] text-gray-500 uppercase"
        >
          The Journey
        </motion.span>
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto mt-6"
        />
      </motion.div>

      {/* Experience Cards - Side by Side */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative h-full"
          >
            {/* Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 overflow-hidden group hover:border-cinema-gold/40 hover:shadow-xl transition-all duration-500 h-full flex flex-col"
            >
              {/* Current Badge */}
              {exp.current && (
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-4 right-4 px-3 py-1 bg-green-100 border border-green-400 rounded-full"
                >
                  <span className="text-green-600 font-credits text-xs tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    CURRENT
                  </span>
                </motion.div>
              )}

              {/* Header */}
              <div className="mb-4">
                <h3 className="font-cinematic text-2xl md:text-3xl text-black group-hover:text-cinema-gold transition-colors">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="font-credits text-cinema-gold tracking-wider">
                    {exp.company}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">
                    {exp.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-credits text-sm tracking-wider text-gray-500">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-3 mb-4 flex-grow">
                {exp.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3 text-gray-600 text-sm leading-relaxed"
                  >
                    <span className="text-cinema-gold mt-1.5">▸</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 mt-auto">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-credits tracking-wider text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}

export default Experience;
