import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SplashScreen } from "@/components/SplashScreen";
import { CustomCursor } from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Cyclery Racing | Women's Professional Cycling Team",
  description:
    "Bold. Fast. Unstoppable. Cyclery Racing is a Canadian women's professional cycling team pushing boundaries on and off the road.",
  openGraph: {
    title: "Cyclery Racing | Women's Professional Cycling Team",
    description:
      "Bold. Fast. Unstoppable. Cyclery Racing is a Canadian women's professional cycling team pushing boundaries on and off the road.",
    siteName: "Cyclery Racing",
    type: "website",
  },
  other: {
    "author": "Regina Trevs, trevs.ca",
    "designer": "Regina Trevs, trevs.ca",
    "generator": "Hand coded with Next.js",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <CustomCursor />
        <SplashScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
