"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      themeVariables: {
        fontFamily: "var(--font-geist-mono), monospace",
        primaryColor: "#111111",
        primaryBorderColor: "#333333",
        primaryTextColor: "#ededed",
        lineColor: "#888888",
        secondaryColor: "#0070F3",
        tertiaryColor: "#111111",
      },
    });

    if (containerRef.current) {
      mermaid
        .render(`mermaid-${Math.random().toString(36).substring(7)}`, chart)
        .then((result) => {
          if (containerRef.current) {
            containerRef.current.innerHTML = result.svg;
            setRendered(true);
          }
        })
        .catch((e) => {
          console.error("Mermaid parsing error", e);
        });
    }
  }, [chart]);

  return (
    <div
      className={`flex justify-center w-full overflow-x-auto bg-card border border-card-border p-6 rounded-xl transition-opacity duration-500 ${
        rendered ? "opacity-100" : "opacity-0"
      }`}
    >
      <div ref={containerRef} />
    </div>
  );
}
