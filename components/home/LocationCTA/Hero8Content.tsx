import React from "react";

export default function Hero8Content() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Title Section */}
      <h2 className="text-[#20064A] text-3xl md:text-4xl lg:text-[44px] font-el-messiri tracking-[0.02em] font-medium mb-3">
        Find Your Way to INDIGO
      </h2>

      {/* Decorative Gold Divider */}
      <div className="flex items-center justify-center w-full max-w-[500px] mb-4">
        <div className="flex-1 w-full bg-gradient-to-r from-transparent to-[#DFAB40] h-[1px]"></div>
        <div className="mx-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#DFAB40"/>
          </svg>
        </div>
        <div className="flex-1 w-full bg-gradient-to-l from-transparent to-[#DFAB40] h-[1px]"></div>
      </div>

      <p className="text-[#DFAB40] font-semibold text-sm md:text-[18px] font-sans tracking-wide max-w-3xl mb-10 text-center uppercase">
        We are well-connected and easy to reach. We wait to serve you with a dining experience like no other.
      </p>

      {/* Map Section */}
      <div className="w-full mb-16 border-[1.5px] border-[#20064A] p-3 rounded-xl shadow-lg bg-white overflow-hidden">
        <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden relative">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.9691866415786!2d-95.78918232446777!3d29.41505317524675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86411d333068779b%3A0xe5a14d45543c983d!2s451%20Minonite%20Rd%20Suite%20190%2C%20Rosenberg%2C%20TX%2077469%2C%20USA!5e0!3m2!1sen!2sin!4v1712711000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Info Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-20 px-4">
        {/* Location */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-[#DFAB40]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h4 className="text-[#20064A] font-el-messiri text-xl font-bold mb-2">Location</h4>
          <p className="text-[#20064A] font-sans text-sm md:text-base font-bold leading-relaxed max-w-[200px]">
             451 Minonite Road, Suite 190 Rosenberg, TX 77469
          </p>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-[#DFAB40]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h4 className="text-[#20064A] font-el-messiri text-xl font-bold mb-2">Contact Us</h4>
          <p className="text-[#20064A] font-sans text-sm md:text-base font-bold leading-relaxed">
             (832)-451-6027
          </p>
        </div>

        {/* Mail Us */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-[#DFAB40]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 className="text-[#20064A] font-el-messiri text-xl font-bold mb-2">Mail Us</h4>
          <p className="text-[#20064A] font-sans text-sm md:text-base font-bold leading-relaxed break-all">
             rathodfrompatan@gmail.com
          </p>
        </div>
      </div>

      {/* Working Hours & Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Working Hours Card */}
        <div className="relative overflow-hidden rounded-xl border-2 border-[#DFAB40] p-8 md:p-12 text-center bg-white shadow-lg flex flex-col items-center justify-center min-h-[400px]">
           {/* Logo Pattern Background */}
           <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0">
              <div className="grid grid-cols-6 gap-8 p-4">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <img src="/logo/logoicon.png" alt="" className="w-8 h-8 object-contain gray-scale brightness-0" />
                  </div>
                ))}
              </div>
           </div>

           <div className="relative z-10 w-full flex flex-col items-center">
            <h3 className="text-[#20064A] font-el-messiri text-2xl md:text-3xl font-bold mb-8">Working Hours</h3>
            
            <div className="space-y-6 flex flex-col items-center">
              <div className="flex flex-col items-center">
                <span className="text-[#20064A] font-bold text-base md:text-lg mb-1">Sunday, Tuesday, Thursday</span>
                <span className="text-[#DFAB40] font-bold text-base md:text-lg">11:00 AM – 9:30 PM</span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-[#20064A] font-bold text-base md:text-lg mb-1">Wednesday</span>
                <span className="text-[#DFAB40] font-bold text-base md:text-lg">11:00 AM – 9:00 PM</span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-[#20064A] font-bold text-base md:text-lg mb-1">Friday, Saturday</span>
                <span className="text-[#DFAB40] font-bold text-base md:text-lg">11:00 AM – 10:00 PM</span>
              </div>

              <div className="pt-4 border-t border-[#DFAB40]/20 w-full">
                <span className="text-[#20064A] font-bold text-sm md:text-base">*Closed on Mondays</span>
              </div>
            </div>
           </div>
        </div>

        {/* Restaurant Image Card */}
        <div className="rounded-xl border-2 border-[#DFAB40] overflow-hidden shadow-lg h-full min-h-[400px]">
          <img 
            src="/hero8/sign.png" 
            alt="INDIGO Indian Restaurant Sign" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
