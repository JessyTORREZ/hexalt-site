import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Gauche : Hexalt + texte */}
          <div className="max-w-xl relative">
            <h2 className="text-5xl md:text-7xl lg:text-6xl 2xl:text-7xl font-heading-sb text-secondary-dark">
              Hexalt<span className="text-primary">.</span>
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-secondary">
              Développement web sur-mesure pour les artisans, auto-entrepreneurs
              et TPE/PME. Basé entre Nancy et Lunéville, j’accompagne les
              petites entreprises dans leur digitalisation.
            </p>
          </div>

          {/* Droite : mail + mentions / cgv */}
          <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
            <a
              href="mailto:jestor.devweb@gmail.com"
              className="font-body underline-offset-4 hover:underline text-secondary"
            >
              jestor.devweb@gmail.com
            </a>

            <nav className="flex flex-col gap-2 font-body">
              <Link
                href="/mentions-legales"
                className="text-secondary underline-offset-4 hover:underline"
              >
                Mentions légales
              </Link>
              <Link
                href="/conditions-generales-de-vente"
                className="text-secondary underline-offset-4 hover:underline"
              >
                Conditions générales de vente
              </Link>
            </nav>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-10 border-t border-secondary/20 pt-6 text-xs font-body text-secondary/70 text-center md:text-left">
          © {new Date().getFullYear()} Hexalt — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}