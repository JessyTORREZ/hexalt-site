import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const CTAContact: React.FC = () => {
  return (
    <div className="z-[40] w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 bg-secondary-light text-quaternary py-4 px-4 text-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-heading-sb">
        Vous avez un projet en tête ?
      </h2>
      <p className="font-body text-sm md:text-base lg:text-lg max-w-xl">
        Contactez-nous dès aujourd&apos;hui pour en discuter et concrétiser vos
        idées.
      </p>
      <Button variant="fancy" asChild>
        <Link href="/contact">
          <span className="absolute inset-0 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full"></span>
          <span className="relative z-10">Demander un devis gratuit</span>
        </Link>
      </Button>
    </div>
  );
};

export default CTAContact;
