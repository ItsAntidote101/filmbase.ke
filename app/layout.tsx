import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Filmbase Technology Limited | Transparent LED & Smart Glass Kenya",
    template: "%s | Filmbase Technology Limited",
  },
  description:
    "Kenya's first specialist in transparent LED display screens and switchable smart glass. Supply, installation, and support across all 47 counties.",
  keywords: [
    "transparent LED screen Kenya",
    "smart glass Kenya",
    "LED film screen Nairobi",
    "switchable glass Kenya",
    "LED crystal film",
    "PDLC smart film",
    "architectural display Kenya",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://filmbasetechnology.co.ke",
    siteName: "Filmbase Technology Limited",
    // REPLACE: OG image — 1200x630 hero image of an installed LED screen
    images: [
      {
        url: "https://placehold.co/1200x630/111827/ffffff?text=Filmbase+Technology",
        width: 1200,
        height: 630,
        alt: "Filmbase Technology Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // REPLACE: Twitter OG image
    images: ["https://placehold.co/1200x630/111827/ffffff?text=Filmbase+Technology"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${dmMono.variable} antialiased bg-brand-dark text-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
