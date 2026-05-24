import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import TopNavBar from "@/components/TopNavBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRANDCRAFT | Cinematic Gaming Universe",
  description: "Experience next-level gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${publicSans.variable} font-body bg-background text-on-surface antialiased custom-scrollbar overflow-x-hidden`}
        suppressHydrationWarning
      >
        <TopNavBar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
