"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        const errorData = await response.json();
        console.error("Email error:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+1-425-864-2184",
      href: "tel:+14258642184",
    },
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "vmitta@uw.edu",
      href: "mailto:vmitta@uw.edu",
    },
    {
      icon: MapPinIcon,
      label: "Location",
      value: "Bothell, Washington, USA",
      href: null,
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
      {/* "The End" Style Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mt-24 mb-4"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="font-credits text-sm tracking-[8px] text-gray-500 uppercase"
        >
          The Final Chapter
        </motion.span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto mt-4"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-500 mt-4 max-w-xl mx-auto"
        >
          Ready to collaborate? Drop me a message and let&apos;s create something extraordinary.
        </motion.p>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-6 lg:gap-10">
        {/* Contact Info Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {item.href ? (
                  <a href={item.href} className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center group-hover:border-cinema-gold group-hover:shadow-lg transition-all"
                    >
                      <item.icon className="w-5 h-5 text-cinema-gold" />
                    </motion.div>
                    <div>
                      <span className="block font-credits text-[10px] tracking-[3px] text-gray-400 uppercase">
                        {item.label}
                      </span>
                      <span className="block text-black text-sm group-hover:text-cinema-gold transition-colors">
                        {item.value}
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center"
                    >
                      <item.icon className="w-5 h-5 text-cinema-gold" />
                    </motion.div>
                    <div>
                      <span className="block font-credits text-[10px] tracking-[3px] text-gray-400 uppercase">
                        {item.label}
                      </span>
                      <span className="block text-black text-sm">
                        {item.value}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Availability Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"
              />
              <span className="font-credits text-xs tracking-wider text-black">
                CURRENTLY AVAILABLE
              </span>
            </div>
            <p className="text-gray-500 text-xs">
              Open for full-time opportunities, freelance projects, and exciting collaborations.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4 shadow-sm"
          >
            {/* Name & Email Row */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-credits text-[10px] tracking-[2px] text-gray-500 uppercase">
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  required
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-cinema-gold transition-colors text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-1">
                <label className="font-credits text-[10px] tracking-[2px] text-gray-500 uppercase">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  required
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-cinema-gold transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1">
              <label className="font-credits text-[10px] tracking-[2px] text-gray-500 uppercase">
                Subject
              </label>
              <input
                {...register("subject")}
                type="text"
                required
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-cinema-gold transition-colors text-sm"
                placeholder="What's this about?"
              />
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="font-credits text-[10px] tracking-[2px] text-gray-500 uppercase">
                Message
              </label>
              <textarea
                {...register("message")}
                required
                rows={3}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-cinema-gold transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-xl font-credits text-base tracking-[3px] transition-all duration-300 ${
                isSubmitting
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-cinema-gold text-black hover:shadow-lg"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-gray-400 border-t-gray-600 rounded-full"
                  />
                  SENDING...
                </span>
              ) : (
                "SEND MESSAGE"
              )}
            </motion.button>

            {/* Status Messages */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-2 text-green-600 bg-green-100 rounded-xl py-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-credits tracking-wider">
                    Message sent! I&apos;ll get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-2 text-red-600 bg-red-100 rounded-xl py-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="font-credits tracking-wider">
                    Failed to send. Please try again.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>

      {/* Credits Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mt-6 text-center"
      >
        <p className="font-credits text-gray-400 text-xs tracking-[3px]">
          DESIGNED & DEVELOPED BY KAUSHIK MITTA • © {new Date().getFullYear()}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default ContactMe;
