import "@styles/globals.css";
import { Metadata } from "next";
import fonts from "@/lib/fonts";
import Footer from "@components/layout/Footer";
import LoadingScreen from "@components/ui/LoadingScreen";
import GlobalUI from "@components/layout/GlobalUI";

export const metadata: Metadata = {
  title: {
    default: "Hexalt – Développement web & design",
    template: "%s | Hexalt", // %s = remplacé par le titre de la page
  },
  description:
    "Hexalt accompagne les artisans et entreprises dans la création de sites web performants et modernes.",
  openGraph: {
    title: "Hexalt – Développement web & design",
    description:
      "Sites vitrines, e-commerce, SEO et design UI/UX sur-mesure pour vos projets digitaux.",
    url: "https://www.hexalt.fr",
    siteName: "Hexalt",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hexalt – Développement web & design",
    description:
      "Sites vitrines, e-commerce, SEO et design UI/UX sur-mesure pour vos projets digitaux.",
    images: ["https://www.hexalt.fr/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${fonts.btEl.variable} ${fonts.btRg.variable} ${fonts.btSb.variable} ${fonts.roboto.variable}`}
    >
      <body className="bg-quaternary">
        <GlobalUI>{children}</GlobalUI>
        <Footer />
      </body>
    </html>
  );
}
