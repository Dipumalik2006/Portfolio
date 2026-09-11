"use client"

import { useReveal } from "@/lib/use-reveal"

const items = [
  {
    year: "2024",
    title: "Design recognition",
    detail: "Work featured for clarity of concept and execution.",
  },
  {
    year: "2023",
    title: "Certified — Interaction Design",
    detail: "Completed an advanced program in product and motion design.",
  },
  {
    year: "2022",
    title: "Client leadership",
    detail: "Led creative direction on cross-team brand projects.",
  },
]

export function Achievements() {
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section
      id="achievements"
      className="border-t border-border/60 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div ref={headerRef} className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Achievements
          </p>
          <h2 className="mt-6 max-w-xl font-display text-2xl font-bold leading-tight tracking-tight text-balance md:text-3xl">
            Recognition earned, not inflated.
          </h2>
        </div>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {items.map((it, i) => (
            <AchievementRow key={it.title} item={it} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementRow({
  item,
  delay,
}: {
  item: (typeof items)[0]
  delay: number
}) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal group flex flex-col gap-1 py-5 transition-colors duration-200 hover:bg-secondary/40 sm:flex-row sm:items-center sm:gap-8 px-2 -mx-2 rounded-lg"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="font-mono text-sm text-accent sm:w-16 shrink-0">
        {item.year}
      </span>
      <h3 className="font-display text-lg font-bold tracking-tight sm:w-72 transition-colors group-hover:text-accent">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {item.detail}
      </p>
    </div>
  )
}
