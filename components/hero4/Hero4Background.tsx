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

export default function Hero4Background({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="relative w-full bg-[#20064A] py-20 md:py-32 flex flex-col items-center overflow-hidden">
      
      {/* Main Content constraints */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}
