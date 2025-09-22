import HomeButton from "@/components/layout/HomeButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Hexalt",
  description:
    "Découvrez notre Politique de Confidentialité et comment nous protégeons vos données personnelles.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-left max-w-3xl mx-auto">
<HomeButton variant="default" label="Retour à l’accueil" />
      <h1 className="text-4xl font-heading-sb mb-6 text-secondary-dark">
        Politique de Confidentialité
      </h1>

      <p className="mb-4">
        Chez <strong>Hexalt</strong>, nous attachons une grande importance à la
        protection de vos données personnelles. Cette politique de
        confidentialité a pour objectif de vous informer sur la manière dont
        nous collectons, utilisons et protégeons vos informations.
      </p>

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
        contact et établir une relation commerciale si nécessaire. Elles ne sont
        jamais revendues ni transmises à des tiers sans votre consentement.
      </p>

      <h2 className="text-2xl font-heading-sb mt-6 mb-2">
        3. Conservation des données
      </h2>
      <p className="mb-4">
        Vos données sont conservées uniquement le temps nécessaire au traitement
        de votre demande, puis supprimées si elles ne présentent plus d’utilité.
      </p>

      <h2 className="text-2xl font-heading-sb mt-6 mb-2">4. Vos droits</h2>
      <p className="mb-4">
        Conformément au RGPD, vous disposez d’un droit d’accès, de rectification
        et de suppression de vos données. Pour exercer vos droits, vous pouvez
        nous contacter à :{" "}
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

    </div>
  );
}
