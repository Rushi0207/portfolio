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

export const metadata: Metadata = {
  title: "Rushikesh Phadtare - Full Stack Developer Portfolio",
  description: "Full Stack Developer specializing in MERN stack, AI/ML applications, and modern web technologies. View my projects including AI Resume Critic and enterprise feedback systems.",
  keywords: "Full Stack Developer, MERN Stack, React, Node.js, AI/ML, Portfolio, Rushikesh Phadtare",
  authors: [{ name: "Rushikesh Phadtare" }],
  openGraph: {
    title: "Rushikesh Phadtare - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack, AI/ML applications, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushikesh Phadtare - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack, AI/ML applications, and modern web technologies.",
  },
};

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
