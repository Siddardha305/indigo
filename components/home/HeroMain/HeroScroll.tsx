"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroText from "./HeroText";
import Image from "next/image";

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation values
  // 1. Scale of the shape: Starts smallish, then fills screen
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.85, 1, 5]);
  
  // 2. Opacity of the text: Fades out as you scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  // 3. Opacity of the video: Fades in as you scroll
  const videoOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  // 4. Position: The shape moves up slightly?
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={containerRef} className="relative w-full h-[350vh] bg-brand-blue">
      {/* Sticky Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-brand-blue">
        
        {/* Subtle Background Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05] z-0" 
          style={{ 
            backgroundImage: `url("/logo/logoiconwhite.png")`, 
            backgroundSize: '120px', 
            backgroundRepeat: 'repeat'
          }}
        />

        {/* The Animated Shape Mask Container */}
        <motion.div 
          style={{ 
            scale,
            maskImage: 'url("/PNGS/Subtractshape.webp")',
            WebkitMaskImage: 'url("/PNGS/Subtractshape.webp")',
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center bottom',
            WebkitMaskPosition: 'center bottom',
            filter: 'drop-shadow(0 -4px 12px rgba(223, 171, 64, 0.4))'
          }}
          className="relative w-[120vw] h-[120vh] md:w-[100vw] md:h-[100vh] z-10 flex items-center justify-center overflow-hidden bg-white group"
        >
          {/* Layer 1: The Initial Text (Inside the shape) */}
          <motion.div 
            style={{ 
              opacity: textOpacity,
              scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
            }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="scale-[0.75] sm:scale-90 md:scale-100">
              <HeroText />
            </div>
          </motion.div>

          {/* Layer 2: The Video (Inside the shape) */}
          <motion.div 
            style={{ 
              opacity: videoOpacity,
              scale: useTransform(scrollYProgress, [0.1, 0.4], [1.1, 1])
            }}
            className="absolute inset-0 w-full h-full z-10"
          >
             {/* Using a high-quality cinemagraph style video */}
             <video 
               autoPlay 
               loop 
               muted 
               playsInline 
               className="w-full h-full object-cover brightness-[0.8]"
             >
               <source src="https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-with-attention-to-detail-4336-large.mp4" type="video/mp4" />
               Your browser does not support the video tag.
             </video>
             
             {/* Dynamic Video Title Overlay (Optional, but adds premium feel) */}
             <motion.div 
               style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]) }}
               className="absolute inset-0 flex flex-col items-center justify-center bg-black/20"
             >
                <h4 className="text-white font-el-messiri text-4xl md:text-7xl uppercase tracking-[0.2em]">INDIGO</h4>
                <div className="w-24 h-px bg-brand-yellow mt-4" />
             </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
        >
           <div className="flex flex-col items-center gap-3">
             <span className="text-brand-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">Dive Into Excellence</span>
             <motion.div 
               animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
               transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
               className="w-[1.5px] h-14 bg-gradient-to-b from-brand-yellow to-transparent"
             />
           </div>
        </motion.div>

        {/* Side Accents (Mandala half-flowers) */}
        <motion.div 
           style={{ 
             opacity: useTransform(scrollYProgress, [0, 0.2], [0.2, 0]),
             x: useTransform(scrollYProgress, [0, 0.2], [0, -50])
           }}
           className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none select-none"
        >
            <img src="/PNGS/half-flower.png" alt="" className="w-full h-auto opacity-40 rotate-90" />
        </motion.div>
        <motion.div 
           style={{ 
             opacity: useTransform(scrollYProgress, [0, 0.2], [0.2, 0]),
             x: useTransform(scrollYProgress, [0, 0.2], [0, 50])
           }}
           className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-96 h-96 pointer-events-none select-none"
        >
            <img src="/PNGS/half-flower.png" alt="" className="w-full h-auto opacity-40 -rotate-90 scale-x-[-1]" />
        </motion.div>
      </div>
    </div>
  );
}
