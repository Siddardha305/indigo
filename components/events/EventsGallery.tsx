"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EVENTS_DATA, EVENT_CATEGORIES, EventItem } from "./EventsData";

const EventCard = ({ event }: { event: EventItem }) => (
  <div className="bg-white rounded-[24px] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
    <div className="relative h-[200px] md:h-[260px] w-full border-b border-gray-100">
      <Image 
        src={event.image} 
        alt={event.title} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute top-5 left-5 bg-white text-[#20064A] p-2 md:p-3 rounded-xl flex flex-col items-center min-w-[60px] md:min-w-[70px] shadow-lg">
        <span className="text-xl md:text-2xl font-bold leading-none">{event.date}</span>
        <span className="text-xs md:text-sm font-medium uppercase tracking-tight">{event.month}</span>
      </div>
    </div>
    
    <div className="p-6 md:p-8 flex flex-col items-center text-center">
      <h4 className="text-[#20064A] font-brolimo text-xl md:text-2xl mb-5 group-hover:text-[#DFAB40] transition-colors">{event.title}</h4>
      
      <div className="flex flex-col gap-2 mb-8 items-center">
        <p className="text-[#20064A] font-bold text-sm md:text-base tracking-wide">{event.time}</p>
        <p className="text-gray-500 font-medium italic text-sm">{event.description}</p>
      </div>
      
      <div className="w-full flex justify-center gap-3 mb-8">
        {event.highlights.map((h, i) => (
          <span key={i} className="text-[10px] md:text-xs text-blue-800 font-bold uppercase tracking-widest">{h}</span>
        ))}
      </div>
      
      <button className="w-full py-4 rounded-xl bg-[#20064A] text-white font-bold text-xs uppercase tracking-widest transition-all hover:bg-[#2c0964] hover:shadow-xl active:scale-95">
        Reserve Now
      </button>
    </div>
  </div>
);

export default function EventsGallery() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredEvents = activeCategory === "ALL" 
    ? EVENTS_DATA 
    : EVENTS_DATA.filter(e => e.category === activeCategory);

  return (
    <section className="w-full py-24 md:py-32 bg-[#1b1b1b] relative overflow-hidden">
      {/* Subtle Leaf Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/logo/leaf-pattern.png')] bg-repeat bg-[length:120px_120px]" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 px-4">
            <h2 className="text-white text-3xl md:text-5xl font-el-messiri tracking-wide mb-8 leading-tight uppercase">EXPERIENCES, CURATED FOR YOU</h2>
            <p className="text-[#DFAB40] font-medium text-sm md:text-lg max-w-2xl leading-relaxed italic">
                Crafted with intention, each evening offers a distinct blend of taste, atmosphere, and storytelling.
            </p>
        </div>

        {/* Categories / Tabs */}
        <div className="w-full max-w-[1240px] mx-auto mb-16 md:mb-24 px-4 overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex bg-white/5 p-1 rounded-xl min-w-max md:w-fit md:mx-auto">
                {EVENT_CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-3 transition-all duration-300 text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase rounded-lg ${
                            activeCategory === cat 
                                ? "bg-[#DFAB40] text-[#20064A]" 
                                : "text-white/60 hover:text-white"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-[1200px] mx-auto">
            {filteredEvents.length > 0 ? (
                filteredEvents.map(event => <EventCard key={event.id} event={event} />)
            ) : (
                <div className="col-span-full py-20 text-center text-white/40 italic">Coming soon...</div>
            )}
        </div>
      </div>
    </section>
  );
}
