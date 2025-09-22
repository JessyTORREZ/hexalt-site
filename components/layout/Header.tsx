"use client";

import { usePathname } from "next/navigation";
import CTAContact from "@components/layout/CTAContact";
import BurgerButtonWrapper from "@components/layout/BurgerButtonWrapper";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "z-[30] flex flex-col w-full",
        pathname === "/" ? "absolute" : "relative"
      )}
    >
      {/* Logo */}
      {pathname !== "/" && <CTAContact />}
      <div className="flex justify-between items-center py-4 px-4 md:px-8 lg:px-16 2xl:px-32 bg-transparent">
        <h2 className="text-secondary-dark lg:self-start text-5xl md:text-7xl lg:text-6xl 2xl:text-7xl font-heading-sb">
          Hexalt<span className="text-primary">.</span>
        </h2>
        <BurgerButtonWrapper />
      </div>
    </header>
  );
}
