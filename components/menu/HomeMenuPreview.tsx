"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SPECIALS_DATA } from "../menu/MenuData";
import MainDivider from "../decorations/MainDivider";

export default function HomeMenuPreview() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#fafafa] flex flex-col items-center font-sans overflow-hidden">
      <div className="max-w-[1400px] w-full px-4 flex flex-col items-center relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
          <h2 className="text-brand-blue text-3xl md:text-5xl font-el-messiri mb-6 tracking-wide">
            Most Loved, Freshly Served
          </h2>
          
          <MainDivider />
          
          <h3 className="text-brand-yellow font-bold text-base md:text-lg mb-4 uppercase tracking-widest font-el-messiri">
            Khana-E-Lazeez: Most Loved by our Patrons
          </h3>
          
          <p className="text-brand-blue/70 text-sm md:text-base font-medium max-w-2xl px-4">
             Packed with titillating flavour bursts, these dishes keep everyone coming back for more.
          </p>
        </div>

        {/* Infinite Scrolling Ribbon */}
        <div className="w-full overflow-hidden mb-20 relative group">
          
          <div className="flex animate-scroll-right-to-left whitespace-nowrap py-10">
            {/* Doubling the data for a seamless loop */}
            {[...SPECIALS_DATA, ...SPECIALS_DATA].map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`} 
                className="inline-flex flex-col w-[280px] md:w-[350px] mx-4 md:mx-6 group/item cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 border-[6px] md:border-[8px] border-white shadow-xl transition-transform duration-500 group-hover/item:shadow-2xl">
                  <Image
                    src={item.image || "/menu/default.png"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/item:scale-110"
                    sizes="(max-width: 768px) 300px, 400px"
                  />
                </div>
                <h4 className="text-brand-maroon font-el-messiri text-lg md:text-xl text-center mb-2 uppercase tracking-widest">
                  {item.name}
                </h4>
                <p className="text-brand-blue/80 text-xs md:text-sm text-center font-medium px-4 whitespace-normal line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          @keyframes scroll-right-to-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-right-to-left {
            animation: scroll-right-to-left 40s linear infinite;
            width: max-content;
          }
          .animate-scroll-right-to-left:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Footer of section */}
        <div className="flex flex-col items-center relative w-full">
            <p className="text-brand-yellow font-bold text-lg md:text-xl mb-10 font-el-messiri">
                There&apos;s more to discover in every flavor we serve.
            </p>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                <Link 
                    href="/menu" 
                    className="bg-brand-blue text-brand-white px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-all hover:opacity-90 hover:shadow-2xl active:scale-95 flex items-center gap-4"
                >
                    Explore Our Menu
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                </Link>
                
                {/* Halal Stamp */}
                <div className="md:absolute md:left-full md:ml-16 md:-bottom-4 w-20 h-20 md:w-24 md:h-24">
                    <img src="/logo/halal.png" alt="Halal Certified" className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
