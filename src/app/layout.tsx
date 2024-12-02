import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from 'next/head';

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
  description: "A passionate developer and tech enthusiast who loves turning ideas into impactful solutions. From designing seamless user experiences to deploying robust applications, I enjoy exploring the endless possibilities of technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <Head>
        <meta name="theme-color" content="#000000" /> 
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark bg-black w-[100%]`}
      >
        {(typeof window !== 'undefined' && window.location.pathname !== "/blogs/docs") && <Navbar className="z-50" />}
        {children}
      </body>
    </html>
  );
}

