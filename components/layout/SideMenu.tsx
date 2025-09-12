"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@lib/stores/useMenuStore";
import Link from "next/link";

// Conteneur qui gère le stagger (effet de cascade)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // délai entre chaque lien
      delayChildren: 0.2, // délai initial
    },
  },
};

// Variants pour chaque lien
const linkVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export default function SideMenu() {
  const { isOpen, closeMenu } = useMenuStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className="fixed top-0 left-0 z-[50] w-full h-screen bg-gradient-to-br from-secondary-dark to-secondary-lighter text-quaternary text-right flex items-center justify-end px-12"
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.nav
            className="flex flex-col gap-6 text-3xl font-heading-sb"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { href: "/", label: "Accueil" },
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Réalisations" },
              { href: "/about", label: "À propos" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <motion.div key={link.href} variants={linkVariants}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="hover:text-orange-500 transition"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
