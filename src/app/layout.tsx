import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Rushikesh Phadtare - Full Stack Developer",
    template: "%s | Rushikesh Phadtare",
  },
  description:
    "Portfolio of Rushikesh Phadtare - Full Stack Developer specializing in MERN stack, Java Spring Boot, and AI/ML. 500+ DSA problems solved.",
  keywords: [
    "Rushikesh Phadtare",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "Java",
    "Spring Boot",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Rushikesh Phadtare" }],
  creator: "Rushikesh Phadtare",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rushikesh-portfolio.vercel.app",
    title: "Rushikesh Phadtare - Full Stack Developer",
    description:
      "Portfolio of Rushikesh Phadtare - Full Stack Developer specializing in MERN stack, Java Spring Boot, and AI/ML.",
    siteName: "Rushikesh Phadtare Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushikesh Phadtare - Full Stack Developer",
    description:
      "Portfolio of Rushikesh Phadtare - Full Stack Developer specializing in MERN stack, Java Spring Boot, and AI/ML.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
