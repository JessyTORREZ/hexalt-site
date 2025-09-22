"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { RefreshCw } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  details: string;
  icon?: React.ReactNode;
};

interface ServiceCardFlipProps extends Service {
  className?: string;
}

const ServiceCardFlip: React.FC<ServiceCardFlipProps> = ({
  title,
  description,
  details,
  icon,
  className,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={cn(
        "relative w-full h-[320px] [perspective:1000px] group cursor-pointer",
        className
      )}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]",
          // Desktop/laptop → flip au hover
          "lg:group-hover:[transform:rotateY(180deg)]",
          // Mobile + tablette → flip via state
          flipped ? "[transform:rotateY(180deg)]" : ""
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-background p-6 shadow-md backface-hidden">
          {icon && <div className="text-primary">{icon}</div>}
          <h3 className="text-xl font-heading-sb text-foreground">{title}</h3>
          <p className="text-sm md:text-base text-muted-foreground text-center">
            {description}
          </p>

          <div className="absolute bottom-3 right-3">
            <div className="flex items-center justify-center size-7 rounded-full bg-muted/70 text-muted-foreground">
              <RefreshCw className="size-4" />
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-secondary-dark text-neutral-50 p-6 shadow-md [transform:rotateY(180deg)] backface-hidden">
          <h3 className="text-lg font-heading-sb">En savoir plus</h3>
          <p className="text-sm md:text-base text-center">{details}</p>
          <div className="absolute bottom-3 right-3">
            <div className="flex items-center justify-center size-7 rounded-full bg-muted/70 text-muted-foreground">
              <RefreshCw className="size-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardFlip;
