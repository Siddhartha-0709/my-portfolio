import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Siddhartha Mukherjee",
  description: "A passionate developer and tech enthusiast...",
  themeColor: "#000000",
  openGraph: {
    title: "Siddhartha Mukherjee - A passionate developer and Tech Enthusiast",
    description: "Projects: VideoPod, Spaces, CompileX, and more.",
    url: "https://siddhartha-dev.vercel.app",
    siteName: "Siddhartha Mukherjee KPMG India TE-Oracle Analyst Intern Portfolio",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Portfolio of Siddhartha Mukherjee",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark bg-black w-[100%]`}
      >
        <Navbar className="z-50" />
        {children}
      </body>
    </html>
  );
}
