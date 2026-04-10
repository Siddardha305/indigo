import React from "react";
import { FlowerDecoration } from "../menu/MenuDecorations";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-20 relative bg-white overflow-hidden">
      {/* Corner Decorations */}
      <FlowerDecoration className="absolute top-0 right-0 w-[300px] h-[300px] translate-x-1/2 -translate-y-1/2" color="#DFAB40" />
      <FlowerDecoration className="absolute top-0 left-0 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2" color="#DFAB40" />
      
      <div className="flex flex-col items-center text-center px-4 max-w-4xl mx-auto relative z-10">
        <h1 className="text-[#20064A] text-3xl md:text-5xl lg:text-[54px] font-el-messiri tracking-wide mb-6 leading-tight uppercase">
          {title}
        </h1>
        
        {/* Custom Divider */}
        <div className="flex items-center w-64 md:w-80 mb-8">
          <div className="flex-1 h-px bg-[#DFAB40]/50" />
          <div className="mx-4 text-[#DFAB40]">✦</div>
          <div className="flex-1 h-px bg-[#DFAB40]/50" />
        </div>
        
        {subtitle && (
          <p className="text-[#20064A]/80 text-sm md:text-lg font-medium leading-relaxed max-w-2xl font-sans italic">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
