import React from "react";
import Link from "next/link";
import YellowPetals from "../decorations/YellowPetals";

export default function MenuCTA() {
  return (
    <div className="w-full relative overflow-hidden bg-white">
      {/* Top Border Bar */}
      <div className="w-full h-3 md:h-4 bg-[#20064A]"></div>

      <div className="w-full py-16 md:py-24 px-4 flex flex-col items-center relative">
        {/* Background Decorative Wheat/Logo Pattern */}
        <div className="absolute inset-x-0 top-0 bottom-0 opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-4 md:grid-cols-10 gap-8 p-6">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <img src="/logo/logoicon.png" alt="" className="w-10 h-10 object-contain grayscale" />
              </div>
            ))}
          </div>
        </div>

        {/* Left Half Flower Decoration */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 md:w-[450px] h-auto opacity-70 pointer-events-none select-none -translate-x-1/2 z-0">
            <img src="/PNGS/half-flower.png" alt="" className="w-full h-auto object-contain" />
        </div>
        
        {/* Right Half Flower Decoration (Flipped) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 md:w-[450px] h-auto opacity-70 pointer-events-none select-none translate-x-1/2 z-0">
            <img src="/PNGS/half-flower.png" alt="" className="w-full h-auto object-contain scale-x-[-1]" />
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <h2 className="text-[#20064A] text-3xl md:text-5xl font-el-messiri mb-4 tracking-wide">
            Ready To Dine With Us?
          </h2>
          
          {/* Gold Divider with Star */}
          <div className="flex items-center w-full max-w-[400px] mb-8">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-[#DFAB40]" />
            <div className="mx-4 text-[#DFAB40]">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
               </svg>
            </div>
            <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-[#DFAB40]" />
          </div>

          <p className="text-[#20064A]/80 font-medium mb-12 max-w-xl text-sm md:text-base font-sans">
            Reserve your table or order online for pickup
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <Link 
              href="/reservation" 
              className="bg-[#20064A] text-white px-10 py-3.5 rounded-lg font-bold text-xs uppercase tracking-[0.15em] transition-all hover:bg-[#1a0533] active:scale-95 shadow-md flex items-center justify-center min-w-[200px]"
            >
              Reserve a table
            </Link>
            <Link 
              href="/order" 
              className="bg-white border-2 border-[#20064A]/30 text-[#20064A] px-10 py-3.5 rounded-lg font-bold text-xs uppercase tracking-[0.15em] transition-all hover:bg-gray-50 active:scale-95 shadow-sm flex items-center justify-center min-w-[200px]"
            >
              Order now
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Border Bar */}
      <div className="w-full h-3 md:h-4 bg-[#20064A]"></div>
    </div>
  );
}
