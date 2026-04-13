import React from "react";

export default function MainDivider({ 
  className = "", 
  align = "center" 
}: { 
  className?: string; 
  align?: "center" | "start" 
}) {
  const alignmentClass = align === "start" ? "justify-start" : "justify-center";
  const marginClass = align === "start" ? "my-6 md:my-8" : "my-8 md:my-12 mx-auto";

  return (
    <div className={`flex items-center ${alignmentClass} ${marginClass} w-full max-w-[400px] ${className}`}>
      {/* Left Line with gradient */}
      <div className={`flex-1 h-[1.5px] bg-gradient-to-r ${align === "start" ? "from-brand-yellow" : "from-transparent"} via-brand-yellow to-brand-yellow`}></div>
      
      {/* Center Diamond */}
      <div className="mx-4 transform rotate-45 w-2 h-2 md:w-2.5 md:h-2.5 bg-brand-yellow shadow-[0_0_8px_rgba(207,144,0,0.3)]"></div>
      
      {/* Right Line with gradient */}
      <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-brand-yellow to-brand-yellow"></div>
    </div>
  );
}
