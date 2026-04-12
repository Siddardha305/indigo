import PageHeader from "@/components/layout/PageHeader";
import EventsCurated from "@/components/events/EventsCurated";
import EventsGallery from "@/components/events/EventsGallery";
import MenuOfferCard from "@/components/menu/MenuOfferCard";
import { OFFERS_DATA } from "@/components/menu/MenuData";

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-el-messiri">
      <PageHeader 
        title="EVENTS & SPECIALS"
        subtitle="Planning a visit, hosting an event, or have something in mind, we're here to help make it all come together."
      />

      {/* 2. Curated Dining Experiences (Hero Section) */}
      <EventsCurated />

      {/* 3. Exclusive Offers Slider Section */}
      <section className="w-full py-24 md:py-32 bg-white flex flex-col items-center relative overflow-hidden">
        <div className="max-w-[1400px] w-full px-4 relative flex flex-col items-center z-10">
            <h3 className="text-[#20064A] text-3xl md:text-4xl font-el-messiri tracking-widest uppercase mb-6 text-center">EXCLUSIVE OFFERS</h3>
            
            {/* Divider */}
            <div className="flex items-center w-64 md:w-80 mb-8">
                <div className="flex-1 h-px bg-[#DFAB40]/50" />
                <div className="mx-4 text-[#DFAB40]">✦</div>
                <div className="flex-1 h-px bg-[#DFAB40]/50" />
            </div>
            
            <p className="text-[#DFAB40] font-medium text-center text-sm md:text-xl max-w-xl mb-16 italic opacity-80">
                 Our exclusive privileges are thoughtfully crafted to make your experience even more special.
            </p>

            {/* Halal Stamp with Green/Gold style as per ref */}
            <div className="absolute right-4 md:right-10 top-0 w-20 h-20 md:w-32 md:h-32">
                <img src="/logo/halal.png" alt="Halal Certified" className="w-full h-full object-contain drop-shadow-md" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-[1240px]">
                {OFFERS_DATA.map((offer) => (
                    <MenuOfferCard key={offer.id} {...offer} />
                ))}
            </div>

            {/* Premium Carousel navigation */}
            <div className="flex items-center gap-6 mt-20">
                <button className="w-12 h-12 rounded-full border border-[#20064A]/10 flex items-center justify-center text-[#20064A] hover:bg-[#20064A] hover:text-white transition-all"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg></button>
                <div className="flex gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#DFAB40] ring-4 ring-[#DFAB40]/10" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                </div>
                <button className="w-12 h-12 rounded-full border border-[#20064A]/10 flex items-center justify-center text-[#20064A] hover:bg-[#20064A] hover:text-white transition-all"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></button>
            </div>
        </div>
      </section>

      {/* 4. Filterable Events Gallery (Experiences Section) */}
      <EventsGallery />
      
    </div>
  );
}
