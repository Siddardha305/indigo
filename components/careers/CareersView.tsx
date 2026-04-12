import PageHeader from "../layout/PageHeader";

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
              <div key={i} className="relative p-10 bg-[#20064A]/60 backdrop-blur-md border-[2px] border-[#DFAB40]/40 rounded-t-full flex flex-col items-center group hover:bg-[#20064A]/80 transition-all">
                <h3 className="text-[#DFAB40] text-lg font-bold uppercase tracking-widest mb-8 border-b border-[#DFAB40]/20 pb-2">{role.title}</h3>
                <p className="text-white/80 text-center text-xs md:text-sm font-medium leading-relaxed mb-8 h-12">{role.desc}</p>
                <div className="flex flex-col gap-2">
                    <p className="text-white text-[10px] font-bold uppercase tracking-widest">Type : <span className="text-white/60">{role.type}</span></p>
                    <p className="text-white text-[10px] font-bold uppercase tracking-widest">Experience : <span className="text-white/60">{role.exp}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Start Your Journey Header */}
      <section className="w-full pt-24 pb-12 flex flex-col items-center bg-white px-4">
          <div className="max-w-[800px] w-full text-center">
              <h2 className="text-[#20064A] text-2xl md:text-5xl mb-6 tracking-wide uppercase">START YOUR JOURNEY</h2>
              <div className="flex items-center justify-center w-full mb-8">
                <div className="w-48 h-px bg-[#DFAB40]/40" />
                <div className="mx-3 text-[#DFAB40]">✦</div>
                <div className="w-48 h-px bg-[#DFAB40]/40" />
              </div>
              <p className="text-[#DFAB40] text-sm md:text-base font-bold italic">
                 We&apos;d love to know more about your passion, experience, and what inspires you to join Indigo.
              </p>
          </div>
      </section>

      {/* 4. Join Us Form Section */}
      <section className="w-full pb-24 flex flex-col items-center bg-white px-4">
          <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image Side */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
                  <img src="/imges/career/start your journey/Rectangle 133.webp" alt="Chef Working" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20064A]/60 to-transparent" />
                  <div className="absolute top-10 left-10 text-white text-left">
                      <h4 className="text-3xl font-bold uppercase tracking-widest leading-tight">YOUR<br/>CULINARY JOURNEY<br/>BEGINS</h4>
                  </div>
              </div>

              {/* Form Side */}
              <div className="relative p-8 md:p-12 border-[1.5px] border-[#DFAB40]/40 rounded-3xl overflow-hidden bg-white">
                  {/* Pattern */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none text-[#20064A]">
                      <div className="grid grid-cols-6 gap-8 p-8">
                          {Array.from({ length: 48 }).map((_, i) => (
                              <img key={i} src="/logo/logoicon.png" alt="" className="w-6 h-6 grayscale opacity-20" />
                          ))}
                      </div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="text-[#20064A] text-3xl mb-3 uppercase tracking-widest">JOIN US TODAY</h3>
                    <div className="w-32 h-[1px] bg-[#DFAB40]/60 mb-10" />

                    <form className="w-full flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3.5 rounded-md text-[#20064A] text-sm outline-none" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Phone Number</label>
                            <input type="text" placeholder="00022 33344" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3.5 rounded-md text-[#20064A] text-sm outline-none" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Email Address</label>
                            <input type="email" placeholder="you@example.com" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3.5 rounded-md text-[#20064A] text-sm outline-none" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Description</label>
                            <textarea rows={4} placeholder="Any Special Requests" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3.5 rounded-md text-[#20064A] text-sm outline-none resize-none" />
                        </div>

                        {/* File Upload Area */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Upload Your Resume</label>
                            <div className="w-full border-2 border-dashed border-[#DFAB40]/30 bg-[#fdf8ec]/50 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-[#DFAB40]/60 transition-all group">
                                <div className="w-10 h-10 bg-[#20064A] text-[#DFAB40] rounded-lg flex items-center justify-center mb-3">
                                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                                </div>
                                <p className="text-[#20064A] text-[10px] font-bold uppercase tracking-wider mb-1">Drag and Drop your resume</p>
                                <p className="text-[#DFAB40] text-[9px] font-bold uppercase">(PDF or DOC, max 5MB)</p>
                            </div>
                        </div>

                        <button className="w-full bg-[#20064A] text-white py-4 mt-4 rounded-md font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-[#300a6e] transition-all">
                            Submit Your Application
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                        </button>
                    </form>
                  </div>
              </div>
          </div>
      </section>

      {/* Footer Mandala */}
      <div className="w-full h-32 bg-white relative">
          <div className="absolute left-0 bottom-0 w-64 md:w-96 opacity-10 -translate-x-1/2 translate-y-1/2">
             <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto" />
          </div>
          <div className="absolute right-0 bottom-0 w-64 md:w-96 opacity-10 translate-x-1/2 translate-y-1/2">
             <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto" />
          </div>
      </div>
    </div>
  );
}
