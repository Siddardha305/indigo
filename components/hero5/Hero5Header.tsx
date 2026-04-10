import React from "react";

export default function Hero5Header() {
  return (
    <div className="flex flex-col items-center mb-10 w-full text-center">
      <h2 className="text-[#20064A] text-3xl md:text-5xl font-el-messiri tracking-[0.02em] font-medium mb-6">
        The INDIGO Family
      </h2>
      
      {/* Decorative Gold Divider */}
      <div className="flex items-center justify-center w-full max-w-[500px] mb-8">
        <div className="flex-1 w-full bg-gradient-to-r from-transparent to-[#DFAB40] h-[1px]"></div>
        <div className="mx-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#DFAB40"/>
          </svg>
        </div>
        <div className="flex-1 w-full bg-gradient-to-l from-transparent to-[#DFAB40] h-[1px]"></div>
      </div>

      <p className="text-[#D8A131] font-semibold text-base md:text-lg lg:text-[20px] font-sans tracking-wide max-w-3xl">
        Proud, passionate, and powered, the INDIGO team brings our savoury stories to life.
      </p>
    </div>
  );
}
