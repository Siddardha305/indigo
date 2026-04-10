import React from "react";
import Image from "next/image";

export default function HeroBackground({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="relative w-full min-h-[96vh] bg-[#20064A] flex flex-col items-center overflow-x-hidden pt-12">
      
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] z-0" 
        style={{ 
          backgroundImage: `url("/logo/logoiconwhite.png")`, 
          backgroundSize: '100px', 
          backgroundRepeat: 'repeat'
        }}
        aria-hidden="true"
      />

      {/* Photoshop Shape Background */}
      <div className="absolute inset-x-0 bottom-0 w-full h-[85%] md:h-[92%] z-0 flex flex-col justify-end pointer-events-none">
        <div className="relative w-full h-full max-w-[1900px] mx-auto opacity-100">
          <Image
            src="/PNGS/Subtractshape.webp"
            alt="Hero Background Shape"
            fill
            className="object-contain object-bottom transition-all duration-700 h-[100%] transform scale-[1.08] md:scale-[1.12] origin-bottom"
            style={{ 
              filter: 'drop-shadow(0 -1.5px 0 #DFAB40) drop-shadow(1.5px 0 0 #DFAB40) drop-shadow(-1.5px 0 0 #DFAB40)'
            }}
            priority
          />
        </div>
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full flex-grow flex flex-col justify-end max-w-[1450px] mx-auto px-4 sm:px-6 md:px-12 pb-14 md:pb-24">
        <div className="w-full flex flex-col items-center">
          {children}
        </div>
      </div>
    </section>
  );
}
