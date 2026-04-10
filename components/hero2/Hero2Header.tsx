import React from "react";

export default function Hero2Header() {
  return (
    <div className="flex flex-col items-center mb-16 md:mb-24 px-4 w-full text-center">
      <h2 className="text-white text-3xl md:text-5xl font-el-messiri tracking-[0.03em] mb-6">
        The Essence of Indigo
      </h2>
      
      {/* Decorative Gold Divider (matching the requested design pattern) */}
      <div className="flex items-center justify-center w-full max-w-2xl">
        {/* Left Tapered Line */}
        <div className="flex-1 w-full bg-gradient-to-r from-transparent to-[#DFAB40] h-[1px] md:h-[2px]"></div>
        
        {/* Diamond Centerpiece */}
        <div className="mx-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#DFAB40"/>
          </svg>
        </div>
        
        {/* Right Tapered Line */}
        <div className="flex-1 w-full bg-gradient-to-l from-transparent to-[#DFAB40] h-[1px] md:h-[2px]"></div>
      </div>
    </div>
  );
}
