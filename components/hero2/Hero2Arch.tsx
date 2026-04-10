import Image from "next/image";
import React from "react";

export default function Hero2Arch() {
  return (
    <div className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px] mx-auto drop-shadow-2xl">
      <Image
        src="/PNGS/Frame562.png"
        alt="Indigo Arch"
        width={480}
        height={560}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
