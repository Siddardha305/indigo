import PageHeader from "@/components/layout/PageHeader";
import Hero8 from "@/components/hero8";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="Connect" 
        subtitle="We would love to hear from you. Find our location, contact details, or send us a message."
      />
      <Hero8 />
    </div>
  );
}
