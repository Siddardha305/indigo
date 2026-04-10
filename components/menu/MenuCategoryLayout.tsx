import React from "react";
import Image from "next/image";
import MenuListItem from "./MenuListItem";
import { MenuItem } from "./MenuData";

interface MenuCategoryLayoutProps {
  items: MenuItem[];
}

export default function MenuCategoryLayout({ items }: MenuCategoryLayoutProps) {
  if (!items || items.length === 0) {
    return (
      <div className="w-full py-20 text-center">
        <p className="text-gray-400 italic">No items available in this category yet.</p>
      </div>
    );
  }

  // We'll split items into a featured one and the rest for the list
  const featuredItem = items[0];
  const listItems = items.slice(1);

  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 py-6 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
      {/* Featured Item with Image */}
      <div className="lg:col-span-5 flex flex-col items-center">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-50 group">
          <Image
            src={featuredItem.image || "/menu/default.png"}
            alt={featuredItem.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20064A]/80 to-transparent flex flex-col justify-end p-6">
             <div className="flex justify-between items-end">
                <span className="text-white font-brolimo text-lg md:text-xl">{featuredItem.name}</span>
                <span className="text-white font-bold text-xl md:text-2xl">${featuredItem.price}</span>
             </div>
          </div>
        </div>
        
        {/* Navigation Dots/Arrows could go here */}
        <div className="flex gap-4 mt-6">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#20064A] hover:text-white transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#20064A] hover:text-white transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
        </div>
      </div>

      {/* List of other items */}
      <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {listItems.map((item) => (
          <MenuListItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
