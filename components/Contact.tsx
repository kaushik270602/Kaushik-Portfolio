"use client"
import React, { useState } from 'react'
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
  const {register, handleSubmit, reset} = useForm<Inputs>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        reset() // Clear the form
      } else {
        const errorData = await response.json()
        console.error('Email error:', errorData)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#ADD8E6] text-2xl'>
        Contact
        </h3>

        <div className='flex flex-col space-y-10 pt-28'>
            <h4 className='text-2xl font-semibold text-center'>
                <span className='  decoration-[#F7AB0A]/50 underline'>Let&apos;s Talk</span>
            </h4>

            <div className='space-y-5'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='md:text-2xl'>+1-425-864-2184</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='md:text-2xl'>kaushik270602@gmail.com</p>
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
                <button 
                  type='submit' 
                  disabled={isSubmitting}
                  className={`py-2 px-10 rounded-md font-bold text-lg ${
                    isSubmitting 
                      ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                      : 'bg-[#F7AB0A] text-gray-300 hover:text-black animate-pulse'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
                
                {submitStatus === 'success' && (
                  <p className='text-green-400 text-center mt-2'>
                    ✅ Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}
                
                {submitStatus === 'error' && (
                  <p className='text-red-400 text-center mt-2'>
                    ❌ Failed to send message. Please try again or email me directly.
                  </p>
                )}
            </form>
        </div>   
    </div>
  )
}

export default ContactMe