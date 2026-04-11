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
      <div className="flex justify-between items-baseline mb-1">
        <div className="flex items-center gap-2">
          <h4 className="text-[#B36449] font-serif text-lg md:text-xl tracking-wide group-hover:scale-[1.01] transition-transform duration-300 uppercase">
            {name}
          </h4>
          {isSpicy && (
            <span className="text-[#20064A]/40">
               {/* Lilac flower icon from screenshot */}
               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2L14.5 9H21L15.5 13L18 20L12 16L6 20L8.5 13L3 9H9.5L12 2Z" className="opacity-20" />
                 <circle cx="12" cy="12" r="3" className="opacity-40" />
               </svg>
            </span>
          )}
        </div>
        <span className="text-[#B36449] font-bold text-base md:text-lg tabular-nums">
          ${price}
        </span>
      </div>
      <p className="text-[#20064A]/80 text-[13px] md:text-sm leading-snug font-medium max-w-[95%]">
        {description}
      </p>
    </div>
  );
}
