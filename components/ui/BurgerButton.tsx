"use client";

import { useMenuStore } from "@/lib/stores/useMenuStore";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BurgerButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function BurgerButton({
  onClick,
  className,
}: BurgerButtonProps) {
  const { isOpen } = useMenuStore();

  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed top-6 right-6 z-50 p-2 rounded-md bg-quaternary hover:bg-quaternary-dark border border-secondary text-secondary transition",
        className
      )}
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
    >
      {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
    </button>
  );
}
