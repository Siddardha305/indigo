import React from "react";
import Image from "next/image";

interface MenuSignatureCardProps {
  date: string;
  event: string;
  time: string;
  description: string;
  buttonText: string;
  image: string;
  highlights?: string[];
}

export default function MenuSignatureCard({ date, event, time, description, buttonText, image, highlights = [] }: MenuSignatureCardProps) {

  return (
    <div className="flex flex-col group h-full border border-[#DFAB40] bg-[#20064A] overflow-hidden shadow-xl max-w-[380px] mx-auto">
      {/* Top Part: Image with Overlays */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={event}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Date Overlay */}
        <div className="absolute top-4 left-4 flex items-baseline text-white">
          <span className="text-4xl font-serif tracking-tighter leading-none">{date.split(' ')[0]}</span>
          <span className="text-lg font-medium ml-1.5 uppercase tracking-widest">{date.split(' ')[1]}</span>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-center md:text-left">
          <h4 className="text-white font-serif text-sm md:text-base tracking-[0.1em] uppercase">
            {event}
          </h4>
        </div>
      </div>

      {/* Bottom Part: Content Box */}
      <div className="p-5 md:p-6 flex flex-col items-center flex-grow bg-white border-t border-[#DFAB40]">
        <div className="text-center mb-4">
          <p className="text-[#20064A] font-serif text-xl md:text-2xl mb-1">{time}</p>
          <p className="text-[#B36449] text-[13px] md:text-sm font-bold tracking-tight px-2">
             {description}
          </p>
        </div>

        {/* Menu Highlights Section */}
        <div className="w-full flex flex-col items-center mb-6">
           <span className="text-[#20064A] text-[9px] font-bold uppercase tracking-widest mb-3">
             Menu Highlights:
           </span>
           <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
              {highlights.map((h, i) => (
                <span key={i} className="text-[#20064A] text-[11px] font-medium flex items-center gap-2">
                  {h} {i < highlights.length - 1 && <span className="text-[#DFAB40] text-[6px]">✦</span>}
                </span>
              ))}
           </div>
        </div>

        <button className="bg-[#1A0533] text-white px-8 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-all hover:bg-[#20064A]">
          Reserve Now
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        </button>
      </div>
    </div>
  );
}
