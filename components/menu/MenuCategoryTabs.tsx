import React from "react";
import MenuCategoryTab from "./MenuCategoryTab";
import { MENU_CATEGORIES } from "./MenuData";

interface MenuCategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function MenuCategoryTabs({ activeCategory, onCategoryChange }: MenuCategoryTabsProps) {
  return (
    <div className="w-full flex flex-col items-center mb-8 md:mb-12">
      <div className="w-full max-w-[1240px] border-b border-gray-100 overflow-x-auto no-scrollbar">
        <div className="flex justify-between md:justify-center md:gap-8 px-4">
          {MENU_CATEGORIES.map((category) => (
            <MenuCategoryTab
              key={category}
              label={category}
              isActive={activeCategory === category}
              onClick={() => onCategoryChange(category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
