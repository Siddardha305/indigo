"use client";

import React from "react";
import Image from "next/image";

export default function HeroFrameLayer() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/PNGS/Subtractshape.webp"
        alt="Hero Background Shape"
        fill
        className="object-contain object-bottom"
        style={{ 
          filter: 'drop-shadow(0 -2px 0 #DFAB40) drop-shadow(2px 0 0 #DFAB40) drop-shadow(-2px 0 0 #DFAB40)'
        }}
        priority
      />
    </div>
  );
}
