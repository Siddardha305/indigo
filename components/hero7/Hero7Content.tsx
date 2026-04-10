import React from "react";
import Link from "next/link";

export default function Hero7Content() {
  return (
    <div className="flex flex-col items-center w-full text-center">
      <h2 className="text-white text-4xl md:text-[44px] lg:text-[50px] font-el-messiri tracking-[0.02em] font-medium mb-6">
        Catering by INDIGO
      </h2>
      
      {/* Decorative Gold Divider */}
      <div className="flex items-center justify-center w-full max-w-[500px] mb-8">
        <div className="flex-1 w-full bg-gradient-to-r from-transparent to-[#DFAB40] h-[1px]"></div>
        <div className="mx-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#DFAB40"/>
          </svg>
        </div>
        <div className="flex-1 w-full bg-gradient-to-l from-transparent to-[#DFAB40] h-[1px]"></div>
      </div>

      <p className="text-[#D8A131] font-semibold text-lg md:text-[21px] font-sans tracking-wide max-w-3xl mb-8">
        To take our taste beyond our space, we take on catering requests for events of all types.
      </p>
      
      {/* Features List */}
      <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-4 md:gap-x-6 text-white text-base md:text-lg font-medium font-sans mb-12">
        <span>Custom menus</span>
        <span className="text-[#DFAB40]">✦</span>
        <span>Halal-friendly options</span>
        <span className="text-[#DFAB40]">✦</span>
        <span>Flexible group sizes</span>
        <span className="text-[#DFAB40]">✦</span>
        <span>Timely service</span>
      </div>

      {/* Primary Action Button */}
      <Link 
        href="/catering" 
        className="bg-white text-[#20064A] px-10 py-3.5 rounded-md font-bold text-[17px] flex items-center transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-[0_4px_14px_0_rgba(0,0,0,0.25)] focus:ring-4 focus:ring-white/50"
      >
        <span>Start Planning</span>
        <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
      
    </div>
  );
}
