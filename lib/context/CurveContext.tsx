"use client";

import { createContext, useContext, useState } from "react";
import CurveReveal from "@components/layout/CurveReveal";
import { useMenuStore } from "@/lib/stores/useMenuStore";

type CurveContextType = {
  openCurve: () => void;
};

const CurveContext = createContext<CurveContextType | undefined>(undefined);

export function CurveProvider({ children }: { children: React.ReactNode }) {
  const [showCurve, setShowCurve] = useState(false);
  const [startCurve, setStartCurve] = useState(false);
  const { openMenu } = useMenuStore();

  const openCurve = () => {
    setShowCurve(true);
    requestAnimationFrame(() => setStartCurve(true));
  };

  const handleAnimationEnd = () => {
    setStartCurve(false);
    setShowCurve(false);
    openMenu(); // menu seulement après l'animation
  };

  return (
    <CurveContext.Provider value={{ openCurve }}>
      {children}
      {showCurve && (
        <CurveReveal start={startCurve} onComplete={handleAnimationEnd} />
      )}
    </CurveContext.Provider>
  );
}

export function useCurve() {
  const ctx = useContext(CurveContext);
  if (!ctx) throw new Error("useCurve must be used within a CurveProvider");
  return ctx;
}
