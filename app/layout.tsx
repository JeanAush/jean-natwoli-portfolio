import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"; 

export const metadata: Metadata = {
  title: { default: "Jean Natwoli | Full-Stack Software Engineer", template: "%s | Jean Natwoli" },
  description: "Jean Natwoli is a Kenya-based Full-Stack Software Engineer building enterprise systems, payment integrations, APIs, data platforms, and cloud-enabled applications.",
  keywords: ["Jean Natwoli", "Full-Stack Software Engineer", "Kenya", "enterprise systems", "payment integrations", "APIs", "cloud engineering"],
  openGraph: {
    title: "Jean Natwoli | Full-Stack Software Engineer",
    description: "Engineering enterprise systems, payment integrations, APIs, and data platforms in Kenya.",
    type: "website",
    locale: "en_KE",
  },
  twitter: { card: "summary", title: "Jean Natwoli | Full-Stack Software Engineer", description: "Enterprise systems, payment integrations, APIs, and data platforms." },
  alternates: { types: { "application/pdf": "/Jean-Natwoli-CV.pdf" } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main className="relative min-h-screen z-10">{children}</main>
        <Footer />
        <Toaster position="top-right" theme="dark" richColors />
      </body>
    </html>
  );
}
