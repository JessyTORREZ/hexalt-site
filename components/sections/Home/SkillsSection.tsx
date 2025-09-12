import BusinessSection from "./Skills/BusinessSection";
import AboutSection from "./Skills/AboutSection";

export default function SkillsSection() {
  return (
    <section className="flex flex-col justify-center items-center py-12 px-6 bg-gradient-to-br from-secondary to-secondary-lighter">
      <div className="w-[70vw]">
        <BusinessSection />
        <AboutSection />
      </div>
    </section>
  );
}