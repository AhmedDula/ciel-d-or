import type { Metadata } from "next";
import { Roboto, Cinzel } from "next/font/google";
import "./globals.css";

import { Navbar } from "./_components/Navbar";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ciel D'or",
  description: "Ciel D'or Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} ${roboto.variable} selection:bg-orange-300 selection:text-black/80 text-[#2c2c2c]
         antialiased font-roboto select-none`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
