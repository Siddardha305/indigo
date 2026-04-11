import React from "react";
import Link from "next/link";

export default function MenuCTA() {
  return (
    <div className="w-full py-20 md:py-32 px-4 flex flex-col items-center bg-white relative overflow-hidden border-t border-gray-100">
        {/* Background Decorative Wheat Pattern */}
        <div className="absolute inset-x-0 top-0 bottom-0 opacity-[0.04] pointer-events-none">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-12 p-10">
                {Array.from({ length: 32 }).map((_, i) => (
                    <img key={i} src="/logo/logoicon.png" alt="" className="w-12 h-12" />
                ))}
            </div>
        </div>

        {/* Left Half Flower Decoration */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 md:w-80 h-auto opacity-30 pointer-events-none select-none -translate-x-1/2">
            <img src="/PNGS/half-flower.png" alt="" className="w-full h-auto object-contain" />
        </div>
        
        {/* Right Half Flower Decoration (Flipped) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-80 h-auto opacity-30 pointer-events-none select-none translate-x-1/2">
            <img src="/PNGS/half-flower.png" alt="" className="w-full h-auto object-contain scale-x-[-1]" />
        </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <h2 className="text-[#20064A] text-2xl md:text-5xl font-serif mb-6 tracking-wide">Ready To Dine With Us?</h2>
        
        {/* Gold Divider */}
        <div className="flex items-center w-full max-w-[200px] mb-8">
            <div className="flex-1 h-px bg-[#DFAB40]/50" />
            <div className="mx-3 text-[#DFAB40] text-[8px]">✦</div>
            <div className="flex-1 h-px bg-[#DFAB40]/50" />
        </div>

        <p className="text-[#20064A]/70 font-medium mb-12 max-w-xl text-xs md:text-sm">
           Reserve your table or order online for pickup
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <Link 
                href="/reservation" 
                className="bg-[#20064A] text-white px-12 py-3 rounded-md font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all hover:bg-[#300a6e] active:scale-95 shadow-lg"
            >
                Reserve a table
            </Link>
            <Link 
                href="/order" 
                className="bg-transparent border-2 border-[#DFAB40]/40 text-[#20064A] px-12 py-3 rounded-md font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all hover:bg-gray-50 active:scale-95"
            >
                Order now
            </Link>
        </div>
      </div>
    </div>
  );
}
