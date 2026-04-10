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
      className={`px-6 py-3 whitespace-nowrap text-xs md:text-sm font-bold tracking-[0.1em] uppercase transition-all duration-300 border-b-2 ${
        isActive 
          ? "text-[#20064A] border-[#20064A]" 
          : "text-gray-400 border-transparent hover:text-[#20064A]/60"
      }`}
    >
      {label}
    </button>
  );
}
