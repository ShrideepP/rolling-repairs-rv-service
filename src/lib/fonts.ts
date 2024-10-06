import { Roboto_Condensed } from "next/font/google";
import localFont from "next/font/local";

export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--roboto-condensed",
});

export const riftBold = localFont({
  src: "../assets/fonts/Rift-Bold.otf",
  weight: "700",
  display: "swap",
  variable: "--rift-bold",
});
