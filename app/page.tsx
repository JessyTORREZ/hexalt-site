import Hero from "@components/sections/Home/Hero";
import ClientBanner from "@/components/sections/Home/ClientBanner";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <ClientBanner />
      {/* On ajoutera les autres sections ici ensuite */}
    </div>
  );
}
