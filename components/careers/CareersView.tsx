import PageHeader from "../layout/PageHeader";
import VioletPetals from "../decorations/VioletPetals";

export default function CareersView() {
  return (
    <div className="w-full bg-white font-el-messiri overflow-hidden">
      <PageHeader 
        topTitle="BE PART OF"
        title="INDIGO"
        subtitle="CRAFT YOUR FUTURE IN THE ART OF FINE INDO-PAK DINING"
      />

      {/* 2. Opportunities Section */}
      <section className="relative w-full py-24 bg-[#20064A] flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none grayscale brightness-50">
           <img src="/imges/career/opportunities/Frame 307.webp" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] px-4 flex flex-col items-center text-center">
          <h2 className="text-white text-3xl md:text-4xl mb-6 tracking-wide">Opportunities</h2>
          <div className="flex items-center justify-center w-full mb-8">
               <div className="w-24 h-px bg-[#DFAB40]/50" />
               <div className="mx-3 text-[#DFAB40] text-[10px]">✦</div>
               <div className="w-24 h-px bg-[#DFAB40]/50" />
            </div>
          <p className="text-[#DFAB40] text-sm md:text-base font-medium mb-16 italic">Discover roles where your passion meets purpose.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-[1200px]">
            {[
              { 
                title: "TANDOOR CHEF", 
                desc: "Master the art of flame-cooked perfection and traditional techniques.",
                type: "Full-time",
                exp: "2+ years"
              },
              { 
                title: "MANAGER", 
                desc: "Lead operations and deliver exceptional guest experiences every day.",
                type: "Full-time",
                exp: "4+ years"
              },
              { 
                title: "SERVICE STAFF", 
                desc: "Create warm, memorable dining moments through attentive service.",
                type: "Full-time",
                exp: "1+ year"
              }
            ].map((role, i) => (
              <div key={i} className="relative p-8 md:p-12 bg-[#20064A]/60 backdrop-blur-md border-[1.5px] border-[#DFAB40]/40 rounded-t-[120px] flex flex-col items-center group hover:bg-[#20064A]/80 transition-all shadow-2xl">
                <h3 className="text-[#DFAB40] text-base md:text-lg font-bold uppercase tracking-widest mb-6 border-b border-[#DFAB40]/20 pb-2">{role.title}</h3>
                <p className="text-white/80 text-center text-xs md:text-sm font-medium leading-relaxed mb-6 h-auto">{role.desc}</p>
                <div className="flex flex-col gap-1.5 items-center">
                    <p className="text-white text-[9px] font-bold uppercase tracking-widest">Type : <span className="text-[#DFAB40]/80">{role.type}</span></p>
                    <p className="text-white text-[9px] font-bold uppercase tracking-widest">Experience : <span className="text-[#DFAB40]/80">{role.exp}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Start Your Journey Header */}
      <section className="w-full pt-16 pb-8 flex flex-col items-center bg-white px-4">
          <div className="max-w-[800px] w-full text-center">
              <h2 className="text-[#20064A] text-2xl md:text-5xl font-serif mb-4 tracking-wide uppercase">START YOUR JOURNEY</h2>
              <div className="flex items-center justify-center w-full mb-6">
                <div className="w-32 h-px bg-[#DFAB40]/40" />
                <div className="mx-3 text-[#DFAB40]">✦</div>
                <div className="w-32 h-px bg-[#DFAB40]/40" />
              </div>
              <p className="text-[#DFAB40] text-sm md:text-base font-bold italic">
                 "We'd love to know more about your passion, experience, and what inspires you to join Indigo."
              </p>
          </div>
      </section>

      {/* 4. Join Us Form Section */}
      <section className="w-full pb-20 flex flex-col items-center bg-white px-4">
          <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Image Side */}
              <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group lg:h-[750px]">
                  <img src="/imges/career/start your journey/Rectangle 133.webp" alt="Chef Working" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20064A]/60 to-transparent" />
                  <div className="absolute top-10 left-10 text-white text-left">
                      <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-widest leading-tight">YOUR<br/>CULINARY JOURNEY<br/>BEGINS</h4>
                  </div>
              </div>

              {/* Form Side - Scaled Down */}
              <div className="relative p-6 md:p-10 border-[1.5px] border-[#DFAB40]/40 rounded-3xl overflow-hidden bg-white">
                  {/* Pattern */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none text-[#20064A]">
                      <div className="grid grid-cols-6 gap-6 p-6">
                          {Array.from({ length: 48 }).map((_, i) => (
                              <img key={i} src="/logo/logoicon.png" alt="" className="w-6 h-6 grayscale opacity-20" />
                          ))}
                      </div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="text-[#20064A] text-2xl mb-2 uppercase tracking-widest font-serif">JOIN US TODAY</h3>
                    <div className="w-32 h-[1px] bg-[#DFAB40]/60 mb-8" />

                    <form className="w-full flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[9px] font-bold uppercase tracking-widest pl-1">Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm outline-none focus:border-[#DFAB40]" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[9px] font-bold uppercase tracking-widest pl-1">Phone Number</label>
                            <input type="text" placeholder="00022 33344" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm outline-none focus:border-[#DFAB40]" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[9px] font-bold uppercase tracking-widest pl-1">Email Address</label>
                            <input type="email" placeholder="you@example.com" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm outline-none focus:border-[#DFAB40]" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[9px] font-bold uppercase tracking-widest pl-1">Description</label>
                            <textarea rows={3} placeholder="Tell us about yourself..." className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm outline-none focus:border-[#DFAB40] resize-none" />
                        </div>

                        {/* File Upload Area */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[9px] font-bold uppercase tracking-widest pl-1">Upload Your Resume</label>
                            <div className="w-full border-2 border-dashed border-[#DFAB40]/30 bg-[#fdf8ec]/50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-[#DFAB40]/60 transition-all group">
                                <div className="w-8 h-8 bg-[#20064A] text-[#DFAB40] rounded-lg flex items-center justify-center mb-2">
                                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                                </div>
                                <p className="text-[#20064A] text-[9px] font-bold uppercase tracking-wider mb-1">Upload resume</p>
                                <p className="text-[#DFAB40] text-[8px] font-bold uppercase opacity-60">PDF or DOC (Max 5MB)</p>
                            </div>
                        </div>

                        <button className="w-full bg-[#20064A] text-white py-4 mt-2 rounded-md font-bold text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-[#300a6e] transition-all hover:shadow-lg active:scale-95">
                            Submit Application
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                        </button>
                    </form>
                  </div>
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
