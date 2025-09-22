import React from "react";
import HomeButton from "@/components/layout/HomeButton";
import ServicesPresentation from "@/components/sections/services/ServicesPresentation";
import ServiceGrid from "@components/sections/services/ServicesGrid";  
import Separator from "@/components/ui/Separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Hexalt",
  description: "Découvrez les services de création de sites web adaptés aux artisans proposés par Hexalt.",
};

export default function ServicesPage() {
  return (
    <div>
      <HomeButton variant="default" label="Accueil" />
      <ServicesPresentation />
      <Separator className="mx-auto" />
      <ServiceGrid />
    </div>
  );
}
