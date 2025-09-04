import React from 'react';

export default function BusinessSection() {
  return (
    <section className="business-section py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-heading-sb text-gray-800 mb-6">
          Pourquoi choisir Hexalt pour votre site internet ?
        </h2>
        <p className=" font-body text-gray-700 mb-8">
          Chez Hexalt, nous comprenons les besoins spécifiques des artisans,
          autoentrepreneurs et TPE/PME. Nous vous accompagnons dans la création
          d'un site internet professionnel, moderne et adapté à votre activité.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-heading-rg text-gray-800 mb-4">
              Une solution sur mesure
            </h3>
            <p className="text-gray-600 font-body">
              Nous concevons des sites personnalisés qui reflètent votre
              identité et répondent aux besoins de votre clientèle.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-heading-rg text-gray-800 mb-4">
              Accessibilité et simplicité
            </h3>
            <p className="text-gray-600 font-body">
              Nos solutions sont pensées pour être simples à utiliser, même sans
              compétences techniques.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-heading-rg text-gray-800 mb-4">
              Un accompagnement dédié
            </h3>
            <p className="text-gray-600 font-body">
              Nous vous guidons à chaque étape, de la conception à la mise en
              ligne, pour garantir votre satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
