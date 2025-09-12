"use client";

import Header from "@components/layout/Header";
import BurgerButtonWrapper from "@components/layout/BurgerButtonWrapper";
import SideMenu from "@components/layout/SideMenu";
import { CurveProvider } from "@lib/context/CurveContext";

export default function GlobalUI({ children }: { children: React.ReactNode }) {
  return (
    <CurveProvider>
      <Header />
      <BurgerButtonWrapper />
      <SideMenu />
      <main className="min-h-screen">{children}</main>
    </CurveProvider>
  );
}
