"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      title: "LidLift",
      description:
        " Developed a hands-free waste management solution integrating IoT technology with AWS services, optimizing waste collection routes and addressing hygiene concerns. Utilized HC-SR04 sensors and an ESP32 Thing microcontroller for accurate detection and seamless interaction with the motorized lid mechanism. Implemented AWS IoT Core, DynamoDB, Lambda function, and SNS for efficient data processing, storage, and real-time notifications, demonstrating accuracy and reliability in a controlled environment.",
      imgSrc: "",
    },
    {
      id: 2,
      title: "Cartmaster",
      description:
        " Developed an e-commerce website for a clothing store from scratch, encompassing essential features such as homepage, sign-up/sign-in pages, shop, cart, and checkout, ensuring a seamless user experience throughout. Utilized React and SASS for front-end development, integrating React routing for smooth page transitions, and Firebase for authentication and database management, ensuring secure and efficient handling of user data. Implemented Redux for optimizing performance and scalability, and hosted the website on Firebase for reliable and accessible deployment.",
      imgSrc: "",
    },
    {
      id: 3,
      title: "Amazon clone using HTML5 and CSS3",
      description:
        " Developed a web application mimicking the user interface and basic functionality of the Amazon e-commerce platform using HTML and CSS. Designed and structured the front-end layout to closely resemble the Amazon website, incorporating product listings, search functionality, and navigation elements.Utilized CSS for styling, including customizing fonts, colors, and layout for a polished visual presentation.",
      imgSrc: "",
    },
    {
      id: 4,
      title: "HMM based Trust Evaluation in VANETs",
      description:
        " Developed a Trust worthy model using HMM and block chain to increase accuracy in wireless communication in VANETs using using TCL and NS2 simulator. Results indicated that the HMM-based approach achieved higher accuracy, lower false positive rates and can be effective in mitigating various security threats in VANETs.",
      imgSrc: "",
    },
    {
      id: 5,
      title: "Digit Classification",
      description:
        " Applied Random Forest Classifier Algorithm on the dataset consisting of 0-9 digits converted from image to input features, and every row represents a specific digit image along with labels for every row. The project is divided into several parts, including importing the dataset and cleaning the data, splitting the data for training and testing purposes, and using the Random Forest Classification model to predict the image values. Achieved an accuracy score of 96. ",
      imgSrc: "",
    },
    {
      id: 6,
      title: "Wine Quality",
      description:
         " Applied linear regression to check quality of wine sample based on its physicochemical and sensory variables from the dataset related to red variant of the Portuguese ”Vindo Verde” wine. Used Numpy, Pandas, Matlplotlib.pyplot, Sklearn.metrics, Seaborn and Math libraries. The project is divided into several parts, including data insertion and cleaning, data exploring and selecting the features to be used, regression model, and accuracy improvement. Obtained an accuracy score of 95. ",
      imgSrc: "",
      },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#ADD8E6] text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7Ab0A]/80">
        {projects.map((project, i) => (
          <div
            key={project?.id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project?.imgSrc}
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 pt-10 md:pt-[8rem] max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                <span className="text-[#87CEFA]">{project?.title}</span>
              </h4>

              <p className="text-lg text-center md:text-left">
                {project?.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
