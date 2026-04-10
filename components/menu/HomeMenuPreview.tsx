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
          <h2 className="text-[#20064A] text-3xl md:text-5xl font-el-messiri mb-6 tracking-wide underline decoration-[#DFAB40]/30 underline-offset-[12px]">
            Most Loved, Freshly Served
          </h2>
          
          {/* Custom Gold Divider */}
          <div className="flex items-center w-64 md:w-80 mb-6">
            <div className="flex-1 h-px bg-[#DFAB40]/50" />
            <div className="mx-4 text-[#DFAB40]">✦</div>
            <div className="flex-1 h-px bg-[#DFAB40]/50" />
          </div>
          
          <h3 className="text-[#DFAB40] font-bold text-lg md:text-xl mb-4 italic">
            Khana-E-Lazeez: Most Loved by our Patrons
          </h3>
          
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl">
             Packed with titillating flavour bursts, these dishes keep everyone coming back for more.
          </p>
        </div>

        {/* Grid of 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full mb-16">
          {SPECIALS_DATA.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 border border-gray-100 shadow-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h4 className="text-[#20064A] font-brolimo text-lg md:text-xl text-center mb-2 group-hover:text-[#DFAB40] transition-colors uppercase tracking-wider">
                {item.name}
              </h4>
              <p className="text-[#20064A] text-xs md:text-sm text-center font-bold px-4 leading-relaxed group-hover:text-[#20064A]/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer of section */}
        <div className="flex flex-col items-center relative w-full">
            <p className="text-[#DFAB40] font-bold text-lg md:text-xl mb-8">
                There&apos;s more to discover in every flavor we serve.
            </p>
            
            <div className="relative flex items-center">
                <Link 
                    href="/menu" 
                    className="bg-[#20064A] text-white px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all hover:bg-[#2c0964] hover:shadow-2xl active:scale-95 flex items-center gap-3"
                >
                    Explore Our Menu
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                </Link>
                
                {/* Halal Stamp - Fixed position as per design */}
                <div className="hidden md:block absolute left-full ml-12 -bottom-2 w-20 h-20">
                    <img src="/logo/halal.png" alt="Halal Certified" className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
