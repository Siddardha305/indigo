import HeroBackground from "@/components/hero/HeroBackground";
import HeroText from "@/components/hero/HeroText";
import FeaturedMenu from "@/components/menu/FeaturedMenu";
import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";
import Hero4 from "@/components/hero4";
import Hero5 from "@/components/hero5";
import Hero6 from "@/components/hero6";
import Hero7 from "@/components/hero7";
import Hero8 from "@/components/hero8";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroBackground>
        <HeroText />
      </HeroBackground>
      
      {/* Section 2 - The background is completely full-width white */}
      <div className="w-full bg-white relative">
        <FeaturedMenu />
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

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
