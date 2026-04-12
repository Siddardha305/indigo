import HeroMain from "@/components/home/HeroMain";
import HomeMenuPreview from "@/components/menu/HomeMenuPreview";
import BrandEssence from "@/components/home/BrandEssence";
import OurStory from "@/components/home/OurStory";
import InteriorGallery from "@/components/home/InteriorGallery";
import TeamSection from "@/components/home/TeamSection";
import Testimonials from "@/components/home/Testimonials";
import CateringCTA from "@/components/home/CateringCTA";
import LocationCTA from "@/components/home/LocationCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroMain />
      
      {/* Section 2 - Most Loved Menu Preview */}
      <div className="w-full bg-white relative">
        <HomeMenuPreview />
      </div>
      
      <BrandEssence />
      
      <OurStory />
      
      <InteriorGallery />
      
      <TeamSection />
      
      <Testimonials />
      
      <CateringCTA />

      <LocationCTA />
    </div>
  );
}
