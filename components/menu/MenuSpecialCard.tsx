import React from "react";
import Image from "next/image";

interface MenuSpecialCardProps {
  name: string;
  description: string;
  image: string;
}

export default function MenuSpecialCard({ name, description, image }: MenuSpecialCardProps) {
  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 border border-gray-100 shadow-md">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <h4 className="text-[#20064A] font-brolimo text-lg md:text-xl text-center mb-2 group-hover:text-[#DFAB40] transition-colors">
        {name}
      </h4>
      <p className="text-gray-500 text-sm md:text-base text-center leading-relaxed font-sans line-clamp-2">
        {description}
      </p>
    </div>
  );
}
