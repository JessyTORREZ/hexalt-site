import { Mail } from "lucide-react";
import { PhoneCall } from "lucide-react";

export default function Hero() {


  return (
    <section className="min-h-[50vh] flex flex-col lg:flex-row font-body">
      <div className="relative w-full lg:w-[50vw] h-[50vh] lg:h-[80vh] flex flex-col justify-start items-center text-center text-quaternary bg-gradient-to-br from-secondary-dark to-secondary-lighter px-4 py-10 shadow-lg">
        <h2 className="absolute lg:self-start text-5xl md:text-7xl lg:text-6xl 2xl:text-7xl mb-4 font-heading-sb">
          Hexalt<span className="text-primary">.</span>
        </h2>

        <div className="flex-grow flex items-center justify-center w-full min-h-[80px]">
          <div className="text-5xl font-body font-el flex gap-4 items-center">
            {/* Ici je vais mettre des animations d'hexagone avec framer-motion */}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-left w-full lg:w-[50vw] text-left  py-10 px-10">
        <h1 className="text-secondary text-4xl md:text-5xl xl:text-6xl font-heading-sb mb-4">
          Hexalt <span className="text-primary">–</span> Sites web créatifs{" "}
          <span className="text-primary">&</span> performants.
        </h1>
        <h2 className="font-roboto text-secondary-dark">
          Développeur web <span className="font-bold">indépendant</span>, basé
          entre <span className="font-bold">Lunéville</span> et{" "}
          <span className="font-bold">Nancy</span>. Hexalt crée des sites
          modernes pour les <span className="font-bold">pros</span> d’ici… et
          d’ailleurs.
        </h2>
        <div className="flex flex-row justify-start items-left text-left py-10 px-10 gap-4">
          <a
            href="mailto:jestor.devweb@gmail.com"
            className="inline-flex items-center justify-center w-24 h-12 rounded-md shadow-lg bg-quaternary text-secondary border-2 border-secondary hover:bg-quaternary-dark"
          >
            <Mail className="size-6" />
          </a>
          <a
            href="tel:0677513920"
            className="inline-flex items-center justify-center gap-2 w-1/3 h-12 font-bold rounded-md shadow-lg bg-quaternary text-secondary border-2 border-secondary hover:bg-quaternary-dark"
          >
            <PhoneCall className="block md:hidden size-6" />
            <p className="hidden md:block">06 77 51 39 20</p>
          </a>
        </div>
      </div>
    </section>
  );
}
        
          
