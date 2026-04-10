import React from "react";

export default function Hero3Header() {
  return (
    <div className="flex flex-col items-center mb-16 md:mb-24 w-full text-center">
      <h2 className="text-[#20064A] text-3xl md:text-5xl font-el-messiri tracking-[0.02em] font-semibold mb-6">
        The INDIGO Story
      </h2>
      
      {/* Decorative Gold Divider */}
      <div className="flex items-center justify-center w-full max-w-xl mb-8">
        <div className="flex-1 w-full bg-gradient-to-r from-transparent to-[#DFAB40] h-[1px] md:h-[1.5px]"></div>
        <div className="mx-4 md:mx-6">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#DFAB40"/>
          </svg>
        </div>
        <div className="flex-1 w-full bg-gradient-to-l from-transparent to-[#DFAB40] h-[1px] md:h-[1.5px]"></div>
      </div>

      <div className="flex flex-col items-center gap-3 w-full max-w-2xl px-4">
        <p className="text-[#D8A131] font-medium text-lg md:text-[22px] font-el-messiri tracking-wide">
          &ldquo;Zaiqa jo dil se nikle, woh sarhadon ka mohtaaj nahi hota.&rdquo;
        </p>
        <p className="text-[#20064A] text-base md:text-xl font-medium tracking-wide">
          Flavour that comes from the heart is not bound by borders.
        </p>
      </div>
    </div>
  );
}
