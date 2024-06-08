import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const astera = localFont({
  src: "../public/fonts/astera.ttf",
  display: "swap",
  variable: "--astera",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

export const apercu = localFont({
  src: [
    {
      path: "../public/fonts/apercu.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/apercu_medium.otf",
      weight: "700",
      style: "medium",
    },
    {
      path: "../public/fonts/apercu_bold.otf",
      weight: "900",
      style: "bold",
    },
  ],
});
