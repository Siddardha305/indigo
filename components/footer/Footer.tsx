import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#20064A] text-white pt-24 pb-8 overflow-hidden font-sans border-t border-white/5">
      {/* Main Container */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 pb-20">
          
          {/* Left Column: Brand & Newsletter */}
          <div className="flex flex-col">
             {/* Large Logo */}
             <div className="mb-6">
               <h2 className="font-serif text-6xl md:text-8xl tracking-tight leading-none select-none uppercase">
                 INDIGO
               </h2>
               <p className="font-serif text-lg md:text-xl tracking-[0.2em] text-white opacity-90 uppercase mt-2">
                 An Indo-Pak Restaurant
               </p>
             </div>

             <p className="text-white/60 text-sm md:text-base mb-12 max-w-sm font-medium">
                Where every flavour unveils a story rooted in culture
             </p>

             {/* Newsletter */}
             <div className="max-w-md w-full">
                <h4 className="font-bold text-sm md:text-base mb-5 tracking-wide">Subscribe to get newsletters</h4>
                <div className="relative flex items-center">
                   <input 
                     type="email" 
                     placeholder="Enter your email address"
                     className="w-full bg-white text-[#20064A] px-6 py-4 rounded-sm focus:outline-none text-sm placeholder:text-[#20064A]/40"
                   />
                   <button className="absolute right-0 top-0 bottom-0 bg-[#D95D39] hover:bg-[#c44d2d] text-white px-5 flex items-center justify-center transition-colors">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                   </button>
                </div>
             </div>
          </div>

          {/* Right Column: Contact & Socials */}
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
            {/* Contact Details */}
            <div className="flex flex-col gap-10">
               <h4 className="font-bold text-lg md:text-xl tracking-wide opacity-90">Contact Us</h4>
               
               <div className="flex gap-5">
                 <div className="shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 </div>
                 <div>
                    <h5 className="font-bold text-sm text-white mb-3 tracking-widest uppercase">Address</h5>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-[220px] font-medium">
                      451 Minonite Road, Suite 190 Rosenberg, TX 77469
                    </p>
                 </div>
               </div>

               <div className="flex gap-5">
                 <div className="shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                 </div>
                 <div>
                    <h5 className="font-bold text-sm text-white mb-3 tracking-widest uppercase">Phone</h5>
                    <p className="text-white/60 text-xs md:text-sm font-medium">
                      (832)-451-6027
                    </p>
                 </div>
               </div>

               <div className="flex gap-5">
                 <div className="shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                 </div>
                 <div>
                    <h5 className="font-bold text-sm text-white mb-3 tracking-widest uppercase">Mail</h5>
                    <p className="text-white/60 text-xs md:text-sm font-medium">
                      rathodfrompatan@gmail.com
                    </p>
                 </div>
               </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-8">
              <h4 className="font-bold text-lg md:text-xl tracking-wide opacity-90">Socials</h4>
              <div className="flex gap-4">
                 {[1, 2, 3, 4].map((i) => (
                   <Link key={i} href="#" className="w-12 h-12 rounded-full bg-white/80 hover:bg-white transition-all shadow-lg" />
                 ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Area with Corner Flowers */}
        <div className="relative pt-10 flex flex-col items-center">
            {/* Left Flower - Precisely in corner */}
            <div className="absolute left-0 bottom-0 w-64 md:w-96 h-auto opacity-20 -translate-x-1/2 translate-y-1/2 pointer-events-none z-0">
                <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto object-contain" />
            </div>
            
            {/* Right Flower - Precisely in corner */}
            <div className="absolute right-0 bottom-0 w-64 md:w-96 h-auto opacity-20 translate-x-1/2 translate-y-1/2 pointer-events-none z-0">
                <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto object-contain" />
            </div>

            <div className="w-full text-center border-t border-white/5 pt-8 z-10">
               <p className="text-white/40 text-xs md:text-sm font-medium tracking-wide">
                 © 2026 Indigo Restaurant. All rights reserved
               </p>
            </div>
        </div>
      </div>
    </footer>

  );
}
