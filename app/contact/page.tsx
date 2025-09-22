
import React from "react";
import ContactForm from "@/components/sections/contact/ContactForm";
import HomeButton from "@/components/layout/HomeButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Hexalt",
  description: "Contactez Hexalt pour vos projets de création de sites web.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <HomeButton variant="default" label="Accueil" />
      <h2 className="text-secondary-dark text-4xl font-heading-rg mb-4">Nos Services</h2>
      <p>Une idée, une question, un projet ? Contactez-nous !</p>
      <div className="flex items-center justify-around p-4">
        <ContactForm />
      </div>
    </div>
  );
}


