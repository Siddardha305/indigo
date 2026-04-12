import React from "react";
import Link from "next/link";
import Image from "next/image";

const BigLogo = () => (
  <div className="flex flex-col items-center mb-0 pt-16 md:pt-24 lg:pt-32">
    <div className="relative w-[280px] h-[100px] sm:w-[340px] sm:h-[120px] md:w-[440px] md:h-[150px] lg:w-[480px] lg:h-[160px]">
      <Image
        src="/PNGS/LOGO.png"
        alt="INDIGO"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>
);

const GoldDivider = () => (
  <div className="flex items-center justify-center my-6 md:my-10 scale-90 md:scale-100">
    <svg width="240" height="16" viewBox="0 0 240 16">
      <polygon points="120,4 124,8 120,12 116,8" fill="#DFAB40" />
      <polygon points="106,7 106,9 10,8" fill="#DFAB40" />
      <polygon points="134,7 134,9 230,8" fill="#DFAB40" />
    </svg>
  </div>
);

export default function HeroText() {
  return (
    <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-5xl mt-12 md:mt-24 lg:mt-32">
      <BigLogo />
      
      <h1 className="text-[#20064A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-el-messiri mt-0 tracking-wide leading-tight">
        INDO PAK RESTAURANT
      </h1>
      
      <GoldDivider />
      
      <h3 className="text-[#20064A] text-lg sm:text-xl md:text-2xl font-el-messiri font-medium mb-4">
        Namaste. Khushamdeed.
      </h3>
      
      <p className="text-[#9E4C33] text-sm sm:text-base md:text-lg max-w-2xl font-medium mb-10 leading-relaxed px-4 opacity-90">
        We welcome you to experience the tantalising flavours and warm
        hospitality from the spice lands to the east.
      </p>
      
      <Link 
        href="/about" 
        className="bg-[#20064A] text-white px-8 py-3.5 rounded-lg md:rounded-xl font-medium text-[14px] md:text-[15px] transition-all duration-300 hover:bg-[#2c0964] hover:shadow-[0_8px_24px_0_rgba(32,6,74,0.15)] outline-none focus-visible:ring-2 focus-visible:ring-[#20064A] focus-visible:ring-offset-2"
      >
        Let the story unfold
      </Link>
    </div>
  );
}
