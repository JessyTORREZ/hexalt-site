import Hero from "@/components/sections/home/Hero";
import ClientBanner from "@/components/sections/home/ClientBanner";
import SkillsSection from "@/components/sections/home/SkillsSection";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <ClientBanner />
      <SkillsSection />
    </div>
  );
}
