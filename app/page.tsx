import Hero from "@components/sections/Home/Hero";
import Separator from "@components/ui/Separator";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Separator
        title={
          <>
            Créatif, exalté, maîtrisé<span className="text-primary">.</span>
          </>
        }
      />
      {/* On ajoutera les autres sections ici ensuite */}
    </div>
  );
}
