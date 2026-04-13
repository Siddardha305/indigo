import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono, El_Messiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import LunchSpecialPopup from "@/components/popup/LunchSpecialPopup";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const elMessiri = El_Messiri({
  variable: "--font-el-messiri",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "INDIGO - Indo-Pak Restaurant",
  description: "Experience the true taste of Indo-Pak cuisine at INDIGO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${geistMono.variable} ${elMessiri.variable} h-full antialiased`}
    >
      <body 
        className="font-sans min-h-full flex flex-col bg-background text-brand-white"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <LunchSpecialPopup />
        <Footer />
      </body>
    </html>
  );
}
