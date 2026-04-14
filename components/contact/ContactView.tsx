"use client";

import React, { useState } from "react";
import Image from "next/image";
import VioletPetals from "../decorations/VioletPetals";
import PageHeader from "../layout/PageHeader";

export default function ContactView() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    guests: "2 People",
    date: "2026-03-29",
    time: "12:30 PM",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    occasion: "None",
    preferences: "None",
    requests: ""
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const steps = [
    { num: 1, label: "Availability" },
    { num: 2, label: "Details" },
    { num: 3, label: "Confirmation" }
  ];

  return (
    <div className="w-full bg-white font-el-messiri overflow-hidden">
      <PageHeader 
        title="FIND US"
        subtitle="From planning a visit to hosting a special ceremony, simply reaching out, we're here to make that journey easier for you."
      />

      {/* 2. Reserve A Table */}
      <section className="relative w-full py-24 bg-[#20064A] flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <img src="/imges/contact us/reserve a table/reseve a table section find us.webp" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] px-4 flex flex-col items-center text-center">
          <h2 className="text-white text-3xl md:text-5xl mb-3 tracking-wide uppercase">Reserve A Table</h2>
          <p className="text-[#DFAB40] text-sm md:text-base font-medium mb-12 italic uppercase tracking-widest">Book your table in just a few steps</p>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-12 md:gap-32 mb-16 relative w-full max-w-[800px]">
             {/* Background Progress Line */}
             <div className="absolute top-4 left-0 right-0 h-[2px] bg-white/10 hidden md:block" />
             {/* Active Progress Line */}
             <div 
                className="absolute top-4 left-0 h-[2.5px] bg-gradient-to-r from-[#DFAB40] to-[#DFAB40]/20 transition-all duration-700 hidden md:block" 
                style={{ width: `${(currentStep - 1) * 50}%` }}
             />
             
             {steps.map((step, i) => (
               <div key={i} className="flex flex-col items-center gap-4 relative z-10 group transition-all duration-500">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 shadow-lg ${i + 1 <= currentStep ? 'bg-[#DFAB40] text-[#20064A] scale-110 shadow-[#DFAB40]/20' : 'border-[1.5px] border-white/40 text-white/40 bg-[#20064A]'}`}>
                    {step.num}
                  </div>
                  <span className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${i + 1 <= currentStep ? 'text-[#DFAB40]' : 'text-white/30'}`}>
                    {step.label}
                  </span>
               </div>
             ))}
          </div>

          {/* Form Container */}
          <div className="w-full max-w-[900px] bg-[#20064A] border-[1.5px] border-[#DFAB40]/60 rounded-3xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
             {/* Repeating Logo Pattern Watermark */}
             <div className="absolute inset-0 opacity-[0.035] pointer-events-none z-0">
                <div className="grid grid-cols-6 md:grid-cols-12 gap-x-8 gap-y-10 p-10 h-full">
                   {Array.from({ length: 96 }).map((_, i) => (
                      <div key={i} className="flex items-center justify-center">
                         <img src="/logo/logoiconwhite.png" alt="" className="w-5 h-5" />
                      </div>
                   ))}
                </div>
             </div>

             <div className="relative z-10 p-8 md:p-14">
                {currentStep === 1 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                       <div className="flex flex-col gap-3 text-left">
                          <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-80">Guests</label>
                          <div className="relative group">
                            <select 
                               className="w-full bg-white text-[#20064A] p-4 rounded-lg text-sm font-bold outline-none appearance-none cursor-pointer"
                               value={formData.guests}
                               onChange={(e) => setFormData({...formData, guests: e.target.value})}
                            >
                               <option>1 Person</option>
                               <option>2 People</option>
                               <option>4 People</option>
                               <option>6 People</option>
                               <option>8+ People</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#20064A]">
                               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                            </div>
                          </div>
                       </div>
                       <div className="flex flex-col gap-3 text-left">
                          <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-80">Select Date</label>
                          <input 
                             type="date" 
                             className="w-full bg-white text-[#20064A] p-4 rounded-lg text-sm font-bold outline-none cursor-pointer"
                             value={formData.date}
                             onChange={(e) => setFormData({...formData, date: e.target.value})}
                          />
                       </div>
                       <div className="flex flex-col gap-3 text-left">
                          <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-80">Select Time</label>
                          <div className="relative group">
                            <select 
                               className="w-full bg-white text-[#20064A] p-4 rounded-lg text-sm font-bold outline-none appearance-none cursor-pointer"
                               value={formData.time}
                               onChange={(e) => setFormData({...formData, time: e.target.value})}
                            >
                               <option>12:00 PM</option>
                               <option>12:30 PM</option>
                               <option>01:00 PM</option>
                               <option>07:00 PM</option>
                               <option>07:30 PM</option>
                               <option>08:00 PM</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#20064A]">
                               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                            </div>
                          </div>
                       </div>
                    </div>
                    
                    <button 
                       onClick={nextStep}
                       className="group w-full bg-[#DFAB40] text-[#20064A] py-5 rounded-xl font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-[#efbb40] transition-all shadow-[0_10px_30px_rgba(223,171,64,0.3)] active:scale-95"
                    >
                       Check Availability
                       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                    </button>
                    
                    <p className="mt-8 text-[#DFAB40] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3">
                       <span className="w-8 h-px bg-[#DFAB40]/30" />
                       Quick booking • instant confirmation
                       <span className="w-8 h-px bg-[#DFAB40]/30" />
                    </p>
                  </div>
                )}

                {currentStep === 2 && (
                   <div className="animate-in fade-in slide-in-from-right-4 duration-700">
                      <div className="flex items-center justify-center gap-4 mb-10 text-white/90">
                         <h3 className="text-xl md:text-2xl font-serif">Table for {formData.guests.slice(0, 1)}</h3>
                         <div className="text-[#DFAB40]">✦</div>
                         <h3 className="text-xl md:text-2xl font-serif">{formData.date}</h3>
                         <div className="text-[#DFAB40]">✦</div>
                         <h3 className="text-xl md:text-2xl font-serif">{formData.time}</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
                        <div className="flex flex-col gap-2 text-left">
                           <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-70">First Name</label>
                           <input type="text" placeholder="John" className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none focus:border-[#DFAB40] transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2 text-left">
                           <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-70">Last Name</label>
                           <input type="text" placeholder="Doe" className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none focus:border-[#DFAB40] transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2 text-left">
                           <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-70">Phone Number</label>
                           <input type="text" placeholder="+1 (000) 000-0000" className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none focus:border-[#DFAB40] transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2 text-left">
                           <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-70">Email Address</label>
                           <input type="email" placeholder="you@example.com" className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none focus:border-[#DFAB40] transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2 text-left">
                           <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-70">Occasion (optional)</label>
                           <select className="w-full border-b border-white/20 bg-transparent py-3 text-white/60 outline-none appearance-none">
                              <option className="bg-[#20064A]">None</option>
                              <option className="bg-[#20064A]">Birthday</option>
                              <option className="bg-[#20064A]">Anniversary</option>
                              <option className="bg-[#20064A]">Date Night</option>
                           </select>
                        </div>
                        <div className="flex flex-col gap-2 text-left">
                           <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-70">Preferences</label>
                           <select className="w-full border-b border-white/20 bg-transparent py-3 text-white/60 outline-none appearance-none">
                              <option className="bg-[#20064A]">None</option>
                              <option className="bg-[#20064A]">Vegetarian</option>
                              <option className="bg-[#20064A]">Vegan</option>
                              <option className="bg-[#20064A]">Gluten Free</option>
                           </select>
                        </div>
                        <div className="col-span-1 md:col-span-2 flex flex-col gap-2 text-left">
                           <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-70">Special Requests</label>
                           <textarea rows={3} placeholder="Any preferences or notes..." className="w-full border border-white/10 bg-white/5 p-4 rounded-lg text-white outline-none focus:border-[#DFAB40] transition-all resize-none" />
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-4">
                        <button 
                           onClick={prevStep}
                           className="flex-1 border-[1.5px] border-[#DFAB40]/40 text-[#DFAB40] py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#DFAB40]/10 transition-all"
                        >
                           Back
                        </button>
                        <button 
                           onClick={nextStep}
                           className="flex-[2] bg-[#DFAB40] text-[#20064A] py-5 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-[#efbb40] transition-all shadow-[0_10px_30px_rgba(223,171,64,0.3)]"
                        >
                           Confirm Reservation
                           <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                        </button>
                      </div>
                      
                      <p className="mt-10 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">We&apos;ll confirm your booking shortly</p>
                   </div>
                )}

                {currentStep === 3 && (
                   <div className="animate-in fade-in zoom-in duration-1000 flex flex-col items-center">
                      <div className="w-20 h-20 bg-[#DFAB40] rounded-full flex items-center justify-center text-[#20064A] mb-8 shadow-[0_0_50px_rgba(223,171,64,0.3)]">
                         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M20 6L9 17l-5-5"/></svg>
                      </div>
                      
                      <h3 className="text-[#DFAB40] text-3xl md:text-5xl font-serif mb-6 tracking-wide">Reservation Confirmed</h3>
                      <p className="text-white/80 text-sm md:text-base font-medium mb-12">Your table has been successfully booked.</p>

                      <div className="w-full bg-white/5 border border-white/10 p-8 rounded-2xl mb-12 flex flex-col md:flex-row justify-around gap-8 text-center">
                          <div className="flex flex-col gap-2">
                             <label className="text-[#DFAB40] text-[10px] font-bold uppercase tracking-widest opacity-80">Guests</label>
                             <p className="text-white text-xl font-bold uppercase">{formData.guests}</p>
                          </div>
                          <div className="w-px h-12 bg-white/10 hidden md:block self-center" />
                          <div className="flex flex-col gap-2">
                             <label className="text-[#DFAB40] text-[10px] font-bold uppercase tracking-widest opacity-80">Date</label>
                             <p className="text-white text-xl font-bold uppercase">{formData.date}</p>
                          </div>
                          <div className="w-px h-12 bg-white/10 hidden md:block self-center" />
                          <div className="flex flex-col gap-2">
                             <label className="text-[#DFAB40] text-[10px] font-bold uppercase tracking-widest opacity-80">Time</label>
                             <p className="text-white text-xl font-bold uppercase">{formData.time}</p>
                          </div>
                      </div>

                      <p className="text-white text-lg md:text-xl font-serif mb-12 italic opacity-90">&ldquo;We Look Forward To Welcoming You At Indigo.&rdquo;</p>
                      
                      <div className="flex flex-col md:flex-row gap-5 w-full">
                         <button className="flex-1 bg-[#20064A] border border-[#DFAB40]/40 text-white py-5 rounded-xl font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-white/5 transition-all">
                            View Menu
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                         </button>
                         <button className="flex-1 bg-[#DFAB40] text-[#20064A] py-5 rounded-xl font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-[#efbb40] transition-all">
                            Get Directions
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                         </button>
                      </div>
                   </div>
                )}
             </div>
          </div>
        </div>
      </section>

      {/* 3. Find Your Way Section */}
      <section className="w-full py-24 flex flex-col items-center px-4 bg-white">
          <div className="text-center mb-16">
              <h2 className="text-[#20064A] text-3xl md:text-4xl mb-4 tracking-wide">Find Your Way to INDIGO</h2>
              <p className="text-[#DFAB40] text-sm md:text-base font-medium italic">We offer a vibrant atmosphere and a pleasant memory, more so to have you.</p>
          </div>

          <div className="max-w-[1240px] w-full flex flex-col gap-6">
              {/* Map Placeholder - Scaled Down */}
              <div className="w-full aspect-[21/7] bg-gray-100 rounded-xl overflow-hidden border border-[#20064A]/10 shadow-lg relative">
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
             <img src="/imges/contact us/step into indigo/Frame 307.webp" alt="" className="w-full h-full object-cover" />
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
      <section className="w-full py-16 md:py-24 flex flex-col items-center bg-white px-4">
          <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Form Side - Scaled Down */}
              <div className="relative p-6 md:p-10 border-[1.5px] border-[#DFAB40]/40 rounded-3xl overflow-hidden bg-white">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                      <div className="grid grid-cols-6 gap-x-8 gap-y-12 p-8">
                          {Array.from({ length: 48 }).map((_, i) => (
                              <img key={i} src="/logo/logoicon.png" alt="" className="w-6 h-6 grayscale opacity-20" />
                          ))}
                      </div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="text-[#20064A] text-2xl md:text-3xl font-serif mb-3">Let&apos;s Connect</h3>
                    <div className="w-32 h-[1px] bg-[#DFAB40]/60 mb-6" />
                    <p className="text-[#20064A]/60 text-xs font-bold tracking-wider mb-8 text-center uppercase">Share your details and we&apos;ll get back to you.</p>

                    <form className="w-full flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[9px] font-bold uppercase tracking-widest pl-1">Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[9px] font-bold uppercase tracking-widest pl-1">Phone Number</label>
                            <input type="text" placeholder="9887711223" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[9px] font-bold uppercase tracking-widest pl-1">Email Address</label>
                            <input type="email" placeholder="you@example.com" className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[9px] font-bold uppercase tracking-widest pl-1">Subject</label>
                            <input type="text" placeholder="The..." className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#20064A] text-[9px] font-bold uppercase tracking-widest pl-1">Message</label>
                            <textarea rows={3} placeholder="Type here..." className="w-full bg-[#fdf8ec] border border-[#DFAB40]/20 px-4 py-3 rounded-md text-[#20064A] text-sm focus:outline-none resize-none" />
                        </div>

                        <button type="button" className="w-full bg-[#20064A] text-white py-4 mt-2 rounded-md font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#300a6e]">
                            Send Now
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                        </button>
                    </form>
                  </div>
              </div>

              {/* Team Image Side - Scaled Down */}
              <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/imges/contact us/lets connect/Rectangle 133.webp" alt="Indigo Team" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20064A]/40 to-transparent" />
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
