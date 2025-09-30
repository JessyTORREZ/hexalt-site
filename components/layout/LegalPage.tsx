// components/layout/LegalLayout.tsx
import React, { ReactNode } from "react";
import HomeButton from "@/components/layout/HomeButton";

type LegalPageProps = {
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function LegalPage({
  title,
  intro,
  children,
}: LegalPageProps) {
  return (
    <>
      <HomeButton variant="default" label="Accueil" />
      <div className="px-6 md:px-16 lg:px-32 py-12 max-w-5xl mx-auto font-body text-gray-700 leading-relaxed">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-heading-sb text-primary mb-8 text-center">
          {title}
        </h1>

        {intro && <p className="mb-10">{intro}</p>}

        {children}
      </div>
    </>
  );
}
