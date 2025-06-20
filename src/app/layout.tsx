import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rushikesh Phadtare - Full Stack Developer",
  description:
    "Portfolio of Rushikesh Phadtare - Full Stack Developer specializing in MERN stack, Java Spring Boot, and AI/ML. 500+ DSA problems solved.",
  keywords: "Rushikesh Phadtare, Full Stack Developer, MERN Stack, React, Node.js, Java, Spring Boot, Portfolio",
  author: "Rushikesh Phadtare",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
