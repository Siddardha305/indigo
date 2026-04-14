"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroBackground({ children }: Readonly<{ children: React.ReactNode }>) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale: Starts expanding once the video is established
  const scale = useTransform(scrollYProgress, [0.3, 0.9], [1, 2.5]);
  
  // Opacity: Text vanishes INSTANTLY in the first few pixels of scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);
  
  // Opacity: Video appears immediately after text is gone
  const videoOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full h-[400vh] bg-[#20074A]">
      <div className="sticky top-0 w-full h-screen flex flex-col items-center overflow-hidden">
        
        {/* Subtle Static Pattern Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05] z-0" 
          style={{ 
            backgroundImage: `url("/logo/logoiconwhite.png")`, 
            backgroundSize: '120px', 
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Main Animated Shape Container */}
        <div className="relative w-full flex-grow flex flex-col justify-center items-center">
          <motion.div 
            style={{ scale }}
            className="relative w-[130vw] h-[130vh] md:w-[100vw] md:h-screen flex items-center justify-center transition-shadow duration-500"
          >
                  {/* Unified Shape & Content Container */}
                  <div className="relative w-full h-full max-w-[1900px] mx-auto scale-[3.3] sm:scale-[1.25] md:scale-[1.12] origin-bottom">
                      
                      {/* 1. Background Visual Frame */}
                      <div className="absolute inset-0 z-0">
                          <Image
                              src="/PNGS/Subtractshape.webp"
                              alt="Hero Background Shape"
                              fill
                              className="object-contain object-bottom"
                              style={{ 
                                  filter: 'drop-shadow(0 -2px 0 #DFAB40) drop-shadow(2px 0 0 #DFAB40) drop-shadow(-2px 0 0 #DFAB40)'
                              }}
                              priority
                          />
                      </div>

                      {/* 2. Masked Video - Using the same logic and div structure */}
                      <motion.div 
                         style={{ 
                            opacity: videoOpacity,
                            maskImage: 'url("/PNGS/Subtractshape.webp")',
                            WebkitMaskImage: 'url("/PNGS/Subtractshape.webp")',
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'bottom center',
                            WebkitMaskPosition: 'bottom center',
                         }}
                         className="absolute inset-0 z-10 w-full h-full pointer-events-none"
                      >
                          <video 
                              autoPlay 
                              loop 
                              muted 
                              playsInline 
                              className="w-full h-full object-cover"
                          >
                              <source src="/introvidoe.MP4" type="video/mp4" />
                          </video>
                      </motion.div>

                      {/* 3. Text Overlay - Inside the scaled shape container - Adjusted down slightly */}
                      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none pt-12 md:pt-20">
                          <motion.div 
                            style={{ opacity: textOpacity }}
                            className="relative w-full flex flex-col items-center pointer-events-auto"
                          >
                              {children}
                          </motion.div>
                      </div>
                  </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
