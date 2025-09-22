"use client";

import { useEffect, useRef, useState } from "react";
import { useMenuStore } from "@/lib/stores/useMenuStore";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function BurgerButton({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) {
  const { isOpen } = useMenuStore();
  const [isFixed, setIsFixed] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Élément invisible qui sert de repère */}
      <div ref={sentinelRef} className="absolute top-40 right-8 h-1 w-1" />

      {/* Bouton réel */}
      <Button
        onClick={onClick}
        className={cn(
          "z-[70] p-2 rounded-md bg-quaternary hover:bg-quaternary-dark border border-secondary text-secondary transition",
          isFixed ? "fixed top-6 right-8 shadow-lg" : "absolute right-8",
          className
        )}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </Button>
    </>
  );
}
