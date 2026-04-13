import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SPECIALS_DATA } from "../menu/MenuData";

export default function HomeMenuPreview() {
  return (
    <section className="w-full py-20 md:py-32 bg-white flex flex-col items-center">
      <div className="max-w-[1400px] w-full px-4 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
          <h2 className="text-[#20064A] text-3xl md:text-5xl font-serif mb-6 tracking-wide">
            Most Loved, Freshly Served
          </h2>
          
          {/* Custom Gold Divider */}
          <div className="flex items-center w-64 md:w-96 mb-6">
            <div className="flex-1 h-px bg-[#DFAB40]/50" />
            <div className="mx-4 text-[#DFAB40]">✦</div>
            <div className="flex-1 h-px bg-[#DFAB40]/50" />
          </div>
          
          <h3 className="text-[#DFAB40] font-bold text-base md:text-lg mb-4 uppercase tracking-widest">
            Khana-E-Lazeez: Most Loved by our Patrons
          </h3>
          
          <p className="text-[#20064A]/60 text-sm md:text-base font-medium max-w-2xl px-4">
             Packed with titillating flavour bursts, these dishes keep everyone coming back for more.
          </p>
        </div>

        {/* Grid of 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full mb-20">
          {SPECIALS_DATA.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 border-[8px] border-white shadow-xl">
                <Image
                  src={item.image || "/menu/default.png"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h4 className="text-[#B36449] font-serif text-lg md:text-xl text-center mb-3 group-hover:scale-105 transition-transform uppercase tracking-wider">
                {item.name}
              </h4>
              <p className="text-[#20064A]/80 text-xs md:text-sm text-center font-medium px-4 leading-relaxed group-hover:text-[#20064A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer of section */}
        <div className="flex flex-col items-center relative w-full">
            <p className="text-[#DFAB40] font-bold text-lg md:text-xl mb-10 italic">
                There&apos;s more to discover in every flavor we serve.
            </p>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                <Link 
                    href="/menu" 
                    className="bg-[#20064A] text-white px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-all hover:bg-[#2c0964] hover:shadow-2xl active:scale-95 flex items-center gap-4"
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
