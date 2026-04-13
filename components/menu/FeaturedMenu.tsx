import React from "react";
import MenuSectionHeader from "./MenuSectionHeader";
import MenuOfferCard from "./MenuOfferCard";
import MenuCategoriesView from "./MenuCategoriesView";
import MenuSpecialCard from "./MenuSpecialCard";
import MenuSignatureCard from "./MenuSignatureCard";
import MenuCTA from "./MenuCTA";
import { OFFERS_DATA, SPECIALS_DATA, SIGNATURE_DATA } from "./MenuData";

import { FlowerDecoration } from "./MenuDecorations";
import VioletPetals from "../decorations/VioletPetals";

import PageHeader from "../layout/PageHeader";

export default function FeaturedMenu() {
  return (
    <section id="menu" className="w-full bg-white flex flex-col items-center relative overflow-hidden">
      {/* 1. Page Header Section */}
      <PageHeader 
        title="Our Menu" 
        subtitle="From spices that carry memories of time and tradition, to dishes that turn items into stories on your plate."
      />

      {/* 2. Today's Offers Section */}
      <div className="w-full max-w-[1400px] px-4 mb-20 md:mb-32">
        <div className="flex flex-col items-center mb-10 md:mb-14">
            <h3 className="text-[#20064A] font-brolimo text-2xl md:text-3xl tracking-widest uppercase mb-4">TODAY&apos;S OFFER</h3>
            <p className="text-gray-400 text-xs md:text-sm font-bold tracking-wider uppercase text-center max-w-md">Thoughtfully crafted for today&apos;s special table, where every bite tells a tale of indulgent care.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto no-scrollbar py-4">
          {OFFERS_DATA.map((offer) => (
            <MenuOfferCard key={offer.id} {...offer} />
          ))}
          {/* We'll add one more dummy offer to match the 3 in the screenshot if needed */}
          <MenuOfferCard 
            tag="Chef's Special"
            title="INDO-PAK BANQUET"
            description="A grand selection of our most loved starters, mains and desserts."
            image="/menu/offer3.png"
          />
        </div>
        
        {/* Navigation Dots */}
        <div className="flex gap-2.5 mt-8 justify-center">
            <button className="w-2.5 h-2.5 rounded-full bg-[#20064A]" />
            <button className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        </div>
      </div>

      {/* 3. The Interactive Menu Tab Section */}
      <div className="w-full bg-white relative pb-10 md:pb-16 overflow-hidden">
        {/* Side Decorations */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 md:w-80 h-auto opacity-30 pointer-events-none select-none -translate-x-1/2">
            <img src="/PNGS/half-flower.png" alt="" className="w-full h-auto object-contain" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-80 h-auto opacity-30 pointer-events-none select-none translate-x-1/2">
            <img src="/PNGS/half-flower.png" alt="" className="w-full h-auto object-contain scale-x-[-1]" />
        </div>

        <div className="w-full max-w-[1400px] mx-auto pt-10 md:pt-16 flex flex-col items-center">
             <div className="flex flex-col items-center mb-6 relative w-full px-4">
                <h3 className="text-[#20064A] font-el-messiri text-3xl md:text-5xl text-center mb-2 tracking-[0.1em] uppercase">INDIGO&apos;S MENU</h3>
                
                {/* Custom Divider */}
                <div className="flex items-center w-full max-w-[280px] mb-8">
                    <div className="flex-1 h-[1.5px] bg-[#DFAB40]/60" />
                </div>
                
                <p className="text-[#20064A]/60 text-xs md:text-sm font-medium text-center max-w-xl mb-4 leading-relaxed font-sans">
                  Each experience is crafted with care, bringing together taste, mood, and memorable moments.
                </p>
                
                {/* Halal Stamp - In Green Circle like design */}
                <div className="absolute right-4 md:right-10 top-0 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                    <div className="w-full h-full relative group cursor-pointer transition-transform hover:scale-110">
                        <img src="/logo/halal.png" alt="Halal Certified" className="w-full h-full object-contain" />
                        <svg className="absolute inset-0 w-full h-full text-[#00A651]" viewBox="0 0 100 100">
                           <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2.5" />
                           <path d="M50 2 A48 48 0 0 1 98 50" fill="none" stroke="currentColor" strokeWidth="2.5" />
                        </svg>
                    </div>
                </div>
             </div>
             <MenuCategoriesView />
        </div>
      </div>

      {/* 4. Our Specials Slider/Grid */}
      <div className="w-full py-20 md:py-32 flex flex-col items-center bg-white">
        <div className="mb-14 md:mb-20 text-center">
            <h3 className="text-[#20064A] font-brolimo text-2xl md:text-4xl uppercase mb-5">OUR SPECIALS</h3>
            <p className="text-gray-400 text-sm md:text-base font-medium">Food worth finding. Flavours found, these are names everyone keeps coming back for.</p>
        </div>
        
        <div className="w-full max-w-[1300px] px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {SPECIALS_DATA.map((special) => (
                <MenuSpecialCard key={special.id} {...special} />
            ))}
        </div>
        
        {/* Simple Arrows for Mobile */}
        <div className="flex gap-4 mt-12 lg:hidden">
            <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg></button>
            <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></button>
        </div>
      </div>

      {/* 5. Signature Dining Section (The Dark Themed events) */}
      <div id="events" className="w-full py-20 md:py-32 bg-[#20064A] relative overflow-hidden">
        {/* Patterned Background Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-8 p-4">
             {Array.from({ length: 48 }).map((_, i) => (
                <img key={i} src="/logo/logoicon.png" alt="" className="w-8 h-8 opacity-20" />
             ))}
          </div>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col items-center relative z-10">
            <div className="text-center mb-16 flex flex-col items-center">
                <h2 className="text-white text-2xl md:text-5xl font-serif mb-4 tracking-wide">Signature Dining Experiences</h2>
                
                {/* Custom Gold Divider */}
                <div className="flex items-center w-full max-w-[150px] mb-6">
                    <div className="flex-1 h-px bg-[#DFAB40]/50" />
                    <div className="mx-3 text-[#DFAB40] text-[10px]">✦</div>
                    <div className="flex-1 h-px bg-[#DFAB40]/50" />
                </div>

                <p className="text-white/60 font-medium max-w-2xl px-4 text-xs md:text-sm">
                  Crafted with intention, each evening offers a distinct blend of taste, atmosphere, and storytelling.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1100px] mb-10">
                {SIGNATURE_DATA.map((item) => (
                    <MenuSignatureCard key={item.id} {...item} />
                ))}
            </div>
        </div>
      </div>

      {/* 6. Ready To Dine CTA */}
      <div id="contact" className="w-full">
        <MenuCTA />
      </div>
    </section>
  );
}
