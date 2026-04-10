import PageHeader from "@/components/layout/PageHeader";
import EventsCurated from "@/components/events/EventsCurated";
import EventsGallery from "@/components/events/EventsGallery";
import MenuOfferCard from "@/components/menu/MenuOfferCard";
import { OFFERS_DATA } from "@/components/menu/MenuData";

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Page Header Section */}
      <PageHeader 
        title="EVENTS & SPECIALS" 
        subtitle="Planning a visit, hosting an event, or have something in mind, we're here to help make it all come together."
      />

      {/* 2. Curated Dining Experiences (Dark) */}
      <EventsCurated />

      {/* 3. Exclusive Offers Slider Section */}
      <section className="w-full py-24 md:py-32 bg-white flex flex-col items-center">
        <div className="max-w-[1400px] w-full px-4 relative flex flex-col items-center">
            <h3 className="text-[#20064A] text-2xl md:text-3xl font-brolimo tracking-widest uppercase mb-6">EXCLUSIVE OFFERS</h3>
            
            {/* Divider */}
            <div className="flex items-center w-64 md:w-80 mb-8 px-4">
                <div className="flex-1 h-px bg-[#DFAB40]/50" />
                <div className="mx-4 text-[#DFAB40]">✦</div>
                <div className="flex-1 h-px bg-[#DFAB40]/50" />
            </div>
            
            <p className="text-[#DFAB40] font-medium text-center text-sm md:text-lg max-w-xl mb-12 italic">
                 Our exclusive privileges are thoughtfully crafted to make your experience even more special.
            </p>

            {/* Halal Stamp */}
            <div className="absolute right-4 top-0 w-20 h-20 md:w-28 md:h-28">
                <img src="/logo/halal.png" alt="Halal Certified" className="w-full h-full object-contain" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {OFFERS_DATA.map((offer) => (
                    <MenuOfferCard key={offer.id} {...offer} />
                ))}
            </div>

            {/* Carousel navigation dots as per UI design */}
            <div className="flex items-center gap-3 mt-16 group">
                <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 hover:bg-[#20064A] hover:text-white transition-all"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg></button>
                <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#DFAB40]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>
                <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 hover:bg-[#20064A] hover:text-white transition-all"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></button>
            </div>
        </div>
      </section>

      {/* 4. Filterable Events Gallery (Leaf Pattern) */}
      <EventsGallery />
      
    </div>
  );
}
