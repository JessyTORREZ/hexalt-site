import { Code, Palette, Globe } from "lucide-react";
import ServiceCardFlip from "@components/sections/services/ServicesCard";

const services = [
  {
    title: "Création de site web",
    description: "Sites vitrines, applications sur-mesure, e-commerce...",
    details:
      "Passez votre entreprise dans l&apos;univers 2.0 avec un site web moderne, rapide et adapté à vos besoins.",
    icon: <Code className="size-10" />,
  },
  {
    title: "Design & UI/UX",
    description:
      "Des interfaces modernes et accessibles, pensées pour vos utilisateurs.",
    details:
      "Du maquettage à la charte graphique, en passant par le prototypage : un design réfléchi pour une expérience optimale.",
    icon: <Palette className="size-10" />,
  },
  {
    title: "SEO & Performance",
    description: "Un site rapide, optimisé pour Google et vos visiteurs.",
    details:
      "Optimiser votre référencement naturel pour attirer plus de visiteurs et transformer vos prospects en clients.",
    icon: <Globe className="size-10" />,
  },
];

export default function ServicesGrid() {
  return (
    <section className="grid gap-6 p-8 md:p-16 lg:p-24 md:grid-cols-1 lg:grid-cols-3">
      {services.map((item, index) => (
        <ServiceCardFlip key={index} {...item} />
      ))}
    </section>
  );
}
