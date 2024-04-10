"use client"
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/16/solid'
import { useForm, SubmitHandler} from 'react-hook-form'

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}
type Props = {}

function ContactMe({}: Props) {
  const {register, handleSubmit} = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData)
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#ADD8E6] text-2xl'>
        Contact
        </h3>

        <div className='flex flex-col space-y-10 pt-28'>
            <h4 className='text-2xl font-semibold text-center'>
                <span className=' text-[#87CEFA] decoration-[#F7AB0A]/50 underline'>Let's Talk</span>
            </h4>

            <div className='space-y-5'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='md:text-2xl'>+14258642184</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='md:text-2xl'>vmitta@uw.edu</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='md:text-2xl'>Bothell, Washington, USA</p>
                </div>
            </div>

            <form 
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>                       
                    <input {...register('name')} placeholder="Name" className='contactInput' type='text' />
                    <input {...register('email')} placeholder="Email" className='contactInput' type='email' />
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />

                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#F7Ab0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>   
    </div>
  )
}

export default ContactMe