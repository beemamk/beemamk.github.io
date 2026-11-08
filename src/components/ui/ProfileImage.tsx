"use client";

import { useState } from "react";
import Image from "next/image";
import { Terminal, Shield, Zap, Users, Briefcase, Database } from "lucide-react";

export function ProfileImage() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full max-w-[420px] mx-auto flex items-center justify-center select-none">
      {/* Background radial glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 via-sky-500/10 to-emerald-500/20 rounded-full blur-3xl opacity-60 pointer-events-none" />

      {/* Main Arch Frame Container */}
      <div className="relative w-full aspect-[4/5] rounded-[2.5rem] p-1.5 bg-gradient-to-b from-accent/40 via-card-border to-card-border/30 shadow-2xl shadow-accent/10">
        <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-gradient-to-b from-card via-[#0b1324] to-[#070d18] relative flex flex-col items-center justify-end">

          {/* Subtle background tech grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e2e4a_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

          {/* Actual Photo or Fallback Avatar */}
          {!imageError ? (
            <Image
              src="/profile.jpg"
              alt="Beema Beevi M K - Python & Django Backend Engineer"
              fill
              priority
              className="object-cover object-top transition-transform duration-500 hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4 relative z-10">
              <div className="w-28 h-28 rounded-full bg-accent/10 border-2 border-accent/40 flex items-center justify-center shadow-lg shadow-accent/20">
                <span className="text-3xl font-mono font-bold text-accent">BM</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-text-primary">Beema Beevi M K</h4>
                <p className="text-xs font-mono text-accent">Python / Django Backend</p>
                <p className="text-[11px] text-text-secondary max-w-[220px] pt-1">
                  Place your photo as <code className="text-accent bg-card px-1 py-0.5 rounded">public/profile.jpg</code> to display here
                </p>
              </div>
            </div>
          )}

          {/* Bottom gradient fade overlay */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Floating Badges */}
      {/* 1. Top Right: Experience */}
      <div className="absolute -top-3 -right-4 sm:-right-6 bg-card/90 backdrop-blur-md border border-card-border/90 px-3.5 py-1.5 rounded-full text-xs font-medium text-text-primary shadow-lg flex items-center gap-2 hover:border-accent/50 transition-colors">
        <Briefcase size={14} className="text-accent" />
        <span>2+ yrs professional</span>
      </div>

      {/* 2. Middle Right: Scale */}
      <div className="absolute top-1/3 -right-6 sm:-right-8 bg-card/90 backdrop-blur-md border border-card-border/90 px-3.5 py-1.5 rounded-full text-xs font-medium text-text-primary shadow-lg flex items-center gap-2 hover:border-accent/50 transition-colors">
        <Users size={14} className="text-emerald-400" />
        <span>500,000+ users</span>
      </div>

      {/* 3. Middle Left: Async Pipelines */}
      <div className="absolute top-1/4 -left-6 sm:-left-8 bg-card/90 backdrop-blur-md border border-card-border/90 px-3.5 py-1.5 rounded-full text-xs font-medium text-text-primary shadow-lg flex items-center gap-2 hover:border-accent/50 transition-colors">
        <Zap size={14} className="text-amber-400" />
        <span>55+ async pipelines</span>
      </div>

      {/* 4. Center Left: Security & Compliance */}
      <div className="absolute top-1/2 -left-4 sm:-left-6 bg-card/90 backdrop-blur-md border border-card-border/90 px-3.5 py-1.5 rounded-full text-xs font-medium text-text-primary shadow-lg flex items-center gap-2 hover:border-accent/50 transition-colors">
        <Shield size={14} className="text-blue-400" />
        <span>15+ Projects</span>
      </div>

      {/* 5. Bottom Right: DB Load Reduction */}
      <div className="absolute -bottom-2 -right-4 sm:-right-6 bg-card/90 backdrop-blur-md border border-card-border/90 px-3.5 py-1.5 rounded-full text-xs font-medium text-text-primary shadow-lg flex items-center gap-2 hover:border-accent/50 transition-colors">
        <Database size={14} className="text-cyan-400" />
        <span>60% DB load cut</span>
      </div>

      {/* 6. Floating Terminal Pill at Bottom Left */}
      <div className="absolute -bottom-6 left-2 sm:-left-4 bg-[#060c18]/95 backdrop-blur-md border border-accent/30 rounded-xl px-4 py-2.5 font-mono text-xs shadow-xl space-y-1">
        <div className="flex items-center gap-2 text-[10px] text-text-muted">
          <Terminal size={12} className="text-accent" />
          <span>stack.primary</span>
        </div>
        <div className="text-text-primary flex items-center gap-1.5 font-semibold text-[11px] sm:text-xs">
          <span>python</span>
          <span className="text-text-muted">|</span>
          <span className="text-accent">django</span>
          <span className="text-text-muted">|</span>
          <span className="text-emerald-400">postgres</span>
          <span className="inline-block w-2 h-3.5 bg-accent animate-pulse" />
        </div>
      </div>
    </div>
  );
}

