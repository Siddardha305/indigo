import React from "react";
import Image from "next/image";

interface YellowPetalsProps {
  className?: string; // For absolute positioning (e.g., "top-[-4px] left-[-4px]")
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  rotation?: string; // e.g., "-rotate-90"
}

export default function YellowPetals({ className = "", position, rotation = "" }: YellowPetalsProps) {
  const images = {
    "top-left": "/PNGS/flowers/yellow-top-left-coner.png",
    "top-right": "/PNGS/flowers/yellow-right-corner.png", // Correct mapping for top-right/bottom-right
    "bottom-left": "/PNGS/flowers/yellow-top-left-coner.png", 
    "bottom-right": "/PNGS/flowers/yellow-right-corner.png",
  };

  const objectPositions = {
    "top-left": "object-left-top",
    "top-right": "object-right-top",
    "bottom-left": "object-left-bottom",
    "bottom-right": "object-right-bottom",
  };

  return (
    <div className={`absolute w-24 md:w-44 lg:w-[300px] pointer-events-none z-0 select-none ${rotation} ${className}`}>
      <Image 
        src={images[position]} 
        alt="" 
        width={600} 
        height={600} 
        className={`w-full h-auto ${objectPositions[position]}`}
      />
    </div>
  );
}
