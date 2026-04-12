import React from "react";
import Image from "next/image";

// White translucent overlapping petal decoration for the corners
const WhitePetals = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={`pointer-events-none ${className}`} width="300" height="300" fill="none">
    <circle cx="50" cy="50" r="100" fill="white" fillOpacity="0.25" />
    <circle cx="150" cy="50" r="100" fill="white" fillOpacity="0.20" />
    <circle cx="100" cy="150" r="100" fill="white" fillOpacity="0.20" />
    <circle cx="50" cy="150" r="100" fill="white" fillOpacity="0.25" />
    <circle cx="100" cy="100" r="100" fill="white" fillOpacity="0.30" />
  </svg>
);

export default function Hero7Background({ children }: Readonly<{ children: React.ReactNode }>) {
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
      
      {/* Top Right White Translucent Petals */}
      <WhitePetals className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 md:scale-[1.1] rotate-[130deg] z-0 opacity-80" />
      
      {/* Bottom Left White Translucent Petals */}
      <WhitePetals className="absolute bottom-0 left-0 -translate-x-[40%] translate-y-1/4 md:scale-[1.2] -rotate-[30deg] z-0 opacity-80" />
      
      {/* Main Content constraints */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 sm:px-6 flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}
