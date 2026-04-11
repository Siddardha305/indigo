import React from "react";

export default function EventsCurated() {
  return (
    <section className="w-full py-24 md:py-40 bg-[#1A0533] relative overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
         <img 
            src="/events/curated-bg.png" 
            alt="" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#20064A]/80 via-[#20064A]/60 to-[#20064A]/90" />
      </div>
      
      {/* Side Decorative Flowers (Subtle Violet) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-auto opacity-10 pointer-events-none">
          <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-white text-3xl md:text-5xl font-serif mb-6 tracking-wide">
            Curated Dining Experiences
        </h2>
        
        {/* Custom Gold Divider */}
        <div className="flex items-center w-full max-w-[200px] mb-10">
            <div className="flex-1 h-px bg-[#DFAB40]/50" />
            <div className="mx-4 text-[#DFAB40] text-[10px]">✦</div>
            <div className="flex-1 h-px bg-[#DFAB40]/50" />
        </div>

        <p className="text-[#DFAB40] font-serif text-lg md:text-2xl mb-12 max-w-2xl leading-relaxed italic opacity-90">
          "Every evening takes on a new form, where taste, mood, and moments create something special"
        </p>

        <p className="text-white/70 font-sans text-sm md:text-lg max-w-3xl leading-relaxed font-medium">
          Explore a calendar of thoughtfully curated events at Indigo, where each evening is built around a unique theme. Enjoy specially crafted menus, live cooking experiences, and exclusive dining offers designed to elevate your visit beyond the ordinary.
        </p>
      </div>
    </section>
  );
}
