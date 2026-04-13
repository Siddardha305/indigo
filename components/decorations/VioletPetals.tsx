import React from "react";
import Image from "next/image";

interface VioletPetalsProps {
  className?: string; // For absolute positioning (e.g., "top-[-4px] right-[-4px]")
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  opacity?: string; // For different transparency levels (e.g., "opacity-40")
  rotation?: string;
}

export default function VioletPetals({ className = "", position, opacity = "opacity-100", rotation = "" }: VioletPetalsProps) {
  const images = {
    "top-left": "/PNGS/flowers/voilate-top-corner.png", // Correct mapping for top-corner
    "top-right": "/PNGS/flowers/voilate-top-corner.png",
    "bottom-left": "/PNGS/flowers/voilate-left-corner.png", // Correct mapping for left-corner
    "bottom-right": "/PNGS/flowers/voilate-left-corner.png",
  };

  const objectPositions = {
    "top-left": "object-left-top",
    "top-right": "object-right-top",
    "bottom-left": "object-left-bottom",
    "bottom-right": "object-right-bottom",
  };

  return (
    <div className={`absolute w-24 md:w-44 lg:w-[300px] pointer-events-none z-0 select-none ${opacity} ${rotation} ${className}`}>
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
