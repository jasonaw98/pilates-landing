import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nord = localFont({
  src: "../public/fonts/Nord-Regular.otf",
  variable: "--font-nord",
  display: "swap",
});

const ivyOraDisplay = localFont({
  src: [
    {
      path: "../public/fonts/IvyOraDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IvyOraDisplay-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-ivy-ora-display",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pilates",
  description: "Pilates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        nord.variable,
        ivyOraDisplay.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-[#F7F2EA]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
