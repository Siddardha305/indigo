import React from "react";
import BrandEssenceDecor from "./BrandEssenceDecor";

export default function BrandEssenceBackground({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="relative w-full bg-background py-16 md:py-24 flex flex-col items-center overflow-hidden">
      
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0" 
        style={{ 
          backgroundImage: `url("/logo/logoiconwhite.png")`, 
          backgroundSize: '100px', 
          backgroundRepeat: 'repeat'
        }}
        aria-hidden="true"
      />
      
      {/* Corner Decorations */}
      <BrandEssenceDecor />

      {/* Main Content constraints */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}
