import React from "react";

const PurplePetals = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={`pointer-events-none ${className}`} width="300" height="300" fill="none">
    <circle cx="50" cy="50" r="100" fill="#9F81C7" fillOpacity="0.6" />
    <circle cx="150" cy="50" r="100" fill="#714C9F" fillOpacity="0.5" />
    <circle cx="100" cy="150" r="100" fill="#B59DE0" fillOpacity="0.4" />
    <circle cx="50" cy="150" r="100" fill="#583580" fillOpacity="0.5" />
    <circle cx="100" cy="100" r="100" fill="#855FB4" fillOpacity="0.7" />
  </svg>
);

export default function Hero5Background({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="relative w-full bg-[#FCFCFA] py-16 md:py-24 flex flex-col items-center overflow-hidden">
      
      {/* Top Right Purple Petals */}
      <PurplePetals className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 md:scale-[1.1] rotate-[130deg]" />
      
      {/* Bottom Left Purple Petals */}
      <PurplePetals className="absolute bottom-0 left-0 -translate-x-[40%] translate-y-1/4 md:scale-[1.2] -rotate-[30deg]" />
      
      {/* Main Content constraints */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}
