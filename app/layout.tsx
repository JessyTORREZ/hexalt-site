import "@styles/globals.css";
import fonts from "@public/fonts/index";
import Footer from "@components/layout/Footer";
import LoadingScreen from "@components/ui/LoadingScreen";
import GlobalUI from "@components/layout/GlobalUI";

export const metadata = {
  title: "Hexalt - Développement Web",
  description: "Site vitrine de l'auto-entreprise Hexalt",
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
        <LoadingScreen />
        <GlobalUI>{children}</GlobalUI>
        <Footer />
      </body>
    </html>
  );
}
