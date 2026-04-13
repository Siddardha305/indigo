import React from "react";
import Image from "next/image";
import WhitePetals from "../../decorations/WhitePetals";

export default function CateringCTABackground({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="relative w-full py-24 md:py-32 flex flex-col items-center overflow-hidden">
      
      {/* Heavy Image Background Base */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero7/catering-bg.png" 
          alt="Indian feast spread" 
          fill 
          className="object-cover object-center"
          priority
        />
        {/* Dark Deep Violet Heavy Overlay to knock the image back into a texture */}
        <div className="absolute inset-0 bg-[#20064A] opacity-85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#20064A] opacity-75" />
      </div>
      
      {/* Corner Decorations */}
      <WhitePetals position="top-right" className="top-[-4px] right-[-4px]" rotation="-rotate-90" opacity="opacity-40" />
      <WhitePetals position="bottom-left" className="bottom-[-4px] left-[-4px]" opacity="opacity-40" />
      
      {/* Main Content constraints */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 sm:px-6 flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}
