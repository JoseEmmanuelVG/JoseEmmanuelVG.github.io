import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "José Emmanuel | CV",
  description: "CV interactivo de José Emmanuel",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
