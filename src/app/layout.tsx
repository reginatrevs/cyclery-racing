import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SplashScreen } from "@/components/SplashScreen";
import { CustomCursor } from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Cyclery Racing | Women's Professional Cycling Team",
  description:
    "Bold. Fast. Unstoppable. Cyclery Racing is a Canadian women's professional cycling team pushing boundaries on and off the road.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CustomCursor />
        <SplashScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
