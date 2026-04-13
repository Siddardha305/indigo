"use client";

import React, { useState } from "react";
import MenuCategoryTabs from "./MenuCategoryTabs";
import MenuCategoryLayout from "./MenuCategoryLayout";
import { MENU_DATA, MENU_CATEGORIES } from "./MenuData";

export default function MenuCategoriesView() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);

  return (
    <div className="w-full bg-white py-6 md:py-8">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
        <MenuCategoryTabs 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        <div className="w-full transition-opacity duration-500 min-h-[500px]">
          <MenuCategoryLayout key={activeCategory} items={MENU_DATA[activeCategory] || []} />
        </div>
      </div>
    </div>
  );
}
