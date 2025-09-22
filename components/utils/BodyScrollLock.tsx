"use client";

import { useEffect } from "react";
import { useMenuStore } from "@/lib/stores/useMenuStore";

export default function BodyScrollLock() {
  const { isOpen } = useMenuStore();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return null;
}
