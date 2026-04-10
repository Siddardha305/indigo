import React from "react";

export default function Hero2Text() {
  return (
    <div className="flex flex-col flex-1 w-full text-white text-left max-w-2xl mt-12 lg:mt-0 xl:pl-16">
      
      {/* Title block */}
      {/* Title block - single line focus */}
      <div className="flex items-baseline gap-x-2 mb-2 whitespace-nowrap overflow-x-visible">
        <h3 className="font-brolimo text-4xl md:text-6xl tracking-wide uppercase leading-none text-white">
          INDIGO
        </h3>
        <span className="font-el-messiri text-xl md:text-4xl leading-none text-white/80">
          , नील का पौधा , نیل کا پودا
        </span>
      </div>
      
      {/* Pronunciation guide */}
      <h5 className="font-sans text-gray-300 tracking-[0.1em] text-sm md:text-base font-light mb-8">
        /in · duh · goh/
      </h5>
      
      {/* Paragraph block */}
      <p className="font-sans text-sm md:text-[16px] leading-[1.8] font-light mb-6 opacity-95">
        <span className="text-[#DFAB40] font-semibold tracking-wide">Indigo</span> or <span className="text-[#DFAB40] font-semibold tracking-wide">Indigofera Tinctoria</span> is a commonly grown plant in the regions of India and Pakistan. This revered dye also known as <span className="text-[#DFAB40] font-semibold tracking-wide">&lsquo;Blue Gold&rsquo;</span> has an intricate history spanning over 5000 years. From the Indus Valley Civilization to the British colonial rule, this simple plant has been a powerful symbol of trade and tradition.
      </p>
      
      {/* Concluding sentence */}
      <p className="font-el-messiri text-[#DFAB40] text-xl md:text-[22px] font-semibold tracking-wide mt-2">
        For us, this name symbolizes everything we are.
      </p>
      
    </div>
  );
}
