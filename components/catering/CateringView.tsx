import PageHeader from "../layout/PageHeader";
import VioletPetals from "../decorations/VioletPetals";

export default function CateringView() {
  return (
    <div className="w-full bg-white font-el-messiri overflow-hidden">
      <PageHeader 
        title="CATERING"
        subtitle="Celebrate with Indigo and create something memorable, where every dish is a story rooted in tradition."
      />

      {/* 2. Services Offered Section */}
      <section className="relative w-full py-24 bg-[#20064A] flex flex-col items-center overflow-hidden">
        {/* Background Blur Image or Pattern */}
        <div className="absolute inset-0 opacity-10 blur-sm pointer-events-none">
           <img src="/imges/catering/services offered/Frame 307.webp" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] px-4 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl md:text-4xl font-el-messiri mb-4 tracking-wide">Services Offered</h2>
            <div className="flex items-center justify-center w-full mb-6">
               <div className="w-24 h-px bg-[#DFAB40]/50" />
               <div className="mx-3 text-[#DFAB40] text-[10px]">✦</div>
               <div className="w-24 h-px bg-[#DFAB40]/50" />
            </div>
            <p className="text-white/70 text-sm md:text-base max-w-2xl font-medium px-4">
               Whether it&apos;s a wedding, celebration, or outdoor gathering, 
               we create experiences that go beyond just food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-[1300px]">
            {[
              { title: "LIVE FOOD STATIONS", image: "/imges/catering/services offered/Frame 584.webp" },
              { title: "WEDDING CATERING", image: "/imges/catering/services offered/Frame 585.webp" },
              { title: "OUTDOOR EVENTS", image: "/imges/catering/services offered/Frame 586.webp" }
            ].map((service, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-full mb-8">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto" 
                  />
                </div>
                <h3 className="text-white font-el-messiri text-lg md:text-xl tracking-[0.2em] text-center uppercase">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Corner Flowers */}
        <div className="absolute left-0 bottom-0 w-48 opacity-10 -translate-x-1/2 translate-y-1/2 rotate-45">
            <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto" />
        </div>
        <div className="absolute right-0 bottom-0 w-48 opacity-10 translate-x-1/2 translate-y-1/2 -rotate-45">
            <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto" />
        </div>
      </section>

      {/* 3. Elevate Section */}
      <section className="w-full py-20 flex flex-col items-center bg-white px-4">
          <div className="max-w-[800px] w-full text-center relative flex flex-col items-center">
              <h2 className="text-[#20064A] text-2xl md:text-4xl font-el-messiri mb-6 tracking-wide uppercase">ELEVATE YOUR EVENT</h2>
              <div className="flex items-center w-full max-w-[200px] mb-8">
                <div className="flex-1 h-px bg-[#DFAB40]/50" />
                <div className="mx-3 text-[#DFAB40]">✦</div>
                <div className="flex-1 h-px bg-[#DFAB40]/50" />
              </div>
              <p className="text-[#DFAB40]/80 text-sm md:text-base font-bold italic mb-8">
                 Transform your gatherings into something truly memorable, with flavors that blend tradition, creativity, and indulgence.
              </p>
              
              {/* Halal Stamp */}
              <div className="absolute -right-4 md:-right-20 top-0 w-20 h-20 md:w-28 md:h-28">
                  <img src="/logo/halal.png" alt="Halal Certified" className="w-full h-full object-contain" />
              </div>
          </div>

          {/* Form Container */}
          <div className="max-w-[850px] w-full mt-12 mb-24 relative p-8 md:p-12 border-[1.5px] border-[#DFAB40]/40 rounded-3xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <div className="grid grid-cols-6 md:grid-cols-10 gap-x-8 gap-y-12 p-8">
                      {Array.from({ length: 120 }).map((_, i) => (
                          <img key={i} src="/logo/logoicon.png" alt="" className="w-6 h-6 grayscale opacity-20" />
                      ))}
                  </div>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                  <h3 className="text-[#20064A] text-2xl md:text-3xl font-el-messiri mb-3">Let&apos;s Connect</h3>
                  <div className="w-32 h-[1px] bg-[#DFAB40]/60 mb-6" />
                  <p className="text-[#20064A]/60 text-xs md:text-sm font-bold tracking-wider mb-10 text-center uppercase">Share your details and we&apos;ll get back to you.</p>

                  <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                          <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Name</label>
                          <input type="text" placeholder="John Doe" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none focus:border-[#DFAB40]" />
                      </div>
                      <div className="flex flex-col gap-2">
                          <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Phone Number</label>
                          <input type="text" placeholder="9887711223" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none focus:border-[#DFAB40]" />
                      </div>
                      <div className="md:col-span-2 flex flex-col gap-2">
                          <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Email Address</label>
                          <input type="email" placeholder="you@example.com" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none focus:border-[#DFAB40]" />
                      </div>
                      <div className="flex flex-col gap-2">
                          <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Number of people</label>
                          <input type="text" placeholder="The..." className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none focus:border-[#DFAB40]" />
                      </div>
                      <div className="flex flex-col gap-2">
                          <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Select Date</label>
                          <input type="text" placeholder="The..." className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none focus:border-[#DFAB40]" />
                      </div>
                      <div className="flex flex-col gap-2">
                          <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Select Time</label>
                          <input type="text" placeholder="The..." className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none focus:border-[#DFAB40]" />
                      </div>

                      <div className="flex flex-col gap-2">
                          <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1 opacity-0 shrink-0">Type</label>
                          <div className="flex border border-[#DFAB40]/20 rounded-md overflow-hidden">
                              <button type="button" className="flex-1 bg-[#fdf8ec] text-[#20064A] py-3 text-sm font-medium border-r border-[#DFAB40]/20">Pickup</button>
                              <button type="button" className="flex-1 bg-gray-200 text-[#20064A]/40 py-3 text-sm font-medium">Delivery</button>
                          </div>
                      </div>

                      <div className="md:col-span-2 flex flex-col gap-2">
                          <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Budget Per Person</label>
                          <input type="text" placeholder="The..." className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none focus:border-[#DFAB40]" />
                      </div>

                      <div className="md:col-span-2 flex flex-col gap-2">
                          <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Description</label>
                          <textarea rows={4} placeholder="Any Special Requests" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none focus:border-[#DFAB40] resize-none" />
                      </div>

                      <div className="md:col-span-2 mt-4">
                          <button type="button" className="w-full bg-[#20064A] text-white py-4 rounded-md font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-colors hover:bg-[#300a6e]">
                              Send Now
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </section>

      {/* Footer Corners */}
      <div className="w-full h-32 bg-white relative">
          <VioletPetals position="bottom-left" className="bottom-[-4px] left-[-4px]" opacity="opacity-10" />
          <VioletPetals position="bottom-right" className="bottom-[-4px] right-[-4px]" opacity="opacity-10" />
      </div>
    </div>
  );
}
