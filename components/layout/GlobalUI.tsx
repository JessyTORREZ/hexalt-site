"use client";

import Header from "@components/layout/Header";
import BodyScrollLock from "@components/utils/BodyScrollLock";
import { CurveProvider } from "@/lib/context/CurveContext";
import dynamic from "next/dynamic";

// Import dynamique du LoadingScreen
const LoadingScreen = dynamic(() => import("@components/ui/LoadingScreen"), {
  ssr: false,
});

export default function GlobalUI({ children }: { children: React.ReactNode }) {
  return (
    <CurveProvider>
      <LoadingScreen />
      <Header />
      <BodyScrollLock />
      <main>{children}</main>
    </CurveProvider>
  );
}
