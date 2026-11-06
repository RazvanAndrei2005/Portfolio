import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
const outfit = Outfit({ subsets: ["latin", "latin-ext"], variable: "--font-outfit" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: "400", variable: "--font-plex" });

export const metadata: Metadata = {
     metadataBase: new URL("https://www.borcarazvan.tech"),
  title: "Răzvan Borca — Junior IT Engineer",
description: "Computer Science & Engineering student at Politehnica Bucharest, building reliable software from API design and databases to full application logic.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${plex.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
