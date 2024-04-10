'use client'
import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    img?:string;
    title?:string;
    earned?:string;
    score?:string;
}

function Certification({img, title, earned, score}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y:-100,
                opacity: 0
            }}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y:0 }}
            viewport={{once: true}}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src={img}
            alt=''
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>{title}</h4>
        </div>

        <p className='py-1 text-2xl text-[#F7AB0A]'>{earned}</p>

        <p className='uppercase py-5 text-3xl text-gray-300'>{score}</p>


    </article>
  )
}

export default Certification