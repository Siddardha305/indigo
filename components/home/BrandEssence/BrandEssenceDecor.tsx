import React from "react";
import YellowPetals from "../../decorations/YellowPetals";
import VioletPetals from "../../decorations/VioletPetals";

export default function BrandEssenceDecor() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden">
      {/* Top Left - Yellow */}
      <YellowPetals position="top-left" className="top-[-4px] left-[-4px]" />
      
      {/* Top Right - Subtle Violet */}
      <VioletPetals position="top-right" className="top-[-4px] right-[-4px]" opacity="opacity-40" />

      {/* Bottom Left - Subtle Violet */}
      <VioletPetals position="bottom-left" className="bottom-[-4px] left-[-4px]" opacity="opacity-30" />

      {/* Bottom Right - Yellow */}
      <YellowPetals position="bottom-right" className="bottom-[-4px] right-[-4px]" />
    </div>
  );
}
