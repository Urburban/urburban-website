import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://urburban.vercel.app"),
  title: {
    default: "Urburban Designs | Privacy-First AI Services",
    template: "%s | Urburban Designs",
  },
  description: "Urburban Designs offers high-value B2B AI services: document summarization, white papers, custom AI agents. Your data stays private.",
  keywords: ["privacy-first AI", "document summarization", "white paper", "custom AI agent", "Urburban"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://urburban.vercel.app",
    siteName: "Urburban Designs",
    title: "Urburban Designs | Privacy-First AI Services",
    description: "High-value B2B AI services with complete data privacy.",
    images: [
      {
        url: "/Urburban-logo-1.png",
        width: 1200,
        height: 630,
        alt: "Urburban Designs Logo",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#062225] text-[#e38d4f] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e38d4f]/20 bg-[#062225]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/Urburban-logo-horizontal-small.png"
            alt="Urburban Designs Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium text-[#e38d4f]/80 hover:text-[#e38d4f]">Home</Link>
          <Link href="/services" className="text-sm font-medium text-[#e38d4f]/80 hover:text-[#e38d4f]">Services</Link>
          <Link href="/about" className="text-sm font-medium text-[#e38d4f]/80 hover:text-[#e38d4f]">About</Link>
          <Link href="/contact" className="text-sm font-medium text-[#e38d4f]/80 hover:text-[#e38d4f]">Contact</Link>
        </nav>
        <Link href="/contact" className="rounded-full bg-[#e38d4f] text-[#062225] px-4 py-2 text-sm font-medium hover:bg-[#c47a41]">
          Request Quote
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#e38d4f]/20 bg-[#062225] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/Urburban-logo-horizontal-small.png"
              alt="Urburban Designs Logo"
              width={100}
              height={30}
              className="h-8 w-auto"
            />
            <p className="text-sm text-[#e38d4f]/60">© 2026 Urburban Designs. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/urburban.designs/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-[#e38d4f]/60 hover:text-[#e38d4f]">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@urburban.designs" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="text-[#e38d4f]/60 hover:text-[#e38d4f]">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
