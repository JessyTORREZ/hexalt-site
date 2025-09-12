import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-12 px-6 ">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl font-heading-sb text-quaternary mb-6">
          Qui est Hexalt ?
        </h2>
        <p className="font-body text-quaternary leading-relaxed">
          Je m’appelle <span className="font-semibold">Jessy TORREZ</span>,
          fondateur d’Hexalt, et je suis basé entre{" "}
          <span className="font-semibold">Nancy et Lunéville</span>. J’ai créé
          Hexalt avec une ambition claire : mettre mes compétences en
          développement web au service des petites entreprises de ma région et
          leur permettre d’accéder à une visibilité professionnelle en ligne.
          <br />
          <br />
          Ma philosophie est simple : offrir des solutions{" "}
          <span className="font-semibold">
            fiables, accessibles et adaptées
          </span>{" "}
          à chaque projet, sans jargon technique inutile. Je travaille main dans
          la main avec mes clients pour comprendre leurs besoins réels et
          concevoir un site internet qui reflète leur identité tout en leur
          apportant une véritable valeur ajoutée.
          <br />
          <br />
          Avec <span className="font-semibold">Hexalt</span>, vous n’êtes pas un
          simple dossier parmi d’autres. Vous bénéficiez d’un accompagnement
          personnalisé, ancré localement, avec la garantie d’un interlocuteur
          unique et engagé à vos côtés pour vous aider à faire grandir votre
          activité grâce au digital.
        </p>
        <div className="mt-8">
          <Button className="group relative overflow-hidden rounded-md bg-secondary-dark px-6 text-neutral-50 transition">
            <Link
              href="/contact"
              className="inline-block font-body bg-secondary-dark text-white py-3 px-6 rounded-md transition"
            >
              Travailler avec Hexalt
            </Link>
            <div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
          </Button>
        </div>
      </div>
    </section>
  );
}
