import React from "react";
import Link from "next/link";
import YellowPetals from "../decorations/YellowPetals";

export default function MenuCTA() {
  return (
    <div className="w-full relative overflow-hidden bg-white border-y-[12px] md:border-y-[16px] border-[#20064A]">
      <div className="w-full py-20 md:py-32 px-4 flex flex-col items-center relative min-h-[400px]">
        {/* Background Decorative Pattern - Using a more stable repeat */}
        <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none" 
            style={{ 
                backgroundImage: 'url("/logo/logoicon.png")',
                backgroundSize: '100px',
                backgroundRepeat: 'repeat',
                backgroundPosition: 'center'
            }}
        />

        {/* Left Half Flower Decoration - Moved more inside */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 md:w-[420px] h-auto opacity-70 pointer-events-none select-none -translate-x-[30%] z-0">
            <img src="/PNGS/half-flower.png" alt="" className="w-full h-auto object-contain" />
        </div>
        
        {/* Right Half Flower Decoration (Flipped) - Moved more inside */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-[420px] h-auto opacity-70 pointer-events-none select-none translate-x-[30%] z-0">
            <img src="/PNGS/half-flower.png" alt="" className="w-full h-auto object-contain scale-x-[-1]" />
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <h2 className="text-[#20064A] text-4xl md:text-6xl font-el-messiri mb-6 tracking-wide uppercase">
            Ready To Dine With Us?
          </h2>
          
          {/* Gold Divider with Star */}
          <div className="flex items-center w-full max-w-[450px] mb-10">
            <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#DFAB40] to-[#DFAB40]" />
            <div className="mx-6 text-[#DFAB40]">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
               </svg>
            </div>
            <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-[#DFAB40] to-[#DFAB40]" />
          </div>

          <p className="text-[#20064A] font-bold mb-14 max-w-xl text-sm md:text-lg font-sans tracking-wide">
            Reserve your table or order online for pickup
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <Link 
              href="/contact#reservation" 
              className="bg-[#20064A] text-white px-12 py-4 rounded-lg font-bold text-sm uppercase tracking-[0.2em] transition-all hover:bg-[#1a0533] hover:shadow-2xl active:scale-95 flex items-center justify-center min-w-[240px]"
            >
              Reserve a table
            </Link>
            <Link 
              href="/order" 
              className="bg-white border-2 border-[#20064A] text-[#20064A] px-12 py-4 rounded-lg font-bold text-sm uppercase tracking-[0.2em] transition-all hover:bg-gray-50 hover:shadow-xl active:scale-95 flex items-center justify-center min-w-[240px]"
            >
              Order now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
