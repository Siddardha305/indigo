import Image from "next/image";
import React from "react";

// White translucent rings overlaid onto the corners of the photo
const PhotoDecal = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`pointer-events-none ${className}`} width="150" height="150" fill="none">
    <circle cx="25" cy="25" r="50" fill="white" fillOpacity="0.4" />
    <circle cx="75" cy="25" r="50" fill="white" fillOpacity="0.3" />
    <circle cx="50" cy="75" r="50" fill="white" fillOpacity="0.3" />
  </svg>
);

export default function Hero5TeamImage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto my-6 relative overflow-hidden shadow-sm">
      {/* 
        The aspect ratio is extremely wide for a cinematic panorama.
        We'll use aspect-[16/7] to mimic the panoramic view of the team.
      */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/7] overflow-hidden">
        <Image 
          src="/hero5/team.png" 
          alt="The INDIGO Culinary Team" 
          fill 
          className="object-cover"
          sizes="100vw"
        />
        
        {/* Top Left Corner Translucent Decal Overlay */}
        <PhotoDecal className="absolute top-0 left-0 -translate-x-[40%] -translate-y-[40%] mix-blend-overlay rotate-[45deg]" />
        
        {/* Top Right Corner Translucent Decal Overlay */}
        <PhotoDecal className="absolute top-0 right-0 translate-x-[40%] -translate-y-[40%] mix-blend-overlay rotate-[135deg]" />
        
        {/* Bottom Left Corner Translucent Decal Overlay */}
        <PhotoDecal className="absolute bottom-0 left-0 -translate-x-[40%] translate-y-[40%] mix-blend-overlay -rotate-[45deg]" />
        
        {/* Bottom Right Corner Translucent Decal Overlay */}
        <PhotoDecal className="absolute bottom-0 right-0 translate-x-[40%] translate-y-[40%] mix-blend-overlay -rotate-[135deg]" />
        
      </div>
    </div>
  );
}
