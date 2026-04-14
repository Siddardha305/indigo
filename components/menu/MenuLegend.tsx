"use client";

import React from "react";
import { motion } from "framer-motion";

const MenuLegend = () => {
  const legendItems = [
    {
      label: "BEST SELLERS",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C12.5523 2 13 2.44772 13 3V5.07107L14.4645 3.6066C14.855 3.21612 15.4882 3.21612 15.8787 3.6066C16.2692 3.99707 16.2692 4.63024 15.8787 5.02071L14.4142 6.48528L16.4853 5.01472C16.8758 4.6242 17.509 4.6242 17.8995 5.01472C18.29 5.40524 18.29 6.03841 17.8995 6.42893L15.8284 7.89949L17.2929 6.43503C17.6834 6.0445 18.3166 6.0445 18.7071 6.43503C19.0976 6.82555 19.0976 7.45872 18.7071 7.84924L17.2426 9.31371L19.3137 7.84315C19.7042 7.45262 20.3374 7.45262 20.7279 7.84315C21.1184 8.23367 21.1184 8.86684 20.7279 9.25736L18.6569 10.7279L20.1213 9.26345C20.5118 8.87293 21.145 8.87293 21.5355 9.26345C21.9261 9.65397 21.9261 10.2871 21.5355 10.6777L20.0711 12.1421L22.1421 10.6716C22.5327 10.2811 23.1658 10.2811 23.5563 10.6716C23.9469 11.0621 23.9469 11.6953 23.5563 12.0858L21.4853 13.5563L22.9497 12.0919C23.3403 11.7014 23.9735 11.7014 24.364 12.0919C24.7545 12.4824 24.7545 13.1156 24.364 13.5061L12 23L0 13.5V3L12 2Z" className="opacity-0" />
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fillOpacity="0.1" />
          <path d="M12 8C12 8 13 10 15 10C17 10 18 8 18 8C18 8 17 11 15 13C13 15 12 15 12 15C12 15 11 15 9 13C7 11 6 8 6 8C6 8 7 10 9 10C11 10 12 8 12 8Z" />
          <circle cx="12" cy="12" r="4" fillOpacity="0.4" />
        </svg>
      )
    },
    {
       label: "CONTAINS NUTS",
       icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L15 5H9L12 2Z" fill="currentColor" />
          <path d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" />
          <path d="M12 19V22" />
        </svg>
       )
    },
    // ...
  ]

  // Actually, I'll use simpler, cleaner SVGs that match the image provided.
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-8 px-4 w-full">
      {/* 1. BEST SELLERS */}
      <div className="flex items-center gap-2.5 group cursor-default">
         <div className="text-[#20064A] transition-transform group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
               <path d="M12 0L14.5 7L22 9.5L14.5 12L12 19L9.5 12L2 9.5L9.5 7L12 0Z" fillOpacity="0.2" />
            </svg>
         </div>
         <span className="text-[#20064A] font-sans text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase">BEST SELLERS</span>
      </div>

      <div className="h-5 w-[1.5px] bg-[#20064A]/40 hidden sm:block" />

      {/* 2. CONTAINS NUTS */}
      <div className="flex items-center gap-2.5 group cursor-default">
         <div className="text-[#20064A] transition-transform group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M12 3c-4 0-6 3-6 7 0 4 6 11 6 11s6-7 6-11c0-4-2-7-6-7z" />
               <path d="M12 3v4" />
               <path d="M10 7h4" />
            </svg>
         </div>
         <span className="text-[#20064A] font-sans text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase">CONTAINS NUTS</span>
      </div>

      <div className="h-5 w-[1.5px] bg-[#20064A]/40 hidden sm:block" />

      {/* 3. GLUTEN FREE */}
      <div className="flex items-center gap-2.5 group cursor-default">
         <div className="text-[#20064A] transition-transform group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M11 20l1-5 1 5" />
               <path d="M12 15V3" />
               <path d="M7 8l5-2 5 2" />
               <path d="M7 12l5-2 5 2" />
               <line x1="3" y1="3" x2="21" y2="21" strokeOpacity="0.8" />
            </svg>
         </div>
         <span className="text-[#20064A] font-sans text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase">GLUTEN FREE</span>
      </div>

      <div className="h-5 w-[1.5px] bg-[#20064A]/40 hidden sm:block" />

      {/* 4. SPICY */}
      <div className="flex items-center gap-2.5 group cursor-default">
         <div className="text-[#20064A] transition-transform group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
         </div>
         <span className="text-[#20064A] font-sans text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase">SPICY</span>
      </div>
    </div>
  );
};

export default MenuLegend;
