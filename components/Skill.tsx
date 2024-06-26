import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
  img?:string;
  percentage?:string;
};

function Skill({ directionLeft ,img , percentage}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={img}
        className="rounded-full border border-gray-300 object-cover w-16 h-16 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="xl:text-3xl md:text-2xl font-bold text-black opacity-100">
            {percentage}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
