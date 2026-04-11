import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/effects/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sumit Singh — Software Engineer",
    template: "%s | Sumit Singh",
  },
  description:
    "Software Engineer with 6+ years of experience in full-stack development, cloud computing, and data engineering. Based in Dallas, TX.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Azure",
    "AWS",
    "Python",
    "C#",
    ".NET",
    "Dallas",
  ],
  authors: [{ name: "Sumit Singh" }],
  openGraph: {
    title: "Sumit Singh — Software Engineer",
    description:
      "Software Engineer with 6+ years of experience in full-stack development, cloud computing, and data engineering.",
    url: "https://sumitsingh.dev",
    siteName: "Sumit Singh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Singh — Software Engineer",
    description:
      "Software Engineer with 6+ years of experience in full-stack development, cloud computing, and data engineering.",
  },
  robots: "index, follow",
  metadataBase: new URL("https://sumitsingh.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-dark text-text antialiased">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
