import type { Metadata } from "next";
import { riftBold, robotoCondensed } from "@/lib/fonts";
import "@/styles/main.scss";

export const metadata: Metadata = {
  title:
    "Expert RV Repairs in Boulder, CO | Rolling Repairs - 24/7 Emergency RV Service",
  description:
    "Looking for reliable RV repair in Boulder? Rolling Repairs provides top-notch RV maintenance, roadside assistance, and expert repairs for motorhomes, trailers, and more. Available 24/7 to keep you rolling, mile after mile!",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${riftBold.variable} ${robotoCondensed.variable}`}>
        {children}
      </body>
    </html>
  );
}
