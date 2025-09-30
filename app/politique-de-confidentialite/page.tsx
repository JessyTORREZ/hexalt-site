import React from "react";
import LegalLayout from "@/components/layout/LegalPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Hexalt",
  description:
    "Découvrez notre Politique de Confidentialité et comment nous protégeons vos données personnelles.",
};

export default function PolitiqueConfidentialite() {
  return (
    <LegalLayout
      title="Politique de Confidentialité"
      intro="Chez Hexalt, nous accordons une importance primordiale à la protection de vos données personnelles."
    >
      <section className="mb-10">
        <h2 className="text-2xl font-heading-sb mt-6 mb-2">
          1. Données collectées
        </h2>
        <p className="mb-4">
          Lorsque vous utilisez notre formulaire de contact, nous collectons les
          informations suivantes :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
          <li>Numéro de téléphone (optionnel)</li>
          <li>Votre message</li>
        </ul>

        <h2 className="text-2xl font-heading-sb mt-6 mb-2">
          2. Finalité de la collecte
        </h2>
        <p className="mb-4">
          Ces données sont utilisées uniquement pour répondre à vos demandes de
          contact et établir une relation commerciale si nécessaire. Elles ne
          sont jamais revendues ni transmises à des tiers sans votre
          consentement.
        </p>

        <h2 className="text-2xl font-heading-sb mt-6 mb-2">
          3. Conservation des données
        </h2>
        <p className="mb-4">
          Vos données sont conservées uniquement le temps nécessaire au
          traitement de votre demande, puis supprimées si elles ne présentent
          plus d’utilité.
        </p>

        <h2 className="text-2xl font-heading-sb mt-6 mb-2">4. Vos droits</h2>
        <p className="mb-4">
          Conformément au RGPD, vous disposez d’un droit d’accès, de
          rectification et de suppression de vos données. Pour exercer vos
          droits, vous pouvez nous contacter à :{" "}
          <a
            href="mailto:jestor.devweb@gmail.com"
            className="text-primary hover:underline"
          >
            jestor.devweb@gmail.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-heading-sb mt-6 mb-2">5. Sécurité</h2>
        <p className="mb-4">
          Nous mettons en place toutes les mesures nécessaires pour protéger vos
          données contre toute perte, utilisation abusive, accès non autorisé,
          divulgation ou modification.
        </p>
      </section>
    </LegalLayout>
  );
}
