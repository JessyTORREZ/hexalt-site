
import { Mail } from "lucide-react";
import { PhoneCall } from "lucide-react";
import Dolottiereact from "@/components/ui/ImgHome";

export default function Hero() {


  return (
    <section className="flex flex-col lg:flex-row font-body">
      <div className="relative w-full lg:w-[50vw] h-[50vh] lg:h-[100vh] flex flex-col justify-start items-center text-center text-quaternary bg-gradient-to-br from-secondary-lighter to-secondary px-4 py-10 shadow-lg">
       

        <div className="flex-grow flex items-center justify-center w-full min-h-[80px]">
          <Dolottiereact />
        </div>
      </div>

      <div className="flex flex-col justify-center items-left w-full lg:w-[50vw] text-left  py-10 px-10">
        <h1 className="text-secondary-dark text-4xl md:text-5xl xl:text-6xl font-heading-sb mb-4">
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
            className="group relative inline-flex items-center justify-center h-12 w-24 min-w-24 overflow-hidden rounded-md bg-quaternary px-6 text-secondary transition border-2 border-secondary shadow-lg"
          >
            <Mail className="size-6 relative z-10" />
            {/* Effet hover progressif */}
            <div className="absolute inset-0 h-full w-0 bg-secondary/30 transition-[width] duration-300 ease-out group-hover:w-full"></div>
          </a>
          <a
            href="tel:0677513920"
            className="group relative inline-flex items-center justify-center gap-2 w-48 min-w-24 lg:min-w-3xs h-12 font-bold rounded-md shadow-lg bg-quaternary text-secondary border-2 border-secondary overflow-hidden transition"
          >
            {/* Icône */}
            <PhoneCall className="block size-6 relative z-10" />

            {/* Numéro visible sur desktop */}
            <p className="hidden md:block relative z-10">: 06 77 51 39 20</p>

            {/* Effet hover progressif */}
            <div className="absolute inset-0 h-full w-0 bg-secondary/30 transition-[width] duration-300 ease-out group-hover:w-full"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
        
          
