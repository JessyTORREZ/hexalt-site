"use client";

import { useState } from "react";
import { useMenuStore } from "@/lib/stores/useMenuStore";
import CurveReveal from "@/components/layout/CurveReveal";
import BurgerButton from "@components/ui/BurgerButton";
import SideMenu from "@components/layout/SideMenu";

export default function BurgerMenuWrapper() {
  const [showCurve, setShowCurve] = useState(false);
  const [startCurve, setStartCurve] = useState(false);
  const { isOpen, openMenu, closeMenu } = useMenuStore();

  

  const handleClick = () => {

    if (isOpen) {
      closeMenu();
    } else {
      setShowCurve(true);
      requestAnimationFrame(() => setStartCurve(true));
    }
  };

  const handleAnimationEnd = () => {
    setStartCurve(false);
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
