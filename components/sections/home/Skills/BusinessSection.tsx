import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function BusinessSection() {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl font-heading-sb text-quaternary mb-6">
          Pourquoi choisir Hexalt pour votre présence en ligne ?
        </h2>
        <p className="font-body text-quaternary leading-relaxed">
          Aujourd’hui, avoir une présence en ligne n’est plus un luxe mais une
          nécessité, même pour les plus petites structures. Les clients
          recherchent leurs prestataires sur internet avant de prendre contact.
          Être absent du web, c’est souvent passer à côté d’opportunités.
          <br />
          <br />
          Chez <span className="font-semibold">Hexalt</span>, j’accompagne les{" "}
          <span className="font-semibold">
            artisans, auto-entrepreneurs et TPE/PME
          </span>{" "}
          dans leur transition digitale. Mon rôle est de rendre le web
          accessible, simple et efficace pour ceux qui pensent encore que cela
          est trop compliqué ou réservé aux grandes entreprises.
          <br />
          <br />
          Un site internet bien construit vous permet de gagner en{" "}
          <span className="font-semibold">visibilité</span>, de renforcer votre{" "}
          <span className="font-semibold">crédibilité</span> et surtout
          d’attirer de nouveaux <span className="font-semibold">clients</span>.
          C’est un investissement stratégique qui vous donne les moyens de
          développer votre activité, de vous différencier de vos concurrents et
          de bâtir une image professionnelle.
          <br />
          <br />
          Avec <span className="font-semibold">Hexalt</span>, la digitalisation
          devient un atout concret pour votre réussite.
        </p>
        <div className="mt-8">
          <Button variant="fancy" className="py-3 px-6" asChild>
            <Link href="/contact">
              <span className="absolute inset-0 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative z-10">Demander un devis gratuit</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


 