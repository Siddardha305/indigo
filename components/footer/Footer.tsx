import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#20064A] text-white pt-20 pb-10 overflow-hidden font-sans">
      
      {/* Decorative Petals in Corners */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20">
         <svg viewBox="0 0 200 200" width="400" height="400" fill="none">
            <circle cx="100" cy="100" r="100" fill="#DFAB40" />
         </svg>
      </div>
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-0 opacity-20 rotate-90">
         <svg viewBox="0 0 200 200" width="400" height="400" fill="none">
            <circle cx="100" cy="100" r="100" fill="#DFAB40" />
         </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1250px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Left Column: Brand & Newsletter */}
          <div className="flex flex-col">
             {/* Large Logo */}
             <div className="mb-4">
               <h2 className="font-brolimo text-6xl md:text-8xl tracking-tight leading-none uppercase select-none">
                 INDIGO
               </h2>
               <p className="font-el-messiri text-xl md:text-2xl mt-1 tracking-widest text-[#DFAB40]/90 uppercase">
                 An Indo-Pak Restaurant
               </p>
             </div>

             <p className="text-gray-300 text-base md:text-lg mb-10 max-w-sm italic opacity-80">
                Where every flavour unveils a story rooted in culture
             </p>

             {/* Newsletter */}
             <div className="max-w-md">
                <h4 className="font-medium text-lg mb-4 text-[#DFAB40]">Subscribe to get newsletters</h4>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full bg-white border-white/10 text-[#20064A] px-6 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DFAB40] transition-all"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#C3432C] hover:bg-[#a63825] text-white p-2.5 rounded transition-colors group-hover:scale-105 active:scale-95">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
             </div>
          </div>

          {/* Right Column: Contact & Socials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Contact Details */}
            <div className="flex flex-col gap-8">
               <h4 className="font-bold text-xl font-el-messiri">Contact Us</h4>
               
               <div className="flex gap-4">
                 <div className="shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#DFAB40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                 </div>
                 <div>
                    <h5 className="font-bold text-sm text-[#DFAB40] uppercase tracking-wider mb-2">Address</h5>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-[200px]">
                      451 Minonite Road, Suite 190 Rosenberg, TX 77469
                    </p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#DFAB40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                 </div>
                 <div>
                    <h5 className="font-bold text-sm text-[#DFAB40] uppercase tracking-wider mb-2">Phone</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      (832)-451-6027
                    </p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="shrink-0 mt-1">
                    <svg className="w-6 h-6 text-[#DFAB40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                 </div>
                 <div>
                    <h5 className="font-bold text-sm text-[#DFAB40] uppercase tracking-wider mb-2">Mail</h5>
                    <p className="text-gray-300 text-sm leading-relaxed break-all">
                      rathodfrompatan@gmail.com
                    </p>
                 </div>
               </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-6">
              <h4 className="font-bold text-xl font-el-messiri">Socials</h4>
              <div className="flex gap-3">
                 {[1, 2, 3, 4].map((i) => (
                   <Link key={i} href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DFAB40] hover:text-[#20064A] transition-all duration-300">
                      {i === 1 && (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      )}
                      {i === 2 && (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.01 4.01 0 110-8.02 4.01 4.01 0 010 8.02zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg>
                      )}
                      {i === 3 && (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                      )}
                      {i === 4 && (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                      )}
                   </Link>
                 ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
           <p>© 2026 Indigo Restaurant. All rights reserved</p>
           <div className="flex gap-6">
             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
