import React from "react";

const GoldPetals = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={`pointer-events-none ${className}`} width="400" height="400" fill="none">
    <circle cx="50" cy="50" r="100" fill="#DFAB40" fillOpacity="0.12" />
    <circle cx="150" cy="50" r="100" fill="#DFAB40" fillOpacity="0.12" />
    <circle cx="100" cy="150" r="100" fill="#DFAB40" fillOpacity="0.12" />
    <circle cx="50" cy="150" r="100" fill="#DFAB40" fillOpacity="0.10" />
    <circle cx="100" cy="100" r="100" fill="#DFAB40" fillOpacity="0.15" />
  </svg>
);

export default function Hero6Background({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="relative w-full bg-[#20064A] py-16 md:py-24 flex flex-col items-center overflow-hidden">
      
      {/* Top Left Gold Petals */}
      <GoldPetals className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 rotate-[45deg] md:scale-[1.15]" />
      
      {/* Bottom Right Gold Petals */}
      <GoldPetals className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 -rotate-[135deg] md:scale-[1.15]" />
      
      {/* Main Content constraints */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}
