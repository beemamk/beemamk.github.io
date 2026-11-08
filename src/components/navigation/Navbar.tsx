"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";

const navItems = [
  { href: "/#about", name: "About" },
  { href: "/#experience", name: "Experience" },
  { href: "/#projects", name: "Projects" },
  { href: "/#skills", name: "Skills" },
  { href: "/architecture", name: "Architecture" },
  { href: "/#education", name: "Education" },
  { href: "/#contact", name: "Contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-card-border/80 bg-background/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand Monogram */}
        <Link
          href="/"
          className="flex items-center gap-2 group text-text-primary transition-transform hover:scale-105"
        >
          <div className="flex items-center justify-center tracking-tighter font-extrabold text-2xl font-mono text-white px-2 py-1 bg-card border border-card-border rounded group-hover:border-accent transition-colors">
            <span className="text-accent">B</span>BMK
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isCurrentPage = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent relative py-1 ${
                  isCurrentPage ? "text-accent" : "text-text-secondary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Resume */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/Beema_Beevi_mk_Resume.pdf"
            download="Beema_Beevi_MK_Resume.pdf"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium px-3.5 py-2 rounded-lg border border-card-border bg-card hover:bg-card-border/50 text-text-primary hover:text-accent transition-all duration-200"
          >
            <Download size={14} className="text-accent" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-card border border-transparent hover:border-card-border transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-card-border bg-background/95 backdrop-blur-xl px-6 py-5 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-text-secondary hover:text-accent py-2 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-card-border">
            <a
              href="/Beema_Beevi_mk_Resume.pdf"
              download="Beema_Beevi_MK_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full text-sm font-mono font-medium px-4 py-2.5 rounded-lg border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20 transition-all"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
