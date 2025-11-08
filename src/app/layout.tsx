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
  title: "Ciel Dor",
  description: "Ciel D’or Restaurant",
  openGraph: {
    title: "Ciel Dor - Fine Dining Restaurant",
    description: "Experience luxury dining at Ciel D’or ",
    url: "https://ciel-d-or.vercel.app", // change this after deployment
    siteName: "Ciel Dor",
    images: [
      {
        url: "https://ciel-d-or.vercel.app/og-image.jpg", // your OG image
        width: 1200,
        height: 630,
        alt: "Ciel D’or Restaurant Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciel Dor - Fine Dining Restaurant",
    description: "Experience luxury dining at Ciel D’or ",
    images: ["https://ciel-d-or.vercel.app/og-image.jpg"],
  },
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
