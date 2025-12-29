"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { img: "./python.jpeg", name: "Python" },
        { img: "./Java-Logo.png", name: "Java" },
        { img: "./JS-Logo.jpg", name: "JavaScript" },
        { img: "./SQL.jpeg", name: "SQL" },
      ],
    },
    {
      title: "Web & Frameworks",
      skills: [
        { img: "./React-Logo.jpeg", name: "React" },
        { img: "./Nextjs-Logo.png", name: "Next.js" },
        { img: "./Node-Logo.png", name: "Node.js" },
        { img: "./JSON.png", name: "REST APIs" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { img: "./mysql-logo.svg", name: "MySQL" },
        { img: "./mongodb.png", name: "MongoDB" },
        { img: "./firebase.png", name: "Firebase" },
        { img: "./aws.png", name: "DynamoDB" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { img: "./aws.png", name: "AWS" },
        { img: "./azure.png", name: "Azure" },
        { img: "./git.jpeg", name: "Git" },
        { img: "./github.png", name: "GitHub" },
      ],
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
          Technical Expertise
        </motion.span>
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto mt-6"
        />
      </motion.div>

      {/* Skills Grid */}
      <div className="relative z-10 max-w-6xl w-full space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Category Title */}
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="h-[1px] flex-1 bg-gradient-to-r from-cinema-gold to-transparent"
              />
              <h3 className="font-credits text-lg tracking-[4px] text-cinema-gold">
                {category.title}
              </h3>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="h-[1px] flex-1 bg-gradient-to-l from-cinema-gold to-transparent"
              />
            </div>

            {/* Skills Row */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {category.skills.map((skill, skillIndex) => (
                <Skill
                  key={skill.name}
                  img={skill.img}
                  name={skill.name}
                  index={categoryIndex * 4 + skillIndex}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}

export default Skills;
