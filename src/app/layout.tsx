import type { Metadata } from "next";
import "./globals.css";
import { getData } from "@/actions/get-info";

export const metadata: Metadata = {
  title: "Cumples Cayma",
  description: "Complemento Web Acropolis Cayma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es" className="font-main min-h-dvh">
      <body className="h-dvh flex flex-col">
        <header className="bg-dark-green text-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-row justify-between items-center">
            <div className="flex items-center space-x-3 w-40 md:w-60" data-purpose="logo-container">
              <img
                alt="Nueva Acrópolis Logo"
                className="h-10 object-contain invert brightness-0"
                src="./logo.png"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight mt-2 md:mt-0">
              CUMPLEAÑOS
            </h1>
          </div>
        </header>

        <main className="bg-main-bg  flex-1 flex flex-col">
          {children}
        </main>

      </body>
        
    </html>
  );
}
