import EventsCurated from "@/components/events/EventsCurated";
import EventsGallery from "@/components/events/EventsGallery";
import MenuOfferCard from "@/components/menu/MenuOfferCard";
import { OFFERS_DATA } from "@/components/menu/MenuData";

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Page Header Section (Custom for Events) */}
      <section className="w-full py-20 md:py-32 bg-white flex flex-col items-center relative overflow-hidden">
        {/* Wheat Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="grid grid-cols-4 md:grid-cols-10 gap-16 p-10">
                {Array.from({ length: 40 }).map((_, i) => (
                    <img key={i} src="/logo/logoicon.png" alt="" className="w-12 h-12" />
                ))}
            </div>
        </div>

        {/* Gold Flower Decorations in top corners of header */}
        <div className="absolute left-0 top-0 w-64 md:w-96 h-auto opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto object-contain brightness-125" />
        </div>
        <div className="absolute right-0 top-0 w-64 md:w-96 h-auto opacity-40 translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto object-contain brightness-125" />
        </div>

        <div className="relative z-10 text-center flex flex-col items-center px-4">
             <h1 className="text-[#20064A] text-4xl md:text-7xl font-serif tracking-[0.1em] uppercase mb-6">EVENTS & SPECIALS</h1>
             
             {/* Gold Divider */}
             <div className="flex items-center w-full max-w-[200px] mb-8">
                <div className="flex-1 h-px bg-[#DFAB40]/60" />
                <div className="mx-4 text-[#DFAB40] text-[10px]">✦</div>
                <div className="flex-1 h-px bg-[#DFAB40]/60" />
            </div>

             <p className="text-[#20064A]/70 text-sm md:text-lg max-w-2xl leading-relaxed font-medium">
                Planning a visit, hosting an event, or have something in mind, we're here to help make it all come together.
             </p>
        </div>
      </section>

      {/* 2. Curated Dining Experiences (Hero Section) */}
      <EventsCurated />

      {/* 3. Exclusive Offers Slider Section */}
      <section className="w-full py-24 md:py-32 bg-white flex flex-col items-center relative overflow-hidden">
        <div className="max-w-[1400px] w-full px-4 relative flex flex-col items-center z-10">
            <h3 className="text-[#20064A] text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6 text-center">EXCLUSIVE OFFERS</h3>
            
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
