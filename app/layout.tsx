import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    images: [
      {
        url: "https://placehold.co/1200x630/0a0a0a/ffffff?text=Filmbase+Technology",
        width: 1200,
        height: 630,
        alt: "Filmbase Technology Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://placehold.co/1200x630/0a0a0a/ffffff?text=Filmbase+Technology"],
  },
  icons: {
    icon: "/favicon-8.png",
    shortcut: "/favicon-8.png",
    apple: "/favicon-8.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon-8.png" />
        <link rel="shortcut icon" href="/favicon-8.png" />
        <link rel="apple-touch-icon" href="/favicon-8.png" />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased bg-white text-[#0a0a0a]`}>
        {children}
      </body>
    </html>
  );
}
