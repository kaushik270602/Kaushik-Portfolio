"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Fantasy King",
      tagline: "Where Cricket Meets Fantasy",
      genre: "Full Stack • Sports Tech",
      year: "March 2025",
      description:
        "Built a full IPL fantasy platform with homepage, schedule, teams, leaderboard, and authentication, serving 50+ users in beta and achieving 75% active participation weekly.",
      details:
        "Designed and implemented a React-based interface for creating and managing fantasy teams, integrating live match schedules, team profiles, and a dynamic leaderboard. Built Node.js APIs with MongoDB for real-time data handling and deployed on AWS to ensure scalable, low-latency performance during peak match hours.",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
      color: "#e63946",
      link: "https://github.com/kaushik270602/Fantasy-King",
    },
    {
      id: 2,
      title: "ISS Keyboard Warriors",
      tagline: "Type at the Speed of Light",
      genre: "Hackathon • Competition",
      year: "January 2025",
      description:
        "Engineered a speed typing application for UWB Hacks 2025, boosting participation by 40% over prior events.",
      details:
        "Implemented secure authentication via Clerk and real-time metrics tracking with Supabase, enabling live leaderboards. Deployed on AWS Amplify, achieving 30+ users completing 90+ tests in 24 hours, demonstrating fast adoption and system reliability.",
      tech: ["React", "Vite", "Clerk", "Supabase", "AWS Amplify"],
      color: "#2a9d8f",
      link: "https://github.com/kaushik270602/ISS-Keyboard-Warriors",
    },
    {
      id: 3,
      title: "LidLift",
      tagline: "Smart Waste, Cleaner Future",
      genre: "IoT • Smart City",
      year: "June 2024",
      description:
        "Developed a hands-free IoT waste management system, reducing manual collection errors by 50% in testing.",
      details:
        "Integrated ESP32 Thing and HC-SR04 sensors with AWS IoT Core, DynamoDB, Lambda, and SNS for real-time notifications and high reliability (95%). Optimized collection routes and automated lid operations, demonstrating potential operational cost savings for smart facilities.",
      tech: ["ESP32", "AWS IoT Core", "DynamoDB", "Lambda", "SNS"],
      color: "#e9c46a",
      link: "https://medium.com/@kaushik270602/lidlift-smart-waste-management-system-using-iot-and-aws-96103d9fa8b8",
    },
    {
      id: 4,
      title: "HMM Trust Evaluation",
      tagline: "Secure Roads Ahead",
      genre: "Research • Security",
      year: "2023",
      description:
        "Developed a trustworthy model using HMM and blockchain for VANETs security.",
      details:
        "Results indicated that the HMM-based approach achieved higher accuracy, lower false positive rates and can be effective in mitigating various security threats in VANETs using TCL and NS2 simulator.",
      tech: ["HMM", "Blockchain", "TCL", "NS2"],
      color: "#264653",
      link: "#",
    },
    {
      id: 5,
      title: "Cartmaster",
      tagline: "Shop Till You Drop",
      genre: "E-Commerce • Retail",
      year: "2023",
      description:
        "Developed an e-commerce website for a clothing store from scratch with a seamless user experience.",
      details:
        "Utilized React and SASS for front-end development, integrating React routing for smooth page transitions, and Firebase for authentication and database management. Implemented Redux for optimizing performance and scalability.",
      tech: ["React", "Redux", "Firebase", "SASS"],
      color: "#f4a261",
    },
    
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative py-8 px-6 overflow-hidden"
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
          Featured Work
        </motion.span>
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto mt-6"
        />
      </motion.div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            onClick={() => setSelectedProject(project.id)}
            className="group cursor-pointer"
          >
            <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-cinema-gold group-hover:shadow-xl h-full">
              {/* Project Number Badge */}
              <div
                className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center font-credits text-2xl z-10 text-white"
                style={{ backgroundColor: project.color }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="p-8 pt-16">
                {/* Genre Tag */}
                <span className="font-credits text-xs tracking-[3px] text-gray-500 uppercase">
                  {project.genre}
                </span>

                {/* Title */}
                <h3 className="font-cinematic text-2xl md:text-3xl text-black mt-2 mb-2 group-hover:text-cinema-gold transition-colors">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-gray-600 italic text-lg mb-4">
                  &ldquo;{project.tagline}&rdquo;
                </p>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-credits tracking-wider text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Year & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="font-credits text-gray-400 tracking-wider">
                    {project.year}
                  </span>
                  <motion.span
                    className="flex items-center gap-2 text-cinema-gold font-credits text-sm tracking-wider group-hover:gap-4 transition-all"
                  >
                    VIEW DETAILS
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.span>
                </div>
              </div>

              {/* Hover Gradient Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${project.color}40 0%, transparent 100%)`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal - Fixed above letterbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="bg-black/80 backdrop-blur-md"
            style={{ 
              position: 'fixed', 
              top: 0,
              left: 0, 
              right: 0, 
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              zIndex: 400
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-8 overflow-y-auto"
              style={{ 
                maxWidth: '640px',
                width: '100%',
                maxHeight: 'calc(100vh - 80px)',
                position: 'relative'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-cinema-gold hover:text-black transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;
                return (
                  <>
                    {/* Genre */}
                    <span className="font-credits text-xs tracking-[3px] text-gray-500 uppercase">
                      {project.genre}
                    </span>

                    {/* Title */}
                    <h3 className="font-cinematic text-3xl md:text-4xl text-black mt-2 mb-3">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-cinema-gold italic text-lg mb-4">
                      &ldquo;{project.tagline}&rdquo;
                    </p>

                    {/* Full Description */}
                    <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                      {project.description}
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-5 text-sm">
                      {project.details}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full font-credits tracking-wider text-gray-700 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Year & Link */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <span className="font-credits text-gray-500 text-xs">
                          COMPLETED
                        </span>
                        <span className="font-credits text-xl text-cinema-gold ml-2">
                          {project.year}
                        </span>
                      </div>
                      {project.link && project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-1.5 bg-cinema-gold text-black font-credits tracking-wider text-sm rounded-lg hover:shadow-lg transition-all"
                        >
                          VIEW PROJECT
                        </a>
                      )}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Projects;
