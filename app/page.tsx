import Hero from "@components/sections/Home/Hero";
import Separator from "@components/ui/Separator";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Separator
        wordClassName="font-heading-el text-quaternary text-4xl sm:text-5xl lg:text-6xl"
        floatingWords={["Authentique", "Sans filtre", "Créatif", "Innovant", "Unique", "Percutant", "Étonnant", "Énergique", "Libre"]}
        title="Qui compose Hexalt ?"
      />
      {/* On ajoutera les autres sections ici ensuite */}
    </div>
  );
}
