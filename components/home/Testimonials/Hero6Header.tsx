import React from "react";

export default function Hero6Header() {
  return (
    <div className="flex flex-col items-center mb-10 md:mb-16 w-full text-center">
      <h2 className="text-white text-3xl md:text-5xl font-el-messiri tracking-[0.02em] mb-6">
        Stories from Our Tables
      </h2>
      
      {/* Decorative Gold Divider */}
      <div className="flex items-center justify-center w-full max-w-xl mb-6">
        <div className="flex-1 w-full bg-gradient-to-r from-transparent to-[#DFAB40] h-[1px]"></div>
        
        <div className="mx-4 md:mx-6">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#DFAB40"/>
          </svg>
        </div>
        
        <div className="flex-1 w-full bg-gradient-to-l from-transparent to-[#DFAB40] h-[1px]"></div>
      </div>
      
      <p className="text-[#DFAB40] font-medium text-base md:text-[20px] font-sans tracking-wide">
        Hear from our loyal patrons-the true essence of our food and space.
      </p>
    </div>
  );
}
