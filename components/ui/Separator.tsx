import { ReactNode } from "react";

interface SeparatorProps {
  title: ReactNode;
  subtitle?: ReactNode;
}

export default function Separator({ title, subtitle }: SeparatorProps) {
  return (
    <div className="text-center my-12 py-12 px-4 bg-gradient-to-br from-secondary-dark to-secondary-lighter">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading-sb text-quaternary mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl lg:text-2xl pt-12 text-quaternary font-body max-w-5xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
