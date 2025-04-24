"use client";
import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SeparatorProps {
  title: ReactNode;
  subtitle?: ReactNode;
  floatingWords?: string[];
  wordClassName?: string;
}

export default function Separator({
  title,
  subtitle,
  floatingWords = [],
  wordClassName,
}: SeparatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  // Gère le changement de mot toutes les X secondes
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % floatingWords.length;
      setCurrentIndex(nextIndex);
      setPosition({
        top: `${Math.random() * 30}%`,
        left: `${Math.random() * 80}%`,
      });
    }, 2500); // 2.5s pour que ça reste fluide

    return () => clearInterval(interval);
  }, [currentIndex, floatingWords.length]);

  return (
    <div className="relative overflow-hidden text-center py-12 px-4 bg-gradient-to-br from-secondary-dark to-secondary-lighter shadow-lg">
      <AnimatePresence mode="wait">
        {floatingWords.length > 0 && (
          <motion.span
            className={`absolute pointer-events-none whitespace-nowrap ${
              wordClassName ?? ""
            }`}
            key={`${floatingWords[currentIndex]}-${currentIndex}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.2, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            style={{
              top: position.top,
              left: position.left,
            }}
          >
            {floatingWords[currentIndex]}
          </motion.span>
        )}
      </AnimatePresence>

      <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-heading-sb text-quaternary mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="relative z-10 text-lg sm:text-xl lg:text-2xl pt-12 text-quaternary font-body max-w-5xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
