import React from "react";
import Image from "next/image";

interface WhitePetalsProps {
  className?: string; // For absolute positioning (e.g., "top-[-4px] right-[-4px]")
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  opacity?: string; // For custom transparency levels
  rotation?: string;
}

export default function WhitePetals({ className = "", position, opacity = "opacity-100", rotation = "" }: WhitePetalsProps) {
  const images = {
    "top-left": "/PNGS/flowers/left-corner-white.png", // Correct mapping
    "top-right": "/PNGS/flowers/rightcorner-white.png", 
    "bottom-left": "/PNGS/flowers/left-corner-white.png",
    "bottom-right": "/PNGS/flowers/rightcorner-white.png",
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
