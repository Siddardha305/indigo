import Image from "next/image";
import React from "react";

const GridImage = ({ src, alt, className }: { src: string; alt: string; className: string }) => (
  <div className={`relative overflow-hidden rounded-md border-[1.5px] border-[#DFAB40] shadow-lg ${className}`}>
    <Image 
      src={src} 
      alt={alt} 
      fill 
      className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
);

export default function Hero4Grid() {
  return (
    <div className="w-full">
      {/* 
        This complex bento-box grid perfectly maps mathematically to the user's requested layout.
        Using a 12-column foundation perfectly handles the top 5-7 split and the bottom 4-4-4 split!
      */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-5 w-full">
        
        {/* ROW 1 */}
        {/* Counter - spans 3 cols out of 12 */}
        <GridImage 
          src="/hero4/counter.png" 
          alt="Restaurant Counter" 
          className="md:col-span-3 h-[200px] md:h-[220px] lg:h-[280px]" 
        />
        {/* Lamp - spans 2 cols out of 12 */}
        <GridImage 
          src="/hero4/lamp.png" 
          alt="Bamboo Lamp" 
          className="md:col-span-2 h-[200px] md:h-[220px] lg:h-[280px]" 
        />
        {/* Dining Table - spans 7 cols out of 12 */}
        <GridImage 
          src="/hero4/table.png" 
          alt="Dining Table setup" 
          className="md:col-span-7 h-[200px] md:h-[220px] lg:h-[280px]" 
        />
        
        {/* ROW 2 */}
        {/* Blue Wall - spans 5 cols out of 12 */}
        <GridImage 
          src="/hero4/wall.png" 
          alt="Blue LED lights on textured wall" 
          className="md:col-span-5 h-[200px] md:h-[250px] lg:h-[320px]" 
        />
        {/* Hanging Bells - spans 7 cols out of 12 */}
        <GridImage 
          src="/hero4/bells.png" 
          alt="Hanging ethnic bells" 
          className="md:col-span-7 h-[200px] md:h-[250px] lg:h-[320px]" 
        />
        
        {/* ROW 3 */}
        {/* Hanging Lamps - spans 4 cols out of 12 */}
        <GridImage 
          src="/hero4/lamps.png" 
          alt="Modern dome lamps" 
          className="md:col-span-4 h-[200px] md:h-[240px] lg:h-[300px]" 
        />
        {/* Gold Sink - spans 4 cols out of 12 */}
        <GridImage 
          src="/hero4/sink.png" 
          alt="Gold and black marble sink" 
          className="md:col-span-4 h-[200px] md:h-[240px] lg:h-[300px]" 
        />
        {/* Wide Restaurant - spans 4 cols out of 12 */}
        <GridImage 
          src="/hero4/wide.png" 
          alt="Restaurant interior dining space" 
          className="md:col-span-4 h-[200px] md:h-[240px] lg:h-[300px]" 
        />

      </div>
    </div>
  );
}
