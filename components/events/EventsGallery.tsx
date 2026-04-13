"use client";

import React, { useState } from "react";
import { EVENTS_DATA, EVENT_CATEGORIES } from "./EventsData";
import MenuSignatureCard from "../menu/MenuSignatureCard";

export default function EventsGallery() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredEvents = activeCategory === "ALL" 
    ? EVENTS_DATA 
    : EVENTS_DATA.filter(e => e.category === activeCategory);

  return (
    <section className="w-full py-24 md:py-32 bg-[#20064A] relative overflow-hidden">
      {/* Background Decorative Wheat Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-12 p-8">
             {Array.from({ length: 96 }).map((_, i) => (
                <img key={i} src="/logo/logoicon.png" alt="" className="w-10 h-10 opacity-20" />
             ))}
          </div>
      </div>

      {/* Decorative Flowers in the corners of this section */}
      <div className="absolute left-0 bottom-0 w-56 md:w-72 h-auto opacity-10 -translate-x-1/2 translate-y-1/2 pointer-events-none">
          <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto object-contain" />
      </div>
      <div className="absolute right-0 bottom-0 w-56 md:w-72 h-auto opacity-10 translate-x-1/2 translate-y-1/2 pointer-events-none">
          <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto object-contain" />
      </div>
      
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <h3 className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-4 opacity-70">Experiences, Curated For You</h3>
            
            <h2 className="text-white text-3xl md:text-5xl font-el-messiri tracking-wide mb-8 uppercase">EXPERIENCES, CURATED FOR YOU</h2>
            
            {/* Divider */}
            <div className="flex items-center w-full max-w-[160px] mb-8">
                <div className="flex-1 h-px bg-[#DFAB40]/40" />
                <div className="mx-3 text-[#DFAB40] text-[8px]">✦</div>
                <div className="flex-1 h-px bg-[#DFAB40]/40" />
            </div>

            <p className="text-[#DFAB40] font-medium text-sm md:text-lg max-w-2xl leading-relaxed italic opacity-80">
                Crafted with intention, each evening offers a distinct blend of taste, atmosphere, and storytelling.
            </p>
        </div>

        {/* Filter Tabs */}
        <div className="w-full max-w-[1000px] mx-auto mb-16 md:mb-20 overflow-x-auto no-scrollbar">
            <div className="flex bg-white/5 backdrop-blur-sm p-1 rounded-sm border border-white/10 min-w-max justify-center">
                {EVENT_CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-8 py-3.5 transition-all duration-300 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase whitespace-nowrap ${
                            activeCategory === cat 
                                ? "bg-[#DFAB40] text-[#20064A]" 
                                : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Events Grid - 2 columns for a more "Experiences" feel as per screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 w-full max-w-[1100px] mx-auto">
            {filteredEvents.length > 0 ? (
                filteredEvents.map(event => (
                  <MenuSignatureCard 
                    key={event.id}
                    date={`${event.date} ${event.month}`}
                    event={event.title}
                    time={event.time}
                    description={event.description}
                    buttonText="Reserve Now"
                    image={event.image}
                    highlights={event.highlights}
                  />
                ))
            ) : (
                <div className="col-span-full py-24 text-center text-white/30 italic font-medium tracking-widest uppercase">
                  More curated experiences coming soon...
                </div>
            )}
        </div>
      </div>
    </section>
  );
}
