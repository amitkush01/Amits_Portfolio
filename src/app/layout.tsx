import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Amit Kumar | CS Engineering Student & Full Stack Developer",
  description: "Personal Portfolio of Amit Kumar - Computer Science Engineering Student (2023-2027), Full Stack Developer, and Java & DSA Enthusiast. Specialized in React, Next.js, Java, and Cloud Computing.",
  keywords: [
    "Amit Kumar",
    "Computer Science Student",
    "Full Stack Developer",
    "Java Developer",
    "Data Structures & Algorithms",
    "React Developer",
    "Next.js Portfolio",
    "CGC Landran",
    "Software Engineer Portfolio"
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Amit Kumar | Computer Science Engineer & Full Stack Developer",
    description: "Building scalable web applications and solving real-world problems through code.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="bg-[#050816] text-slate-100 antialiased selection:bg-purple-500/30 selection:text-white relative min-h-screen">
        {children}
      </body>
    </html>
  );
}
