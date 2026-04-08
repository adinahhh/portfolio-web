import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whitney Zilton",
  description: "Backend software engineer with 5+ years of experience building distributed systems, event-driven services, and high-traffic APIs. Focused on backend engineering and application security.",
  metadataBase: new URL("https://ziltonportfolio.io"),
  openGraph: {
    title: "Whitney Zilton — Backend Software Engineer",
    description: "Backend software engineer with 5+ years of experience building distributed systems, event-driven services, and high-traffic APIs.",
    url: "https://ziltonportfolio.io",
    siteName: "Whitney Zilton",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whitney Zilton — Backend Software Engineer",
    description: "Backend software engineer with 5+ years of experience building distributed systems, event-driven services, and high-traffic APIs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col relative overflow-x-hidden">
        {/* Background blobs */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#3D5BE0] opacity-10 blur-[120px]" />
          <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] rounded-full bg-[#4A65A8] opacity-10 blur-[140px]" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#3D5BE0] opacity-[0.07] blur-[100px]" />
        </div>
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line px-6 py-6 text-center text-xs text-ink-3">
          © {new Date().getFullYear()} Whitney Zilton
        </footer>
      </body>
    </html>
  );
}
