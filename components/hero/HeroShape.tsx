import React from "react";

export default function HeroShape({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full flex-grow flex flex-col justify-end items-center relative mt-16 md:mt-32">
      
      {/* Dynamic Scalloped Arch Top */}
      <svg 
        viewBox="0 0 1000 352" 
        className="w-[100%] md:w-[95%] lg:w-[90%] xl:w-[85%] h-auto block"
        style={{ filter: 'drop-shadow(0 -4px 10px rgba(0,0,0,0.1))' }}
      >
        <defs>
          {/* We define EXACTLY the left half, and instantly mirror it for the right half to guarantee flawless symmetry! */}
          <path 
            id="arch-left-stroke"
            d="
              M 500,20
              C 480,10 440,50 460,70
              C 430,80 390,100 410,120
              C 370,130 300,160 330,180
              C 260,190 50,200 140,260
              C 80,290 0,300 0,350
            "
          />
          <path 
            id="arch-left-fill"
            d="
              M 500,20
              C 480,10 440,50 460,70
              C 430,80 390,100 410,120
              C 370,130 300,160 330,180
              C 260,190 50,200 140,260
              C 80,290 0,300 0,350
              L 0,362
              L 510,362
              L 510,20
              Z
            "
          />
        </defs>

        {/* Solid White Fills (Overlapping the center by 10px to perfectly prevent subpixel rendering cracks) */}
        <use href="#arch-left-fill" fill="white" />
        <use href="#arch-left-fill" fill="white" transform="translate(1000, 0) scale(-1, 1)" />

        {/* Delicate Golden Outlines */}
        <g fill="none" stroke="#DFAB40" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
          <use href="#arch-left-stroke" />
          <use href="#arch-left-stroke" transform="translate(1000, 0) scale(-1, 1)" />
        </g>
      </svg>

      {/* Main Container under the arc seamlessly connected mathematically */}
      <div className="bg-white w-[100%] md:w-[95%] lg:w-[90%] xl:w-[85%] flex-grow relative pb-10 md:pb-16 flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
