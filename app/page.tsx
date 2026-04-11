import HeroBackground from "@/components/hero/HeroBackground";
import HeroText from "@/components/hero/HeroText";
import HomeMenuPreview from "@/components/menu/HomeMenuPreview";
import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";
import Hero4 from "@/components/hero4";
import Hero5 from "@/components/hero5";
import Hero6 from "@/components/hero6";
import Hero7 from "@/components/hero7";
import Hero8 from "@/components/hero8";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroBackground>
        <HeroText />
      </HeroBackground>
      
      {/* Section 2 - Most Loved Menu Preview */}
      <div className="w-full bg-white relative">
        <HomeMenuPreview />
      </div>
      
      {/* Hero 2 - The Essence of Indigo */}
      <Hero2 />
      
      {/* Hero 3 - The INDIGO Story */}
      <Hero3 />
      
      {/* Hero 4 - Inside INDIGO */}
      <Hero4 />
      
      {/* Hero 5 - The INDIGO Family */}
      <Hero5 />
      
      {/* Hero 6 - Stories from Our Tables */}
      <Hero6 />
      
      {/* Hero 7 - Catering by INDIGO */}
      <Hero7 />

      {/* Hero 8 - Find Your Way */}
      <Hero8 />
    </div>
  );
}
