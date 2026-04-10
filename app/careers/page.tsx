import PageHeader from "@/components/layout/PageHeader";

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="Careers" 
        subtitle="Join our passionate team and help us deliver the true taste of INDIGO to our guests."
      />
      
      <div className="pb-24 px-4 flex flex-col items-center">
        <p className="text-gray-600 text-center max-w-2xl font-serif text-lg leading-relaxed">
          We are always looking for passionate people to join our team. Whether you are a chef, server, or manager, we would love to hear from you.
        </p>
        
        <div className="mt-16 w-full max-w-md p-10 border border-[#20064A]/5 rounded-[32px] shadow-2xl bg-white flex flex-col items-center">
           <h4 className="text-[#20064A] font-brolimo text-xl text-center mb-6 uppercase tracking-wider">Send us your CV</h4>
           <p className="text-base text-[#20064A] font-bold text-center mb-2 italic">jobs@indigo.com</p>
           <p className="text-sm text-gray-400 font-medium">(832) 451-6027</p>
        </div>
      </div>
    </div>
  );
}
