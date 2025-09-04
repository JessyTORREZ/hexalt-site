import Hero from "@components/sections/Home/Hero";
import ClientBanner from "@/components/sections/Home/ClientBanner";
import BusinessSection from "@/components/sections/Home/BusinessSection";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <ClientBanner />
      <BusinessSection />
      {/* On ajoutera les autres sections ici ensuite */}
    </div>
  );
}
