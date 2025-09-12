import localFont from "next/font/local";
import { Roboto } from "next/font/google";

export const btEl = localFont({
  src: "../public/fonts/built_titling_el-webfont.woff2",
  weight: "200",
  style: "normal",
  display: "swap",
  variable: "--font-bt-el",
});

export const btRg = localFont({
  src: "../public/fonts/built_titling_rg-webfont.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-bt-rg",
});

export const btSb = localFont({
  src: "../public/fonts/built_titling_sb-webfont.woff2",
  weight: "600",
  style: "normal",
  display: "swap",
  variable: "--font-bt-sb",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const fonts = {
  btEl,
  btRg,
  btSb,
  roboto,
};

export default fonts;
