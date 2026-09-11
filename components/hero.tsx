"use client"

import { TiltPhoto } from "@/components/tilt-photo"
import { useEffect, useRef } from "react"

export function Hero() {
  const badgeRef = useRef<HTMLParagraphElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const paraRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [badgeRef, h1Ref, paraRef, ctaRef, photoRef]
    els.forEach((ref, i) => {
      const el = ref.current
      if (!el) return
      el.style.opacity = "0"
      el.style.transform = i < 4 ? "translateY(24px)" : "scale(0.95)"
      setTimeout(() => {
        el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms`
        el.style.opacity = "1"
        el.style.transform = i < 4 ? "translateY(0)" : "scale(1)"
      }, 80)
    })
  }, [])

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pt-28 pb-16 md:px-8 md:pt-40 md:pb-28"
    >
      {/* Ambient glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-accent/8 blur-[100px]"
      />

      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(1 0 0 / 0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div>
          {/* Badge */}
          <p
            ref={badgeRef}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
            Creative direction &amp; execution
          </p>

          {/* Headline */}
          <h1
            ref={h1Ref}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl"
          >
            I turn complex ideas into{" "}
            <span className="shimmer-text">clear, compelling</span> creative
            work.
          </h1>

          {/* Subtext */}
          <p
            ref={paraRef}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground"
          >
            A designer and creative direction lead hired to solve meaningful
            problems through thoughtful, intentional work. Clear. Bold.
            Deliberate — never trend-chasing.
          </p>

          {/* CTA row */}
          <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              id="hero-cta-primary"
              className="group relative overflow-hidden rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_28px_oklch(0.82_0.16_78/0.5)]"
            >
              <span className="relative z-10">Start a project</span>
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
            </a>
            <a
              href="#projects"
              id="hero-cta-secondary"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-secondary hover:border-border/80"
            >
              See the work ↓
            </a>
          </div>

          {/* Social proof micro row */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#e8b", "#9be", "#be9"].map((c, i) => (
                <div
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-background"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Trusted by{" "}
              <span className="font-semibold text-foreground">40+</span> clients
              worldwide
            </p>
          </div>
        </div>

        {/* Photo */}
        <div ref={photoRef} className="mx-auto w-full max-w-sm md:max-w-none">
          <TiltPhoto />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  )
}
