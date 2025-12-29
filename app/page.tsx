"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";
import { useInView } from "react-intersection-observer";

// Cursor Spotlight Component - Desktop only
const CursorSpotlight = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device has touch capability
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Don't render on mobile/touch devices
  if (isMobile) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9998] w-[400px] h-[400px] rounded-full opacity-[0.07] transition-transform duration-75"
      style={{
        background: "radial-gradient(circle, rgba(212,175,55,0.8) 0%, transparent 70%)",
        left: mousePos.x - 200,
        top: mousePos.y - 200,
      }}
    />
  );
};

// Dust Particles Component - Hidden on mobile for performance
const DustParticles = () => {
  return (
    <div className="hidden md:block fixed inset-0 z-[9997] pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, -20, 20],
            x: [null, Math.random() * 40 - 20],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
          }}
        />
      ))}
    </div>
  );
};

// Film Reel Decoration Component
const FilmReelDecoration = ({ position }: { position: "top" | "bottom" }) => {
  return (
    <div className={`hidden md:flex absolute ${position === "top" ? "top-[100px]" : "bottom-[100px]"} left-0 right-0 h-8 items-center justify-center overflow-hidden opacity-20 pointer-events-none z-[50]`}>
      <div className="flex gap-1">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="w-6 h-4 bg-black/30 rounded-sm" />
        ))}
      </div>
    </div>
  );
};

// Snap section wrapper with full viewport height
const SnapSection = ({ children, id, className = "" }: { children: React.ReactNode; id: string; className?: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section 
      ref={ref} 
      id={id} 
      className={`snap-start snap-always min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-200px)] flex items-start justify-center pt-4 md:pt-8 section-reveal ${inView ? "visible" : ""} ${className}`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-[8vw]">
        {children}
      </div>
    </section>
  );
};

export default function Home() {
  const [introState, setIntroState] = useState<"blank" | "text" | "transition" | "content">("blank");
  const { ref: bannerRef } = useInView();

  useEffect(() => {
    // Cinematic Intro Sequence
    const textTimer = setTimeout(() => setIntroState("text"), 1000);
    const transitionTimer = setTimeout(() => setIntroState("transition"), 3500);
    const contentTimer = setTimeout(() => setIntroState("content"), 5500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(transitionTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <>
      {/* Cinematic Intro */}
      <AnimatePresence>
        {introState !== "content" && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="fixed inset-0 z-[10000] bg-black flex items-center justify-center overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {introState === "text" && (
                <motion.div
                  key="intro-text"
                  initial={{ opacity: 0, letterSpacing: "30px", filter: "blur(20px)" }}
                  animate={{ opacity: 1, letterSpacing: "12px", filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)", letterSpacing: "40px" }}
                  transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <h1 className="font-credits text-white text-3xl md:text-5xl lg:text-6xl tracking-[15px] uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                    Now Watching
                  </h1>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mt-8 mx-auto"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Lens Flare transition effect */}
            {introState === "transition" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-1 h-full bg-white/20 blur-3xl rotate-45 scale-[4]" />
                <div className="absolute inset-0 bg-white/5 blur-3xl" />
                {/* Additional lens flare elements */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 1, repeat: 2 }}
                  className="absolute w-32 h-32 rounded-full bg-cinema-gold/20 blur-2xl"
                />
                <motion.div
                  animate={{ x: [-100, 100], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 1.5 }}
                  className="absolute w-4 h-4 rounded-full bg-white"
                  style={{ boxShadow: "0 0 60px 30px rgba(255,255,255,0.3)" }}
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Layout - Scroll Snap Container */}
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory selection:bg-cinema-gold selection:text-black">
        {/* Cursor Spotlight */}
        <CursorSpotlight />
        
        {/* Dust Particles */}
        <DustParticles />
        
        {/* Grain Overlay */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] film-grain" />
        
        {/* Film Reel Decorations */}
        <FilmReelDecoration position="top" />
        <FilmReelDecoration position="bottom" />

        {/* Fixed Top Letterbox Bar */}
        <div className="fixed top-0 left-0 right-0 h-[60px] md:h-[100px] bg-black z-[200]">
          {/* Pill Navigation inside top bar */}
          <Header />
        </div>
        
        {/* Fixed Bottom Letterbox Bar */}
        <div className="fixed bottom-0 left-0 right-0 h-[60px] md:h-[100px] bg-black z-[200]" />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: introState === "content" ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="relative pt-[60px] md:pt-[100px] pb-[60px] md:pb-[100px]"
          style={{
            background: "radial-gradient(ellipse at center, #ffffff 0%, #f5f5f5 50%, #ebebeb 100%)"
          }}
        >
          {/* Hero Section */}
          <section 
            id="hero" 
            className="snap-start snap-always h-[calc(100vh-120px)] md:h-[calc(100vh-200px)] flex items-center justify-center overflow-hidden"
          >
            <div className="w-full scale-[0.95] origin-center">
              <Hero reff={bannerRef} />
            </div>
          </section>

          {/* About Section */}
          <SnapSection id="about">
            <About />
          </SnapSection>

          {/* Experience Section */}
          <SnapSection id="experience">
            <Experience />
          </SnapSection>

          {/* Skills Section */}
          <SnapSection id="skills">
            <Skills />
          </SnapSection>

          {/* Projects Section */}
          <SnapSection id="projects">
            <Projects />
          </SnapSection>

          {/* Certifications Section */}
          <SnapSection id="certifications">
            <Certifications />
          </SnapSection>

          {/* Contact Section */}
          <SnapSection id="contact">
            <Contact />
          </SnapSection>
        </motion.main>
      </div>
    </>
  );
}
