import React from "react";

interface MenuCategoryTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function MenuCategoryTab({ label, isActive, onClick }: MenuCategoryTabProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 md:px-8 py-3 h-14 md:h-16 flex items-center justify-center text-center whitespace-normal break-words text-[10px] md:text-xs font-bold tracking-[0.05em] uppercase transition-all duration-300 border-r border-[#20064A] last:border-r-0 min-w-[100px] md:min-w-[140px] flex-1 cursor-pointer ${
        isActive 
          ? "bg-[#20064A] text-white" 
          : "text-[#20064A] hover:bg-[#20064A] hover:text-white bg-white"
      }`}
    >
      <span className="max-w-[80px] md:max-w-none">
        {label}
      </span>
    </button>
  );
}
