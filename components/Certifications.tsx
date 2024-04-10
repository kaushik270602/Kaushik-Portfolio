'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Certification from './Certification'
type Props = {}

function Certifications({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#ADD8E6] text-2xl'>
          Certifications
        </h3>

        <div className='w-full mt-36 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7Ab0A]/80'>
          <Certification img='./AWSCCP.png' title='AWS Cloud Practitioner' earned='February 2024' score='Secured a score of 806 in the Examination' />
          <Certification img='./verzeo-logo.webp' title='Machine Learning with Python Course' earned='September 2021' score='Earned for successful course completion' />
        </div>
    </motion.div>
  )
}

export default Certifications