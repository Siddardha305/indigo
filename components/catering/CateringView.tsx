"use client";

import React, { useState } from "react";
import PageHeader from "../layout/PageHeader";
import VioletPetals from "../decorations/VioletPetals";

export default function CateringView() {
  const [orderType, setOrderType] = useState<"pickup" | "delivery">("pickup");

  return (
    <div className="w-full bg-white font-plus-jakarta overflow-hidden">
      <PageHeader 
        title="CATERING"
        subtitle="Celebrate with Indigo and create something memorable, where every dish is a story rooted in tradition."
      />

      {/* 2. Services Offered Section */}
      <section className="relative w-full py-24 bg-[#20064A] flex flex-col items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 blur-sm pointer-events-none">
           <img src="/imges/catering/services offered/Frame 307.webp" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] px-4 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl md:text-4xl font-el-messiri mb-4 tracking-wide">Services Offered</h2>
            <div className="flex items-center justify-center w-full mb-6">
               <div className="w-24 h-px bg-[#DFAB40]/50" />
               <div className="mx-3 text-[#DFAB40] text-[10px]">✦</div>
               <div className="w-24 h-px bg-[#DFAB40]/50" />
            </div>
            <p className="text-white/70 text-sm md:text-base max-w-2xl font-medium px-4">
               Whether it&apos;s a wedding, celebration, or outdoor gathering, 
               we create experiences that go beyond just food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-[1300px]">
            {[
              { title: "LIVE FOOD STATIONS", image: "/imges/catering/services offered/Frame 584.webp" },
              { title: "WEDDING CATERING", image: "/imges/catering/services offered/Frame 585.webp" },
              { title: "OUTDOOR EVENTS", image: "/imges/catering/services offered/Frame 586.webp" }
            ].map((service, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-full mb-8">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto" 
                  />
                </div>
                <h3 className="text-white font-el-messiri text-lg md:text-xl tracking-[0.2em] text-center uppercase">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Corner Flowers */}
        <div className="absolute left-0 bottom-0 w-48 opacity-10 -translate-x-1/2 translate-y-1/2 rotate-45">
            <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto" />
        </div>
        <div className="absolute right-0 bottom-0 w-48 opacity-10 translate-x-1/2 translate-y-1/2 -rotate-45">
            <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto" />
        </div>
      </section>

      {/* 3. Elevate Section */}
      <section className="w-full py-16 flex flex-col items-center bg-white px-4 md:px-8">
          <div className="max-w-[1000px] w-full text-center relative flex flex-col items-center mb-10">
              <h2 className="text-[#20064A] text-2xl md:text-[42px] font-el-messiri mb-6 tracking-[0.05em] uppercase">ELEVATE YOUR EVENT</h2>
              
              {/* Gold Divider with Star */}
              <div className="flex items-center justify-center w-full max-w-[600px] mb-8">
                <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFAB40]/60 to-[#DFAB40]" />
                <div className="mx-4 text-[#DFAB40] scale-125">✦</div>
                <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#DFAB40]/60 to-[#DFAB40]" />
              </div>

              <p className="text-[#DFAB40] text-base md:text-[22px] font-bold italic max-w-2xl leading-tight">
                 Transform your gatherings into something truly memorable, 
                 with flavors that blend tradition, creativity, and indulgence
              </p>
              
              {/* Halal Stamp - Right Aligned as in image */}
              <div className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-20 h-20 md:w-36 md:h-36 pointer-events-none">
                  <img src="/logo/halal.png" alt="Halal Certified" className="w-full h-full object-contain" />
              </div>
          </div>

          <div className="max-w-[700px] w-full mt-4 mb-24 relative p-8 md:p-12 border border-[#DFAB40] rounded-[30px] bg-[#fdfaf1] shadow-sm overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                  <div className="grid grid-cols-8 md:grid-cols-12 gap-x-8 gap-y-12 p-8">
                      {Array.from({ length: 120 }).map((_, i) => (
                          <img key={i} src="/logo/logoicon.png" alt="" className="w-6 h-6 grayscale opacity-20" />
                      ))}
                  </div>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                  <h3 className="text-[#20064A] text-[32px] md:text-4xl font-el-messiri mb-2 tracking-wide font-medium">Let&apos;s Connect</h3>
                  
                  {/* Smaller Gold Divider */}
                  <div className="flex items-center justify-center w-full max-w-[150px] mb-6">
                    <div className="flex-1 h-[1px] bg-[#DFAB40]/60" />
                    <div className="mx-2 text-[#DFAB40] text-[8px]">✦</div>
                    <div className="flex-1 h-[1px] bg-[#DFAB40]/60" />
                  </div>

                  <p className="w-full text-[#20064A] text-xs md:text-sm font-bold tracking-normal mb-8 text-left font-plus-jakarta">
                    Share your details and we&apos;ll get back to you.
                  </p>

                  <form className="w-full flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                      {/* 1. Name */}
                      <div className="flex flex-col gap-2">
                          <label className="text-[#20064A] text-sm font-bold font-plus-jakarta pl-1">Name</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full bg-[#faedd1]/50 border border-[#20064A]/30 px-4 py-3 rounded-md text-[#20064A] shadow-inner text-sm font-plus-jakarta focus:outline-none focus:ring-1 focus:ring-[#20064A]/40" 
                          />
                      </div>

                      {/* 2. Phone - Strict Number Validation */}
                      <div className="flex flex-col gap-2">
                          <label className="text-[#20064A] text-sm font-bold font-plus-jakarta pl-1">Phone Number</label>
                          <input 
                            required 
                            type="tel" 
                            pattern="[0-9]{10}" 
                            maxLength={10}
                            placeholder="95872 65256" 
                            onKeyPress={(e) => {
                              if (!/[0-9]/.test(e.key)) {
                                e.preventDefault();
                              }
                            }}
                            className="w-full bg-[#faedd1]/50 border border-[#20064A]/30 px-4 py-3 rounded-md text-[#20064A] shadow-inner text-sm font-plus-jakarta focus:outline-none focus:ring-1 focus:ring-[#20064A]/40" 
                          />
                          <p className="text-[10px] text-[#20064A]/40 pl-1">Enter a 10-digit mobile number</p>
                      </div>

                      {/* 3. Email */}
                      <div className="flex flex-col gap-2">
                          <label className="text-[#20064A] text-sm font-bold font-plus-jakarta pl-1">Email Address</label>
                          <input 
                            required 
                            type="email" 
                            placeholder="you@example.com" 
                            className="w-full bg-[#faedd1]/50 border border-[#20064A]/30 px-4 py-3 rounded-md text-[#20064A] shadow-inner text-sm font-plus-jakarta focus:outline-none focus:ring-1 focus:ring-[#20064A]/40" 
                          />
                      </div>

                      {/* 4. Guest Count */}
                      <div className="flex flex-col gap-2">
                          <label className="text-[#20064A] text-sm font-bold font-plus-jakarta pl-1">Number of people</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Title..." 
                            onKeyPress={(e) => {
                              if (!/[0-9]/.test(e.key)) {
                                e.preventDefault();
                              }
                            }}
                            className="w-full bg-[#faedd1]/50 border border-[#20064A]/30 px-4 py-3 rounded-md text-[#20064A] shadow-inner text-sm font-plus-jakarta focus:outline-none focus:ring-1 focus:ring-[#20064A]/40" 
                          />
                      </div>

                      {/* 5. Date */}
                      <div className="flex flex-col gap-2">
                          <label className="text-[#20064A] text-sm font-bold font-plus-jakarta pl-1">Select Date</label>
                          <input 
                            required 
                            type="date" 
                            className="w-full bg-[#faedd1]/50 border border-[#20064A]/30 px-4 py-3 rounded-md text-[#20064A] shadow-inner text-sm font-plus-jakarta focus:outline-none focus:ring-1 focus:ring-[#20064A]/40" 
                          />
                      </div>

                      {/* 6. Time */}
                      <div className="flex flex-col gap-2">
                          <label className="text-[#20064A] text-sm font-bold font-plus-jakarta pl-1">Select Time</label>
                          <input 
                            required 
                            type="time" 
                            className="w-full bg-[#faedd1]/50 border border-[#20064A]/30 px-4 py-3 rounded-md text-[#20064A] shadow-inner text-sm font-plus-jakarta focus:outline-none focus:ring-1 focus:ring-[#20064A]/40" 
                          />
                      </div>

                      {/* 7. Service Type Toggle */}
                      <div className="flex border border-[#20064A]/30 rounded-md overflow-hidden h-14">
                          <button 
                            type="button" 
                            onClick={() => setOrderType("pickup")}
                            className={`flex-1 flex items-center justify-center font-bold text-sm tracking-wide transition-all ${orderType === "pickup" ? "bg-[#faedd1] text-[#20064A]" : "bg-[#c9c4b5]/60 text-[#20064A]/60"}`}
                          >
                            Pickup
                          </button>
                          <button 
                            type="button" 
                            onClick={() => setOrderType("delivery")}
                            className={`flex-1 flex items-center justify-center font-bold text-sm tracking-wide transition-all border-l border-[#20064A]/20 ${orderType === "delivery" ? "bg-[#faedd1] text-[#20064A]" : "bg-[#c9c4b5]/60 text-[#20064A]/60"}`}
                          >
                            Delivery
                          </button>
                      </div>

                      {/* Conditional Delivery Address */}
                      {orderType === "delivery" && (
                        <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                            <label className="text-[#20064A] text-sm font-bold font-plus-jakarta pl-1">Delivery Address</label>
                            <input 
                                required 
                                type="text" 
                                placeholder="House no, Street, Landmark" 
                                className="w-full bg-[#faedd1]/50 border border-[#20064A]/30 px-4 py-3 rounded-md text-[#20064A] shadow-inner text-sm font-plus-jakarta focus:outline-none focus:ring-1 focus:ring-[#20064A]/40" 
                            />
                        </div>
                      )}

                      {/* 8. Budget */}
                      <div className="flex flex-col gap-2">
                          <label className="text-[#20064A] text-sm font-bold font-plus-jakarta pl-1">Budget Per Person</label>
                          <input 
                            type="text" 
                            placeholder="Title..." 
                            className="w-full bg-[#faedd1]/50 border border-[#20064A]/30 px-4 py-3 rounded-md text-[#20064A] shadow-inner text-sm font-plus-jakarta focus:outline-none focus:ring-1 focus:ring-[#20064A]/40" 
                          />
                      </div>

                      {/* 9. Description */}
                      <div className="flex flex-col gap-2">
                          <label className="text-[#20064A] text-sm font-bold font-plus-jakarta pl-1">Description</label>
                          <textarea rows={4} placeholder="Any Special Requests" className="w-full bg-[#faedd1]/50 border border-[#20064A]/30 px-4 py-3 rounded-md text-[#20064A] shadow-inner text-sm font-plus-jakarta focus:outline-none focus:ring-1 focus:ring-[#20064A]/40 resize-none" />
                      </div>

                      {/* Submit Button */}
                      <button type="submit" className="w-full bg-[#20064A] hover:bg-[#1a053d] text-white py-4 rounded-md font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-4 transition-all mt-2 active:scale-95">
                          Send Now
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-0"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                      </button>
                  </form>
              </div>
          </div>
      </section>

      {/* Footer Corners */}
      <div className="w-full h-32 bg-white relative">
          <VioletPetals position="bottom-left" className="bottom-[-4px] left-[-4px]" opacity="opacity-10" />
          <VioletPetals position="bottom-right" className="bottom-[-4px] right-[-4px]" opacity="opacity-10" />
      </div>
    </div>
  );
}
