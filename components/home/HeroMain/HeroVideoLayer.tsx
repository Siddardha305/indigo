"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";

interface HeroVideoLayerProps {
  opacity: MotionValue<number>;
}

export default function HeroVideoLayer({ opacity }: HeroVideoLayerProps) {
  return (
    <motion.div 
      style={{ 
        opacity,
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
  );
}
