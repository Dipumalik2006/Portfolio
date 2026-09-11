"use client"

import Image from "next/image"
import { useReveal } from "@/lib/use-reveal"

const feature = {
  image: "/project-1.png",
  tag: "Brand identity",
  title: "Rebuilding a brand around a single idea",
  description:
    "A full identity system — voice, type, and art direction — anchored to one clear promise. Cut everything that did not serve it.",
  meta: ["Strategy", "Identity", "Art direction"],
}

const secondary = [
  {
    image: "/project-2.png",
    tag: "Product design",
    title: "A dark-first app people actually finish onboarding in",
    meta: ["UI", "Motion"],
  },
  {
    image: "/project-3.png",
    tag: "Campaign",
    title: "A poster campaign that says one thing, loudly",
    meta: ["Concept", "Layout"],
  },
]

export function Projects() {
  const headerRef = useReveal<HTMLDivElement>()
  const featureRef = useReveal<HTMLAnchorElement>(0.08)
  const card1Ref = useReveal<HTMLAnchorElement>(0.1)
  const card2Ref = useReveal<HTMLAnchorElement>(0.1)

  return (
    <section
      id="projects"
      className="border-t border-border/60 px-5 py-20 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div ref={headerRef} className="reveal flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Projects
            </p>
            <h2 className="mt-6 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              The work that does the convincing.
            </h2>
          </div>
        </div>

        {/* Feature project */}
        <a
          ref={featureRef}
          href="#contact"
          id="project-feature"
          className="reveal delay-100 group mt-12 block overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-accent/30 hover:shadow-[0_8px_64px_oklch(0_0_0/0.4)]"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[16/11] overflow-hidden md:aspect-auto">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* Overlay shimmer on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-tr from-accent/10 to-transparent" />
            </div>
            <div className="flex flex-col justify-center gap-4 p-7 md:p-10">
              <span className="w-fit rounded-full border border-accent/50 px-3 py-1 text-xs font-semibold text-accent">
                {feature.tag}
              </span>
              <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-balance md:text-3xl">
                {feature.title}
              </h3>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {feature.meta.map((m) => (
                  <span
                    key={m}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                View case study
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </span>
            </div>
          </div>
        </a>

        {/* Two supporting projects */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            { card: secondary[0], ref: card1Ref, delay: "delay-200", id: "project-secondary-1" },
            { card: secondary[1], ref: card2Ref, delay: "delay-300", id: "project-secondary-2" },
          ].map(({ card, ref, delay, id }) => (
            <a
              key={card.title}
              ref={ref}
              href="#contact"
              id={id}
              className={`reveal ${delay} group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-accent/30 hover:shadow-[0_8px_48px_oklch(0_0_0/0.35)]`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-tr from-accent/10 to-transparent" />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <span className="w-fit rounded-full border border-accent/50 px-3 py-1 text-xs font-semibold text-accent">
                  {card.tag}
                </span>
                <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-balance">
                  {card.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {card.meta.map((m) => (
                    <span
                      key={m}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
