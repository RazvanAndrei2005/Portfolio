import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

const outfit = Outfit({ subsets: ["latin", "latin-ext"], variable: "--font-outfit" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: "400", variable: "--font-plex" });

export const metadata: Metadata = {
  title: "Răzvan Borca — Junior IT Engineer",
  description: "Computer Engineering student building backend services and embedded systems with Java, Spring Boot and Rust.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${plex.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
      
    </html>
  );
}
