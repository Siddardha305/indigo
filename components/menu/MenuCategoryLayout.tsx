"use client";

import React, { useState } from "react";
import Image from "next/image";
import MenuListItem from "./MenuListItem";
import { MenuItem } from "./MenuData";

interface MenuCategoryLayoutProps {
  items: MenuItem[];
}

export default function MenuCategoryLayout({ items }: MenuCategoryLayoutProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items || items.length === 0) {
    return (
      <div className="w-full py-20 text-center">
        <p className="text-gray-400 italic">No items available in this category yet.</p>
      </div>
    );
  }

  // Safety check to ensure activeIndex is within bounds if items change
  const safeIndex = activeIndex >= items.length ? 0 : activeIndex;
  const featuredItem = items[safeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 md:px-8 py-6 md:py-10 border-[1.5px] border-[#DFAB40]/40 relative bg-white shadow-sm rounded-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        
        {/* Left Column - Fixed Image (lg:col-span-3) */}
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-32 flex flex-col items-center">
            {/* Featured Card Design (Matching Screenshot) */}
            <div className="relative w-full max-w-[280px] aspect-[4/5] overflow-hidden shadow-2xl group border-2 border-white bg-[#fafafa]">
              <Image
                src={featuredItem.image || "/menu/default.png"}
                alt={featuredItem.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Top-Right Price Pill */}
              <div className="absolute top-4 right-4 bg-[#6E0E0A] text-white px-5 py-1.5 rounded-full font-bold text-sm shadow-xl z-20 tracking-wider">
                ${featuredItem.price}
              </div>
              {/* Bottom Gradient with Name */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 z-10">
                <span className="text-white font-el-messiri text-xl md:text-2xl leading-snug tracking-wide">
                  {featuredItem.name}
                </span>
              </div>
            </div>
            
            {/* Navigation Arrows (Matching Screenshot Style) */}
            <div className="flex gap-4 mt-8">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#20064A] hover:bg-gray-50 transition-all shadow-md active:scale-95 translate-y-2 md:translate-y-0"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#20064A] hover:bg-gray-50 transition-all shadow-md active:scale-95 translate-y-2 md:translate-y-0"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
            </div>
          </div>
        </div>

        {/* Right Columns - Scrollable Menu (lg:col-span-9) */}
        <div className="lg:col-span-9 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 items-start max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {items.map((item, idx) => (
              <div 
                key={item.id} 
                className={`transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-[#fafafa] ${idx === safeIndex ? 'ring-1 ring-[#DFAB40]/30 bg-[#fafafa]' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <MenuListItem {...item} />
              </div>
            ))}
          </div>
          
          {/* Section Disclaimer */}
          <div className="mt-8 pt-4 border-t border-[#DFAB40]/20 flex justify-center lg:justify-start">
             <p className="text-[#20064A]/40 text-[10px] font-bold tracking-widest uppercase italic">
               * All items prepared fresh with traditional spices & herbs
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
