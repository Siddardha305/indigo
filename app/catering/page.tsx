import PageHeader from "@/components/layout/PageHeader";
import Hero7 from "@/components/hero7";

export default function CateringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="Catering" 
        subtitle="Bring the flavors of INDIGO to your special events with our premium catering services."
      />
      <Hero7 />
    </div>
  );
}
