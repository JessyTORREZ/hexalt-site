import React from "react";

const ServicesPresentation: React.FC = () => {
  return (
    <div className="p-8 md:mt-16 md:ml-8 lg:ml-16 xl:mt-32 xl:ml-32">
      <h1 className="text-4xl font-heading-rg mb-4">Nos Services</h1>
      <h2 className="text-2xl font-heading-rg mb-2">
        Un prestataire sur-mesure
      </h2>
      <p className="text-roboto mb-6 pr-16 md:pr-32 lg:pr-64 xl:pr-128">
        Faire appel à un prestataire, c’est souvent multiplier les échanges et
        courir après les réponses. Et si, au contraire, vous pouviez compter sur
        un interlocuteur unique : disponible, réactif, clair sur les budgets et
        transparent sur l’avancement de vos projets ? Si ça résonne avec vous…
        vous êtes au bon endroit. Une idée, un besoin, une envie ? Découvrez dès
        maintenant tout ce sur quoi on peut avancer ensemble 👇
      </p>
    </div>
  );
};

export default ServicesPresentation;
