"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function LunchSpecialPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show popup after scrolling 400px
      if (window.scrollY > 400 && !hasBeenShown) {
        setIsVisible(true);
        setHasBeenShown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasBeenShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-500">
      <div className="relative w-full max-w-[850px] aspect-[16/9] bg-[#20064A] rounded-lg border-[6px] border-[#DFAB40] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 z-50 w-10 h-10 bg-[#20064A] border-2 border-[#DFAB40] rounded-full flex items-center justify-center text-[#DFAB40] hover:scale-110 transition-transform cursor-pointer shadow-lg"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        {/* Background Dish Image */}
        <div className="absolute inset-0 z-0">
           <img src="/PNGS/lunch-special.png" alt="Special Set Lunch" className="w-full h-full object-cover opacity-50" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#20064A] via-[#20064A]/60 to-transparent" />
        </div>

        {/* Content Area */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 text-white">
          <div className="flex flex-col">
             {/* Logo Section */}
             <div className="mb-10">
                <Image 
                  src="/logo/logotext.png" 
                  alt="Indigo Logo" 
                  width={180} 
                  height={60} 
                  className="w-32 md:w-40 h-auto object-contain"
                />
             </div>

             {/* Main Offer */}
             <div className="flex flex-col gap-2">
                <h3 className="font-el-messiri text-xl md:text-3xl tracking-widest uppercase text-white/90">SPECIAL SET</h3>
                <h2 className="font-el-messiri text-5xl md:text-8xl tracking-widest uppercase text-[#DFAB40] font-bold leading-none">LUNCH</h2>
             </div>

             <p className="mt-8 font-el-messiri text-sm md:text-xl font-medium max-w-md leading-relaxed">
                Butter Chicken, Garlic Naan & Jeera Rice at a special price.
             </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-1.5 border-l-2 border-[#DFAB40]/40 pl-4">
             <p className="font-el-messiri text-[10px] md:text-sm font-bold tracking-wider">
                <span className="text-[#DFAB40] mr-2">Address:</span> 
                451 Mennonite Road, Suite 190 Rosenberg, TX 77469
             </p>
             <p className="font-el-messiri text-[10px] md:text-sm font-bold tracking-wider">
                <span className="text-[#DFAB40] mr-2">Contact:</span> 
                (832)-451-6027
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
