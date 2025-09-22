import { Metadata } from "next";
import NotFoundClient from "@/components/sections/not-found/NotFoundClient";

export const metadata: Metadata = {
  title: "Page non trouvée | Hexalt",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
