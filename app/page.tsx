import Hero from "@components/sections/Home/Hero";
import ClientBanner from "@/components/sections/Home/ClientBanner";
import SkillsSection from "@/components/sections/Home/SkillsSection";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <ClientBanner />
      <SkillsSection />
      {/* On ajoutera les autres sections ici ensuite */}
    </div>
  );
}
