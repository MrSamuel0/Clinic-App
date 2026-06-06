import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import NavbarLayout from "@/components/layout/NavbarLayout";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clinic App",
  description: "Sistema de gerenciamento de clínica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100">
        <NavbarLayout />
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="text-center text-gray-500 text-xs py-4 border-t border-gray-800">
          © 2026 Clinic App
          <br />
          Sistema de gerenciamento médico
        </footer>
      </body>
    </html>
  );
}