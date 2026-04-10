import React from "react";

interface EventsSectionHeaderProps {
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
}

export default function EventsSectionHeader({ title, subtitle, theme = "light" }: EventsSectionHeaderProps) {
  const textColor = theme === "light" ? "text-[#20064A]" : "text-white";
  const subtitleColor = theme === "light" ? "text-[#20064A]/80" : "text-white/80";

  return (
    <div className="flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
      <h2 className={`${textColor} text-3xl md:text-5xl lg:text-[54px] font-el-messiri tracking-wide mb-6 leading-tight uppercase`}>
        {title}
      </h2>
      
      {/* Custom Divider */}
      <div className="flex items-center w-64 md:w-80 mb-8">
        <div className="flex-1 h-px bg-[#DFAB40]/50" />
        <div className="mx-4 text-[#DFAB40]">✦</div>
        <div className="flex-1 h-px bg-[#DFAB40]/50" />
      </div>
      
      {subtitle && (
        <p className={`${subtitleColor} text-sm md:text-lg font-medium leading-relaxed max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
