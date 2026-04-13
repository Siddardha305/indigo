import React from "react";

interface MenuListItemProps {
  name: string;
  description: string;
  price: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
}

export default function MenuListItem({ name, description, price, isVegetarian, isSpicy, isPopular }: MenuListItemProps) {
  return (
    <div className="flex flex-col mb-8 md:mb-10 last:mb-0 group cursor-default">
      <div className="flex justify-between items-baseline mb-1">
        <div className="flex items-center gap-2">
          {isPopular && (
            <span className="text-[#9b6dbb] brightness-90">
               {/* Lilac flower icon */}
               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zM6 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm10.5-5.5c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8 2 .8 2.8 0 .8-2 0-2.8zm-9 9c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8 2 .8 2.8 0 .8-2 0-2.8zm9 0c-.8.8-.8 2 0 2.8s2 .8 2.8 0 .8-2 0-2.8-.8-2 0-2.8zm-9-9c-.8.8-.8 2 0 2.8s2 .8 2.8 0 .8-2 0-2.8-.8-2 0-2.8z" />
               </svg>
            </span>
          )}
          <h4 className="text-[#B36449] font-el-messiri text-lg md:text-xl tracking-wide group-hover:scale-[1.01] transition-transform duration-300 uppercase">
            {name}
          </h4>
          {isSpicy && (
            <span className="text-red-600/80">
               {/* Chili icon or dot */}
               <span className="text-xs">🌶️</span>
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
