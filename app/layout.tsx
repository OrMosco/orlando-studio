import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Or Moscovitz — Parametric Developer",
  description: "Parametric developer & software builder for the built environment. AEC tools, BIM, and AI agents.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
