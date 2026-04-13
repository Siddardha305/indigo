import React from "react";
import VioletPetals from "../../decorations/VioletPetals";

export default function TeamSectionBackground({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="relative w-full bg-[#FCFCFA] py-16 md:py-24 flex flex-col items-center overflow-hidden">
      
      {/* Corner Decorations */}
      <VioletPetals position="top-right" className="top-[-4px] right-[-4px]" />
      <VioletPetals position="bottom-left" className="bottom-[-4px] left-[-4px]" />

      {/* Main Content constraints */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}
