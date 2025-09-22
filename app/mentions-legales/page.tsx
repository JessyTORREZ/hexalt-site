import React from "react";
import HomeButton from "@/components/layout/HomeButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Hexalt",
  description:
    "Consultez les Mentions Légales de Hexalt pour en savoir plus sur notre entreprise et nos services.",
};

const MentionsLegales = () => {
return (
  <>
    <HomeButton variant="default" label="Accueil" />
    <div className="px-6 md:px-16 lg:px-32 py-12 max-w-5xl mx-auto font-body text-gray-700 leading-relaxed">
      {/* Titre principal */}
      <h1 className="text-4xl md:text-5xl font-heading-sb text-primary mb-8 text-center">
        Mentions Légales
      </h1>

      <p className="mb-10">
        Bienvenue sur notre site. Conformément aux dispositions des articles
        6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans
        l&apos;économie numérique, nous vous informons des mentions légales
        suivantes :
      </p>

      {/* Éditeur */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
          Éditeur du site
        </h2>
        <p>
          Nom de l&apos;entreprise :{" "}
          <span className="font-medium">[Nom de l&apos;entreprise]</span> <br />
          Adresse : [Adresse de l&apos;entreprise] <br />
          Téléphone : [Numéro de téléphone] <br />
          Email : [Adresse email] <br />
          SIRET : [Numéro SIRET] <br />
        </p>
      </section>

      {/* Hébergement */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
          Hébergement
        </h2>
        <p>
          Hébergeur : [Nom de l&apos;hébergeur] <br />
          Adresse : [Adresse de l&apos;hébergeur] <br />
          Téléphone : [Numéro de téléphone de l&apos;hébergeur] <br />
        </p>
      </section>

      {/* Propriété intellectuelle */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
          Propriété intellectuelle
        </h2>
        <p>
          Le contenu de ce site (textes, images, graphismes, logo, icônes, etc.)
          est protégé par le droit d&apos;auteur. Toute reproduction,
          distribution, modification ou utilisation, même partielle, est
          interdite sans l&apos;autorisation écrite préalable de{" "}
          <span className="font-medium">[Nom de l&apos;entreprise]</span>.
        </p>
      </section>

      {/* Responsabilité */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
          Responsabilité
        </h2>
        <p>
          [Nom de l&apos;entreprise] ne peut être tenue responsable des dommages
          directs ou indirects causés par l&apos;utilisation du site ou des
          informations qui y sont présentées.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
          Contact
        </h2>
        <p>
          Pour toute question ou demande d&apos;information, vous pouvez nous
          contacter à l&apos;adresse email suivante :{" "}
          <span className="font-medium">[Adresse email]</span>.
        </p>
      </section>

      {/* Bouton retour */}
    </div>
  </>
);
};

export default MentionsLegales;
