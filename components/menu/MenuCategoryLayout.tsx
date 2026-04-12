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
    <div className="w-full max-w-[1240px] mx-auto px-4 md:px-12 py-10 md:py-16 border-[1.5px] border-[#DFAB40]/60 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
        {/* Featured Item with Image */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full aspect-[4/3] overflow-hidden shadow-xl group border-2 border-white">
            <Image
              src={featuredItem.image || "/menu/default.png"}
              alt={featuredItem.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Solid Violet Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#20064A] flex justify-between items-center px-5 py-3">
              <span className="text-white font-serif italic text-base md:text-lg">{featuredItem.name}</span>
              <span className="text-white font-bold text-lg md:text-xl">${featuredItem.price}</span>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4 mt-8">
              <button 
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-[#20064A] flex items-center justify-center text-white hover:bg-[#300a6e] transition-all shadow-md active:scale-90"
              >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-[#20064A] flex items-center justify-center text-white hover:bg-[#300a6e] transition-all shadow-md active:scale-90"
              >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
              </button>
          </div>

          <div className="mt-12 w-full">
             <MenuListItem {...featuredItem} />
          </div>
        </div>

        {/* List of other items */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 items-start max-h-[1000px] overflow-y-auto pr-4 no-scrollbar">
            {items.map((item, idx) => (
              // We'll show all items but maybe highlight the active one?
              <div 
                key={item.id} 
                className={`transition-opacity duration-300 cursor-pointer ${idx === safeIndex ? 'opacity-30' : 'opacity-100'}`}
                onClick={() => setActiveIndex(idx)}
              >
                <MenuListItem {...item} />
              </div>
            ))}
          </div>
          
          {/* Visual Indicator for more items */}
          <div className="mt-8 pt-6 border-t border-[#DFAB40]/20 flex justify-center lg:justify-start">
             <p className="text-[#20064A]/40 text-xs font-bold tracking-widest uppercase italic">
               * All items prepared fresh with traditional spices
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
