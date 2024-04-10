'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex relative flex-col mt-[10rem] md:mt-[8rem] text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#ADD8E6] text-2xl'>
            Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-[#F7AB0A] text-sm'>
            Hower over a skill for current proficiency
        </h3>
        
        <div className='grid grid-cols-4 gap-5 xl:pt-40 md:pt-20 mb:pt-48'>
            <Skill img="./Java-Logo.png" percentage='80%' />
            <Skill img='./python.jpeg' percentage='90%' />
            <Skill img='./DSA-Logo.png' percentage='80%' />
            <Skill img='./HTML-Logo.png' percentage='90%' />
            <Skill img='./CSS-Logo.png' percentage='85%' />
            <Skill img='./JS-Logo.jpg' percentage='80%' />
            <Skill img='./React-Logo.jpeg' percentage='70%' />
            <Skill img='./Nextjs-Logo.png' percentage='50%' />
            <Skill img='./JSON.png' percentage='70%' />
            <Skill img='./SQL.jpeg' percentage='90%' />
            <Skill img='./mysql-logo.svg' percentage='80%' />
            <Skill img='./firebase.png' percentage='70%' />
            <Skill img='./git.jpeg' percentage='90%' />
            <Skill img='./github.png' percentage='90%' />
            <Skill img='./aws.png' percentage='90%' />
            <Skill img='./azure.png' percentage='80%' />
        </div>
        
    </motion.div>
  )
}

export default Skills