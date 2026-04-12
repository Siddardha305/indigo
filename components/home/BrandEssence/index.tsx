import BrandEssenceBackground from "./BrandEssenceBackground";
import BrandEssenceHeader from "./BrandEssenceHeader";
import BrandEssenceArch from "./BrandEssenceArch";
import BrandEssenceText from "./BrandEssenceText";

export default function BrandEssence() {
  return (
    <BrandEssenceBackground>
      <BrandEssenceHeader />
      
      {/* 2-Column layout for Arch and Text */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 pt-4">
        <BrandEssenceArch />
        <BrandEssenceText />
      </div>
    </BrandEssenceBackground>
  );
}
