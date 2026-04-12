import PageHeader from "../layout/PageHeader";

export default function ContactView() {
  return (
    <div className="w-full bg-white font-el-messiri overflow-hidden">
      <PageHeader 
        title="FIND US"
        subtitle="From planning a visit to hosting a special ceremony, simply reaching out, we're here to make that journey easier for you."
      />

      {/* 2. Reserve A Table */}
      <section className="relative w-full py-24 bg-[#20064A] flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <img src="/PNGS/restaurant1.png" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] px-4 flex flex-col items-center text-center">
          <h2 className="text-white text-3xl md:text-4xl mb-3 tracking-wide">Reserve A Table</h2>
          <p className="text-[#DFAB40] text-sm md:text-base font-medium mb-12">Book your table in just a few steps</p>

          <div className="flex items-center justify-center gap-12 md:gap-24 mb-16 relative">
             {/* Progress Line */}
             <div className="absolute top-4 left-10 right-10 h-px bg-white/20 hidden md:block" />
             
             {[
               { num: "1", label: "Availability" },
               { num: "2", label: "Details" },
               { num: "3", label: "Confirmation" }
             ].map((step, i) => (
               <div key={i} className="flex flex-col items-center gap-4 relative z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i === 0 ? 'bg-[#DFAB40] text-[#20064A]' : 'border border-white/40 text-white/40 bg-[#20064A]'}`}>
                    {step.num}
                  </div>
                  <span className={`text-xs md:text-sm font-bold uppercase tracking-widest ${i === 0 ? 'text-white' : 'text-white/40'}`}>
                    {step.label}
                  </span>
               </div>
             ))}
          </div>

          <div className="w-full max-w-[900px] bg-[#20064A]/40 backdrop-blur-md border border-[#DFAB40]/40 p-10 rounded-xl">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col gap-2 text-left">
                   <label className="text-white text-[10px] font-bold uppercase tracking-widest opacity-70">Guests</label>
                   <select className="bg-white text-[#20064A] p-3 rounded-md text-sm outline-none">
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>4 People</option>
                   </select>
                </div>
                <div className="flex flex-col gap-2 text-left">
                   <label className="text-white text-[10px] font-bold uppercase tracking-widest opacity-70">Select Date</label>
                   <input type="date" className="bg-white text-[#20064A] p-3 rounded-md text-sm outline-none" />
                </div>
                <div className="flex flex-col gap-2 text-left">
                   <label className="text-white text-[10px] font-bold uppercase tracking-widest opacity-70">Select Time</label>
                   <select className="bg-white text-[#20064A] p-3 rounded-md text-sm outline-none">
                      <option>12:00 PM</option>
                      <option>01:00 PM</option>
                      <option>07:00 PM</option>
                   </select>
                </div>
             </div>
             
             <button className="w-full bg-[#DFAB40] text-[#20064A] py-4 rounded-md font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#cf9b30] transition-colors mb-6">
                Check Availability
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
             </button>
             
             <p className="text-white/40 text-[10px] md:text-xs font-medium uppercase tracking-widest italic">
                Quick booking + instant confirmation
             </p>
          </div>
        </div>
      </section>

      {/* 3. Find Your Way Section */}
      <section className="w-full py-24 flex flex-col items-center px-4 bg-white">
          <div className="text-center mb-16">
              <h2 className="text-[#20064A] text-3xl md:text-4xl mb-4 tracking-wide">Find Your Way to INDIGO</h2>
              <p className="text-[#DFAB40] text-sm md:text-base font-medium italic">We offer a vibrant atmosphere and a pleasant memory, more so to have you.</p>
          </div>

          <div className="max-w-[1240px] w-full flex flex-col gap-8">
              {/* Map Placeholder */}
              <div className="w-full aspect-[21/9] bg-gray-100 rounded-xl overflow-hidden border border-[#20064A]/10 shadow-lg relative">
                  <iframe 
                    title="Indigo Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.858066531362!2d-95.7950982!3d29.5694762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640fbadb08b53df%3A0x6d8f58be5b3c439b!2s451%20Mennonite%20Rd%20%23190%2C%20Rosenberg%2C%20TX%2077469!5e0!3m2!1sen!2sus!4v1712910000000!5m2!1sen!2sus"
                    className="w-full h-full border-0 grayscale opacity-80 contrast-[1.1]"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
              </div>

              {/* Contact Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-[#20064A] p-8 rounded-xl border border-[#DFAB40]/40 flex flex-col items-center text-center group transition-all hover:scale-[1.02]">
                      <div className="mb-6 text-[#DFAB40]">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <h4 className="text-[#DFAB40] text-sm font-bold uppercase tracking-widest mb-4">Location</h4>
                      <p className="text-white text-xs md:text-sm font-medium leading-relaxed max-w-[200px]">451 Mennonite Road, Suite 190, Rosenberg, TX 77469, United States</p>
                  </div>

                  <div className="flex flex-col gap-6">
                      <div className="bg-[#20064A] p-8 rounded-xl border border-[#DFAB40]/40 flex flex-col items-center text-center group transition-all hover:scale-[1.02]">
                        <div className="mb-6 text-[#DFAB40]">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <h4 className="text-[#DFAB40] text-sm font-bold uppercase tracking-widest mb-2">Phone</h4>
                        <p className="text-white text-sm font-medium tracking-wider">(832)-451-6027</p>
                      </div>

                      <div className="bg-[#20064A] p-8 rounded-xl border border-[#DFAB40]/40 flex flex-col items-center text-center group transition-all hover:scale-[1.02]">
                        <div className="mb-6 text-[#DFAB40]">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <h4 className="text-[#DFAB40] text-sm font-bold uppercase tracking-widest mb-2">Mail</h4>
                        <p className="text-white text-sm font-medium">rathodfrompatan@gmail.com</p>
                      </div>
                  </div>

                  <div className="bg-[#20064A] p-8 rounded-xl border border-[#DFAB40]/40 flex flex-col items-center text-center group transition-all hover:scale-[1.02]">
                      <div className="mb-6 text-[#DFAB40]">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <h4 className="text-[#DFAB40] text-sm font-bold uppercase tracking-widest mb-6">Opening Hours</h4>
                      <div className="flex flex-col gap-6">
                          <div>
                              <h5 className="text-white/60 text-xs font-bold uppercase mb-2">Wednesday</h5>
                              <p className="text-[#DFAB40] text-sm font-bold italic tracking-wide">11:00 AM – 11:00 PM</p>
                          </div>
                          <div>
                              <h5 className="text-white/60 text-xs font-bold uppercase mb-2">Friday – Saturday</h5>
                              <p className="text-[#DFAB40] text-sm font-bold italic tracking-wide">11:00 AM – 12:00 PM</p>
                          </div>
                          <div>
                              <h5 className="text-white/60 text-xs font-bold uppercase mb-2">Sunday, Tuesday, Thursday</h5>
                              <p className="text-[#DFAB40] text-sm font-bold italic tracking-wide">11:00 AM – 11:00 PM</p>
                          </div>
                          <p className="text-white/40 text-[10px] font-bold uppercase italic mt-2">* Closed on Mondays</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. Step Into INDIGO */}
      <section className="relative w-full py-40 flex flex-col items-center text-center bg-[#20064A] overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
             <img src="/PNGS/restaurant1.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#20064A]/80 to-[#20064A]/80" />

          <div className="relative z-10 max-w-4xl px-4">
              <h2 className="text-white text-3xl md:text-6xl mb-8 tracking-wide">Step Into INDIGO</h2>
              <p className="text-white/80 text-sm md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
                 Whether you&apos;re planning a visit, reserving a table, or organizing something special, 
                 we&apos;re here to make it seamless. At Indigo, every experience blends Indo-Pak tradition with a refined, 
                 modern touch—crafted with care from start to finish.
              </p>
          </div>
          
          <div className="absolute right-0 bottom-0 w-64 md:w-96 opacity-10 translate-x-1/2 translate-y-1/2">
             <img src="/PNGS/full-flower.png" alt="" className="w-full h-auto" />
          </div>
      </section>

      {/* 5. Let's Connect (Form + Team Image) */}
      <section className="w-full py-24 flex flex-col items-center bg-white px-4">
          <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form Side */}
              <div className="relative p-8 md:p-12 border-[1.5px] border-[#DFAB40]/40 rounded-3xl overflow-hidden bg-white">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                      <div className="grid grid-cols-6 gap-x-8 gap-y-12 p-8">
                          {Array.from({ length: 48 }).map((_, i) => (
                              <img key={i} src="/logo/logoicon.png" alt="" className="w-6 h-6 grayscale opacity-20" />
                          ))}
                      </div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="text-[#20064A] text-2xl md:text-3xl font-serif mb-3">Let&apos;s Connect</h3>
                    <div className="w-32 h-[1px] bg-[#DFAB40]/60 mb-8" />
                    <p className="text-[#20064A]/60 text-xs md:text-sm font-bold tracking-wider mb-10 text-center uppercase">Share your details and we&apos;ll get back to you.</p>

                    <form className="w-full flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Phone Number</label>
                            <input type="text" placeholder="9887711223" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Email Address</label>
                            <input type="email" placeholder="you@example.com" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Subject</label>
                            <input type="text" placeholder="The..." className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[10px] font-bold uppercase tracking-widest pl-1">Message</label>
                            <textarea rows={4} placeholder="Type here..." className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none resize-none" />
                        </div>

                        <button type="button" className="w-full bg-[#20064A] text-white py-4 mt-4 rounded-md font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#300a6e]">
                            Send Now
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                        </button>
                    </form>
                  </div>
              </div>

              {/* Team Image Side */}
              <div className="relative w-full h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/PNGS/team.png" alt="Indigo Team" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20064A]/40 to-transparent" />
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
