"use client";

import React, { useState } from "react";
import Hero6TestimonialCard from "./Hero6TestimonialCard";

const testimonials = [
  {
    name: "Sarah M.",
    quote: "“The curries are fantastic, flavorful, rich with texture and the cheese naan was WAY cheesy delicious!”",
  },
  {
    name: "Jason R.",
    quote: "“Loved the beautiful ambience with the decor and traditional artwork. The service was friendly and efficient.”",
  },
  {
    name: "Amit S.",
    quote: "“Food was exceptionally delicious, tender and nicely seasoned. Authentic taste and generous portions.”",
  },
  {
    name: "Elena G.",
    quote: "“I highly recommend you stop by as the ambiance was amazingly beautiful! Definitely will be coming back!”",
  },
  {
    name: "Raj P.",
    quote: "“The best Indo-Pak food in the area. The biryani is a must-try, perfectly spiced and aromatic!”",
  },
  {
    name: "Linda W.",
    quote: "“Friendly staff and a very clean restaurant. We enjoyed every dish we ordered. Five stars!”",
  }
];

export default function Hero6Carousel() {
  const [startIndex, setStartIndex] = useState(0);

  const nextTestimonials = () => {
    setStartIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prevTestimonials = () => {
    setStartIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  // Get current 2 testimonials
  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length]
  ];

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full mb-12 min-h-[220px]">
        {visibleTestimonials.map((test, idx) => (
          <div key={`${startIndex}-${idx}`} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Hero6TestimonialCard name={test.name} quote={test.quote} />
          </div>
        ))}
      </div>
      
      {/* Carousel Navigation Buttons */}
      <div className="flex items-center gap-6">
        {/* Left Arrow */}
        <button 
          onClick={prevTestimonials}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#DFAB40]"
          aria-label="Previous reviews"
        >
          <svg className="w-5 h-5 text-[#20064A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Right Arrow */}
        <button 
          onClick={nextTestimonials}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#DFAB40]"
          aria-label="Next reviews"
        >
          <svg className="w-5 h-5 text-[#20064A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
    </div>
  );
}
