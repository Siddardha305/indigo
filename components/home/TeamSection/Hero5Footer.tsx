import React from "react";
import Link from "next/link";

export default function Hero5Footer() {
  return (
    <div className="flex flex-col items-center mt-10 md:mt-12 w-full text-center">
      
      <p className="text-[#D8A131] font-semibold text-base md:text-xl font-sans tracking-wide max-w-3xl mb-8">
        Bring your craft to a kitchen that values tradition and growth.
      </p>

      <Link 
        href="/careers" 
        className="bg-[#20064A] text-white px-8 md:px-10 py-3 md:py-3.5 rounded-md font-medium text-base md:text-[17px] flex items-center transition-all duration-300 hover:bg-[#3f127a] hover:shadow-[0_8px_24px_0_rgba(45,10,89,0.25)] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#20064A]"
      >
        <span>Join Our Team</span>
        <svg className="w-5 h-5 ml-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
      
    </div>
  );
}
