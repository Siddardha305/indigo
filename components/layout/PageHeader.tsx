import React from "react";

interface PageHeaderProps {
  topTitle?: string;
  title: string;
  subtitle: string;
}

export default function PageHeader({ topTitle, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative w-full pt-32 pb-20 bg-white flex flex-col items-center overflow-hidden">
      {/* Mandala Flowers */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-64 md:w-96 opacity-30 pointer-events-none">
        <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-64 md:w-96 opacity-30 pointer-events-none">
        <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {topTitle && (
          <h2 className="text-[#20064A] text-xl md:text-2xl font-bold tracking-widest uppercase mb-4 font-el-messiri">
            {topTitle}
          </h2>
        )}
        
        <h1 className={`${topTitle ? 'text-5xl md:text-8xl' : 'text-4xl md:text-6xl'} text-[#20064A] font-el-messiri tracking-[0.2em] uppercase mb-6 leading-tight`}>
          {title}
        </h1>
        
        {/* Custom Gold Divider */}
        <div className="flex items-center w-full max-w-[300px] mb-8">
          <div className="flex-1 h-[1.5px] bg-[#DFAB40]/60" />
          <div className="mx-3 text-[#DFAB40]">✦</div>
          <div className="flex-1 h-[1.5px] bg-[#DFAB40]/60" />
        </div>

        <p className="text-[#20064A]/60 text-sm md:text-base font-medium max-w-xl leading-relaxed font-el-messiri">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
