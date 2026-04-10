import React from "react";

export default function Hero4Header() {
  return (
    <div className="flex flex-col items-center mb-16 px-4 w-full text-center">
      <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-el-messiri tracking-[0.03em] mb-6">
        Inside INDIGO
      </h2>
      
      {/* Decorative Gold Divider */}
      <div className="flex items-center justify-center w-full max-w-[600px] mb-8">
        <div className="flex-1 w-full bg-gradient-to-r from-transparent to-[#DFAB40] h-[1px]"></div>
        
        <div className="mx-6">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#DFAB40"/>
          </svg>
        </div>
        
        <div className="flex-1 w-full bg-gradient-to-l from-transparent to-[#DFAB40] h-[1px]"></div>
      </div>
      
      <p className="text-[#DFAB40] text-lg md:text-[22px] font-medium font-el-messiri tracking-wide">
        Our space is designed with hints of ethnic and the spirit of community.
      </p>
    </div>
  );
}
