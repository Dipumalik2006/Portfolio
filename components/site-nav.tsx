"use client"

import { useState, useEffect } from "react"

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-[0_1px_0_oklch(1_0_0/5%)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <a
          href="#top"
          className="group font-display text-sm font-bold tracking-tight"
        >
          <span className="text-accent transition-all duration-300 group-hover:drop-shadow-[0_0_8px_oklch(0.82_0.16_78/0.8)]">
            /
          </span>{" "}
          portfolio
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          id="nav-hire-btn"
          className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_0_20px_oklch(0.82_0.16_78/0.4)] md:inline-flex"
        >
          Hire me
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-foreground transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-foreground transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-96" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-1 border-t border-border/60 px-5 py-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-1">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-accent px-4 py-2 text-center text-sm font-semibold text-accent-foreground"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
