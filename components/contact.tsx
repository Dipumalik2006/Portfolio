"use client"

import { useReveal } from "@/lib/use-reveal"

const socials = [
  { href: "mailto:malikdipu2006@gmail.com", label: "malikdipu2006@gmail.com" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "Behance" },
]

export function Contact() {
  const headerRef = useReveal<HTMLDivElement>()
  const ctaRef = useReveal<HTMLDivElement>(0.1)
  const footerRef = useReveal<HTMLDivElement>(0.05)

  return (
    <section
      id="contact"
      className="relative border-t border-border/60 px-5 py-20 md:px-8 md:py-32 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[700px] rounded-full bg-accent/8 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div
          ref={headerRef}
          className="reveal grid gap-10 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Contact
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              Have a meaningful problem worth solving?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              I take on a small number of projects where thoughtful creative
              direction actually moves the needle. Tell me what you&apos;re
              working on.
            </p>
          </div>

          <a
            href="mailto:malikdipu2006@gmail.com"
            id="contact-cta-btn"
            className="group relative w-fit overflow-hidden rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_40px_oklch(0.82_0.16_78/0.5)]"
          >
            <span className="relative z-10">Let&apos;s talk →</span>
            <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
          </a>
        </div>

        {/* Socials row */}
        <div
          ref={ctaRef}
          className="reveal delay-200 mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8 text-sm"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="relative text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div
          ref={footerRef}
          className="reveal delay-300 mt-16 flex items-center justify-between gap-4"
        >
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} — Built with intent.
          </p>
          <a
            href="#top"
            id="back-to-top-btn"
            className="text-xs text-muted-foreground transition-colors hover:text-accent"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </section>
  )
}
