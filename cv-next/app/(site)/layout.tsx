import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "JEVG | Portfolio",
  description: "Portfolio y CV de José Emmanuel Vázquez-Galán",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
