"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import HomeButton from "@/components/layout/HomeButton";

export default function NotFoundClient() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 p-6">
      <div className="w-80 h-80">
        <DotLottieReact
          src="https://lottie.host/da8d418d-841d-4ec5-8e43-02a9914bdd9e/O86yfVel3M.lottie"
          loop
          autoplay
        />
      </div>

      <h1 className="text-4xl font-heading-sb text-secondary-dark">
        Oups, cette page n’existe pas !
      </h1>
      <p className="text-lg text-muted-foreground max-w-md">
        On dirait que vous vous êtes perdu… pas de panique, on vous ramène à la
        maison !
      </p>

      <HomeButton variant="default" label="Retour à l’accueil" />
    </div>
  );
}
