import React from "react";
import Image from "next/image";

interface MenuSignatureCardProps {
  date: string;
  event: string;
  time: string;
  description: string;
  buttonText: string;
  image: string;
}

export default function MenuSignatureCard({ date, event, time, description, buttonText, image }: MenuSignatureCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-[24px] bg-white shadow-lg flex flex-col items-center p-6 md:p-8 border border-white/10 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
      <div className="relative w-full h-[180px] md:h-[220px] rounded-2xl overflow-hidden mb-8">
        <Image
          src={image}
          alt={event}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-[#DFAB40] text-[#20064A] px-3 py-1 rounded-lg">
            <span className="text-xl font-bold font-sans">{date.split(' ')[0]}</span>
            <span className="text-sm font-medium ml-1">{date.split(' ')[1]}</span>
        </div>
      </div>
      
      <div className="text-center w-full">
        <h4 className="text-[#20064A] font-brolimo text-xl md:text-2xl mb-4 tracking-wide group-hover:text-[#DFAB40] transition-colors">{event}</h4>
        
        <div className="flex flex-col items-center gap-2 mb-6">
            <p className="text-[#20064A] font-bold text-sm md:text-base">{time}</p>
            <p className="text-gray-500 text-sm italic font-sans">{description}</p>
        </div>
        
        <button className="w-full py-3 rounded-xl bg-[#20064A] text-white font-bold text-xs md:text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#2c0964] hover:shadow-lg active:scale-95">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
