import React from "react";
import { FlowerDecoration } from "../menu/MenuDecorations";

export default function EventsCurated() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#20064A] relative overflow-hidden">
      {/* Background with subtle blur image pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <img src="/events/bg-blur.png" alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Side flower decorations */}
      <FlowerDecoration className="absolute top-[10%] left-[-150px] w-[400px] h-[400px] opacity-15" color="#714C9F" />
      <FlowerDecoration className="absolute bottom-[-100px] right-[-150px] w-[500px] h-[500px] opacity-15" color="#714C9F" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-white text-3xl md:text-5xl font-el-messiri mb-6 tracking-wide underline decoration-[#DFAB40]/30 decoration-1 underline-offset-[12px]">
            Curated Dining Experiences
        </h2>
        
        {/* Divider */}
        <div className="flex items-center w-48 mb-10">
            <div className="flex-1 h-px bg-[#DFAB40]/50" />
            <div className="mx-4 text-[#DFAB40]">✦</div>
            <div className="flex-1 h-px bg-[#DFAB40]/50" />
        </div>

        <p className="text-white font-medium text-lg md:text-2xl mb-8 max-w-3xl leading-relaxed italic">
          Every evening takes on a new form, where taste, mood, and moments create something special
        </p>

        <p className="text-white/70 font-sans text-sm md:text-lg max-w-4xl leading-relaxed font-medium">
          Explore a calendar of thoughtfully curated events at Indigo, where each evening is built around a unique theme. Enjoy specially crafted menus, live cooking experiences, and exclusive dining offers designed to elevate your visit beyond the ordinary.
        </p>
      </div>
    </section>
  );
}
