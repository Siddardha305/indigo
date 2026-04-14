"use client";

import React from "react";
import { motion } from "framer-motion";
import MenuLegend from "./MenuLegend";

const MenuHeader = () => {
  return (
    <div className="flex flex-col items-center mb-6 relative w-full px-4">
      {/* Halal Stamp - Absolute Positioned */}
      <div className="absolute right-4 md:right-10 top-0 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full relative group cursor-pointer"
        >
          <img src="/logo/halal.png" alt="Halal Certified" className="w-full h-full object-contain" />
          <svg className="absolute inset-0 w-full h-full text-[#00A651]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="301.59" strokeDashoffset="301.59" />
            <motion.circle 
              cx="50" cy="50" r="48" fill="none" 
              stroke="currentColor" strokeWidth="2.5" 
              strokeDasharray="301.59" 
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </div>

      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-[#20064A] font-el-messiri text-3xl md:text-5xl text-center mb-2 tracking-[0.1em] uppercase"
      >
        INDIGO&apos;S MENU
      </motion.h3>
      
      {/* Custom Divider */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 280 }}
        className="flex items-center w-full max-w-[280px] mb-8"
      >
        <div className="flex-1 h-[1.5px] bg-[#DFAB40]/60" />
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-[#20064A]/60 text-xs md:text-sm font-medium text-center max-w-xl mb-4 leading-relaxed font-sans"
      >
        Each experience is crafted with care, bringing together taste, mood, and memorable moments.
      </motion.p>

      {/* The Legend component we created earlier */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full flex justify-center"
      >
        <MenuLegend />
      </motion.div>
    </div>
  );
};

export default MenuHeader;
