import React from "react";
import Hero6TestimonialCard from "./Hero6TestimonialCard";

const testimonials = [
  {
    name: "Rahul K.",
    quote: "“The butter chicken was incredible, but what stood out was the warmth of the service. Felt like home.”",
  },
  {
    name: "Rahul K.",
    quote: "“The butter chicken was incredible, but what stood out was the warmth of the service. Felt like home.”",
  }
];

export default function Hero6Carousel() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full mb-12">
        {testimonials.map((test, idx) => (
          <Hero6TestimonialCard key={idx} name={test.name} quote={test.quote} />
        ))}
      </div>
      
      {/* Carousel Navigation Buttons */}
      <div className="flex items-center gap-6">
        {/* Left Arrow */}
        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#DFAB40]">
          <svg className="w-5 h-5 text-[#20064A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Right Arrow */}
        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#DFAB40]">
          <svg className="w-5 h-5 text-[#20064A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
    </div>
  );
}
