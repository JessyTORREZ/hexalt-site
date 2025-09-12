import React from 'react';
import Link from 'next/link';

const CTAContact: React.FC = () => {
  return (
    <div className="absolute z-[40] w-full flex flex-row justify-center items-center gap-6 bg-secondary-light text-quaternary py-1 text-center">
      <h2 className="text-2xl font-heading-sb">Vous avez un projet en tête ?</h2>
      <p className="font-body">
        Contactez-nous dès aujourd'hui pour en discuter et concrétiser vos
        idées.
      </p>
      <button className="group relative overflow-hidden rounded-md border-quaternary border-1 bg-secondary-dark px-6 text-neutral-50 transition">
        <Link
          href="/contact"
          className="inline-block font-body bg-secondary-dark py-3 px-6 rounded-md transition"
        >
          Contactons-nous
        </Link>
        <div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
      </button>
    </div>
  );
};

export default CTAContact;