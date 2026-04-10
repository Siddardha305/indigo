import React from "react";
import Image from "next/image";

interface MenuOfferCardProps {
  tag: string;
  title: string;
  description: string;
  image: string;
}

export default function MenuOfferCard({ tag, title, description, image }: MenuOfferCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-[20px] bg-[#20064A] text-white p-6 md:p-8 flex flex-col h-full min-h-[220px] shadow-xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(32,6,74,0.25)]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-white/10 transition-colors duration-500" />
      
      <div className="relative z-10">
        <span className="inline-block px-3 py-1 rounded-full bg-[#DFAB40] text-[#20064A] text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4">
          {tag}
        </span>
        
        <h3 className="text-xl md:text-2xl font-brolimo tracking-wide mb-3 group-hover:text-[#DFAB40] transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm md:text-base text-white/80 font-medium leading-relaxed max-w-[85%]">
          {description}
        </p>
      </div>
      
      {/* Image Overlay/Pattern could be here if needed */}
    </div>
  );
}
