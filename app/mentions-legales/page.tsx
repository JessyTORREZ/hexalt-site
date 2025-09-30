import React from "react";
import LegalLayout from "@/components/layout/LegalPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Hexalt",
  description:
    "Consultez les Mentions Légales de Hexalt pour en savoir plus sur notre entreprise et nos services.",
};

export default function MentionsLegales() {
return (
    <LegalLayout
      title="Mentions Légales"
      intro="Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, nous vous informons des mentions légales suivantes :"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
          Éditeur du site
        </h2>
        <p>
          Nom de l&apos;entreprise :{" "}
          <span className="font-medium">Jessy Torrez EI</span> <br />
          Adresse : 1Bis route de damelevières 54360 CHARMOIS <br />
          Téléphone : 06 77 51 39 20 <br />
          Email : jestor.devweb@gmail.com <br />
          SIRET : 94281247000014 <br />
        </p>
      </section>

      {/* Hébergement */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
          Hébergement
        </h2>
        <p>
          Hébergeur : Vercel Inc. <br />
          Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis <br />
          Support :{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            className="text-blue-600 underline"
          >
            https://vercel.com
          </a>{" "}
          <br />
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
          <span className="font-medium">Jessy Torrez EI</span>.
        </p>
      </section>

      {/* Responsabilité */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
          Responsabilité
        </h2>
        <p>
          Jessy Torrez EI ne peut être tenue responsable des dommages
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
          <span className="font-medium">jestor.devweb@gmail.com</span>.
        </p>
      </section>
    </LegalLayout>
);
};
