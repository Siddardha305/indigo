import React from "react";
import Link from "next/link";

export default function MenuCTA() {
  return (
    <div className="w-full py-16 md:py-24 px-4 flex flex-col items-center bg-[#FCFAF0] relative overflow-hidden">
        {/* Background Decorative patterns */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5 translate-x-[-20%] translate-y-[-20%] scale-[2]">
            <img src="/logo/logoicon.png" alt="" className="w-full h-full object-contain rotate-[15deg]" />
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5 translate-x-[20%] translate-y-[20%] scale-[2]">
            <img src="/logo/logoicon.png" alt="" className="w-full h-full object-contain rotate-[-15deg]" />
        </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <h2 className="text-[#20064A] text-4xl md:text-5xl font-el-messiri mb-6">Ready To Dine With Us?</h2>
        <p className="text-[#20064A]/70 font-medium mb-10 max-w-xl text-sm md:text-base italic">
           Reserve your table now and embark on a culinary journey into the heart of authentic Indo-Pak flavors.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link 
                href="/reservation" 
                className="bg-[#20064A] text-white px-10 py-4 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest transition-all hover:bg-[#2c0964] hover:shadow-xl active:scale-95"
            >
                Reserve A Table
            </Link>
            <Link 
                href="/contact" 
                className="bg-transparent border-2 border-[#20064A] text-[#20064A] px-10 py-4 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest transition-all hover:bg-[#20064A] hover:text-white active:scale-95"
            >
                Contact Us
            </Link>
        </div>
      </div>
    </div>
  );
}
