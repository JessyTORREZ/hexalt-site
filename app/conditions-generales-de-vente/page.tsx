import React from "react";
import LegalLayout from "@/components/layout/LegalPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Hexalt",
  description:
    "Découvrez nos Conditions Générales de Vente pour la création de sites web adaptés aux artisans.",
};

export default function CGV() {
  return (
    <LegalLayout
      title="Conditions Générales de Vente"
      intro="Les présentes conditions générales régissent les ventes réalisées par Jessy Torrez EI. Elles définissent les droits et obligations de chaque partie."
    >
        <section className="mb-10">
          <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
            1. Objet
          </h2>
          <p>
            Les présentes CGV ont pour objet de définir les droits et
            obligations des parties dans le cadre de la prestation de création
            de sites web.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
            2. Prestations
          </h2>
          <p>
            Nous proposons des services de conception, développement, et mise en
            ligne de sites web adaptés aux besoins des artisans. Les détails des
            prestations sont définis dans le devis accepté par le client.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
            3. Tarifs et Paiement
          </h2>
          <p>
            Les tarifs sont indiqués dans le devis. Un acompte de{" "}
            <strong>30%</strong> est demandé à la signature du devis. Le solde
            est à régler à la livraison du site.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
            4. Délais
          </h2>
          <p>
            Les délais de réalisation sont donnés à titre indicatif et peuvent
            varier en fonction des besoins spécifiques du projet.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
            5. Propriété Intellectuelle
          </h2>
          <p>
            Le site livré reste la propriété de notre entreprise jusqu’au
            paiement complet de la prestation. Une fois le paiement effectué,
            les droits sont transférés au client.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
            6. Responsabilité
          </h2>
          <p>
            Nous ne saurions être tenus responsables des dommages indirects liés
            à l’utilisation du site livré, tels que des pertes de données ou des
            interruptions d’activité.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-heading-sb text-secondary-dark mb-4">
            7. Litiges
          </h2>
          <p>
            En cas de litige, les parties s’engagent à rechercher une solution
            amiable. À défaut, le tribunal compétent sera celui du siège social
            de notre entreprise.
          </p>
        </section>

        <p className="mt-6">
          Pour toute question relative à nos CGV, n’hésitez pas à nous
          contacter. Merci de votre confiance !
        </p>

        
      
    </LegalLayout>
  );
};
