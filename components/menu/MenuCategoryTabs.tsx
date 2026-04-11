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
      <div className="w-full max-w-[1240px] border border-[#20064A] overflow-x-auto no-scrollbar bg-white">
        <div className="flex justify-start lg:justify-center min-w-max md:min-w-0">
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
