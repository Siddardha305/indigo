import React from "react";

interface MenuSectionHeaderProps {
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
  centered?: boolean;
}

export default function MenuSectionHeader({ 
  title, 
  subtitle, 
  theme = "light", 
  centered = true 
}: MenuSectionHeaderProps) {
  const textColor = theme === "light" ? "text-[#20064A]" : "text-white";
  const subtitleColor = theme === "light" ? "text-[#20064A]/80" : "text-white/80";

  return (
    <div className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"} mb-10 md:mb-14 px-4`}>
      <h2 className={`${textColor} text-3xl md:text-5xl lg:text-[54px] font-el-messiri tracking-wide mb-5 md:mb-7 leading-tight`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`${subtitleColor} text-sm md:text-lg max-w-2xl font-medium leading-relaxed font-sans`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
