import React from 'react';
import HomeButton from '@/components/layout/HomeButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos | Hexalt',
  description: 'En savoir plus sur Hexalt, notre équipe et notre philosophie.',
};

export default function AboutPage() {
  return (
    <div className="px-6 md:px-16 lg:px-32 py-12 max-w-5xl mx-auto">
      <HomeButton variant="default" label="Accueil" />
      <h1 className="text-4xl md:text-5xl font-heading-sb text-primary mb-6">
        À propos de nous
      </h1>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Bienvenue sur la page <strong>À propos</strong> de notre site ! Ici, on
        vous raconte qui nous sommes, ce qu’on fait et surtout pourquoi on le
        fait. Parce que derrière chaque ligne de code, chaque pixel designé,
        chaque projet livré… il y a une équipe qui croit en ce qu’elle fait.
      </p>

      <h2 className="text-2xl md:text-3xl font-heading-sb text-secondary-dark mb-4">
        Notre histoire
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        L’aventure a commencé avec une simple idée : créer des solutions web
        modernes, performantes et accessibles à tous. Depuis nos débuts, nous
        avons accompagné des indépendants, des startups et des entreprises
        établies à donner vie à leurs projets numériques.
      </p>

      <h2 className="text-2xl md:text-3xl font-heading-sb text-secondary-dark mb-4">
        Notre philosophie
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Nous croyons en une approche <em>humaine</em> de la technologie : être à
        l’écoute, expliquer clairement et avancer main dans la main avec nos
        clients. Transparence, réactivité et créativité sont nos maîtres mots.
      </p>

      <h2 className="text-2xl md:text-3xl font-heading-sb text-secondary-dark mb-4">
        Ce que nous faisons
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
        <li>Développement de sites vitrines et e-commerce</li>
        <li>Applications web sur mesure</li>
        <li>Design UI/UX moderne et fonctionnel</li>
        <li>Optimisation SEO et performance</li>
        <li>Conseil et accompagnement technique</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-heading-sb text-secondary-dark mb-4">
        Une équipe passionnée
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Derrière chaque projet se cache une équipe curieuse, motivée et toujours
        prête à relever de nouveaux défis. On adore expérimenter, apprendre et
        partager nos découvertes pour grandir avec vous.
      </p>

      <p className="text-lg font-heading-rg text-primary mt-10 text-center">
        🚀 Ensemble, faisons décoller vos idées.
      </p>
    </div>
  );
}
