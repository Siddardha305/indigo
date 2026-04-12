import React from "react";

interface TestimonialProps {
  name: string;
  quote: string;
  rating?: number;
}

const StarRow = () => (
  <div className="flex gap-1.5 mb-6 justify-center">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="#EAAA3E">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export default function Hero6TestimonialCard({ name, quote }: TestimonialProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-white rounded-md border-[2.5px] border-[#DFAB40] shadow-md w-full h-full min-h-[250px] md:min-h-[300px]">
      
      <StarRow />
      
      <h3 className="text-[#20064A] font-el-messiri text-2xl md:text-3xl font-semibold mb-6 text-center">
        {name}
      </h3>
      
      <p className="text-[#3F2073] text-sm md:text-base font-semibold leading-relaxed text-center px-2 md:px-8 max-w-lg">
        {quote}
      </p>
      
    </div>
  );
}
