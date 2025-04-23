"use client";

import { useState, useRef } from "react";
import { useMenuStore } from "@/lib/stores/useMenuStore";
import CurveReveal from "@/components/ui/CurveReveal";
import BurgerButton from "@/components/ui/BurgerButton";
import SideMenu from "@/components/layout/SideMenu";

export default function BurgerMenuWrapper() {
  const [showCurve, setShowCurve] = useState(false);
  const [startCurve, setStartCurve] = useState(false);
  const { isOpen, openMenu, closeMenu } = useMenuStore();

  

  const handleClick = () => {
    // si menu ouvert → on ferme
    if (isOpen) {
      closeMenu();
    } else {
      setShowCurve(true);
      requestAnimationFrame(() => setStartCurve(true)); // Démarre l'animation de la courbe
    }
  };

  const handleAnimationEnd = () => {
    setStartCurve(false); // Arrête l'animation de la courbe
    setShowCurve(false);
    openMenu();
  };

  return (
    <>
      {showCurve && <CurveReveal start={startCurve} onComplete={handleAnimationEnd} />}
      <BurgerButton onClick={handleClick} />
      {!showCurve && <SideMenu />}
    </>
  );
}
