import Image from "next/image";
import React from "react";

export default function Hero3Content() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-16 mt-4 font-sans">
      
      {/* Narrative content - Left side */}
      <div className="flex flex-col flex-1 w-full max-w-xl text-left pl-4 md:pl-8 lg:pl-12 xl:pl-20">
        <p className="text-brand-blue text-base md:text-[17px] font-semibold tracking-wide leading-loose mb-8">
          For centuries, the Indus people blended rich spices and arid pulses with their own cultural intricacies and passed down traditions. Each delicacy is a complex story of the people and their love for their land.
        </p>
        
        <p className="text-brand-yellow text-lg md:text-[20px] font-el-messiri tracking-wide font-semibold leading-relaxed">
          At Indigo, we bring these savoury stories from India and Pakistan to your plate.
        </p>
      </div>

      {/* Featured Image - Right side */}
      <div className="flex-1 w-full flex justify-end items-center relative">
        <div 
          className="relative w-full max-w-[650px] aspect-[4/3] overflow-hidden"
          style={{ 
            // Masking the LEFT and BOTTOM edges to blend into the white background
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%), linear-gradient(to top, transparent 0%, black 15%)',
            maskComposite: 'intersect',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%), linear-gradient(to top, transparent 0%, black 10%)',
            WebkitMaskComposite: 'source-in'
          }}
        >
          <Image 
            src="/imges/home/indigo story/1478842f-5e63-4601-bc2a-863f8e97d548 1.webp" 
            alt="Indigo Restaurant Story" 
            fill 
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
