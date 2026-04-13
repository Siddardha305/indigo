import React from "react";
import YellowPetals from "../../decorations/YellowPetals";

export default function InteriorGalleryBackground({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="relative w-full bg-[#20064A] py-20 md:py-32 flex flex-col items-center overflow-hidden">
      
      {/* Corner Decorations */}
      <YellowPetals position="top-left" className="top-[-4px] left-[-4px]" />
      <YellowPetals position="bottom-right" className="bottom-[-4px] right-[-4px]" />

      {/* Main Content constraints */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}
