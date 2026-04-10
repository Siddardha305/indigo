import React from "react";

interface MenuListItemProps {
  name: string;
  description: string;
  price: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export default function MenuListItem({ name, description, price, isVegetarian, isSpicy }: MenuListItemProps) {
  return (
    <div className="flex flex-col mb-8 md:mb-10 last:mb-0 group cursor-default">
      <div className="flex justify-between items-baseline mb-2">
        <div className="flex items-center gap-2">
          <h4 className="text-[#20064A] font-brolimo text-lg md:text-xl tracking-wide group-hover:text-[#DFAB40] transition-colors duration-300">
            {name}
          </h4>
          {isVegetarian && (
            <span className="text-[#00A651]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
          )}
          {isSpicy && (
            <span className="text-[#20064A]">
               <img src="/logo/logoicon.png" alt="" className="w-4 h-4 object-contain" />
            </span>
          )}
        </div>
        <span className="text-[#20064A] font-bold text-base md:text-lg">
          ${price}
        </span>
      </div>
      <p className="text-gray-500 text-sm md:text-base leading-relaxed font-sans max-w-[90%]">
        {description}
      </p>
    </div>
  );
}
