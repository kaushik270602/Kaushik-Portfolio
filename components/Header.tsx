"use client";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Logline", href: "#about" },
    { name: "Filmography", href: "#experience" },
    { name: "Technical Specs", href: "#skills" },
    { name: "Productions", href: "#projects" },
    { name: "Awards", href: "#certifications" },
    { name: "Casting Call", href: "#contact" },
  ];

  return (
    <>
      {/* Rounded Pill Navigation Frame - centered in top bar */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.8 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center px-2 md:px-4"
      >
        <div className="h-10 md:h-12 rounded-full border-2 border-white/80 bg-transparent flex items-center px-3 md:px-4 gap-3 md:gap-6">
          {/* Logo */}
          <Link href="#hero" className="flex-shrink-0">
            <span className="font-cinematic text-xs md:text-sm text-white hover:text-cinema-gold transition-colors">
              KM
            </span>
          </Link>

          {/* Nav Items (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="font-credits text-xs tracking-[2px] text-white hover:text-cinema-gold transition-all duration-300 uppercase whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Socials - Hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-1 flex-shrink-0">
            <SocialIcon
              url="https://www.linkedin.com/in/venkata-kaushik-mitta-ba0a9121a/"
              fgColor="#ffffff"
              bgColor="transparent"
              style={{ width: 22, height: 22 }}
              className="hover:scale-110 transition-transform"
            />
            <SocialIcon
              url="https://github.com/kaushik270602"
              fgColor="#ffffff"
              bgColor="transparent"
              style={{ width: 22, height: 22 }}
              className="hover:scale-110 transition-transform"
            />
          </div>
          
          {/* Hire Me Button - Hidden on very small screens */}
          <a 
            href="#contact" 
            className="hidden sm:block flex-shrink-0 px-3 md:px-4 py-1 md:py-1.5 rounded-full font-credits text-[10px] md:text-xs tracking-[1px] uppercase font-bold whitespace-nowrap"
            style={{ backgroundColor: "#d4af37", color: "#000000" }}
          >
            Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-6 h-6 flex items-center justify-center flex-shrink-0"
          >
            <div className="w-4 flex flex-col gap-1">
              <motion.div animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="w-full h-[1px] bg-white" />
              <motion.div animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-full h-[1px] bg-white" />
              <motion.div animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} className="w-full h-[1px] bg-white" />
            </div>
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] bg-black/98 backdrop-blur-md flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-credits text-2xl tracking-[6px] text-cinema-cream hover:text-cinema-gold transition-colors uppercase"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
