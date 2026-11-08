import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";

export const metadata: Metadata = {
  title: "Beema Beevi M K | Python & Django Backend Engineer",
  description:
    "Portfolio of Beema Beevi M K, Python & Django Backend Engineer specializing in RESTful APIs, database optimization (PostgreSQL/MySQL), Celery & Redis, Docker, and AWS deployments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark scroll-smooth">
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}

