"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { path: "/", name: "Home" },
  { path: "/experience", name: "Experience" },
  { path: "/architecture", name: "Architecture" },
];

export function Navbar() {
  const pathname = usePathname() || "/";

  return (
    <nav className="border-b border-card-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-text-primary hover:text-accent transition-colors font-mono font-bold tracking-tight">
          <Terminal size={20} className="text-accent" />
          <span>BEE_DEV</span>
        </Link>
        <div className="flex gap-1 md:gap-4">
          {navItems.map((item) => {
            const isActive = item.path === pathname;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-md",
                  isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary hover:bg-card"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-accent"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
