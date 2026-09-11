"use client"

import { useReveal } from "@/lib/use-reveal"

const groups = [
  {
    title: "Creative",
    icon: "✦",
    items: [
      "Creative direction",
      "Brand systems",
      "Art direction",
      "Concept development",
      "Storytelling",
    ],
  },
  {
    title: "Craft",
    icon: "◈",
    items: [
      "UI / interface design",
      "Typography",
      "Layout & composition",
      "Motion & interaction",
      "Prototyping",
    ],
  },
  {
    title: "Tools",
    icon: "⬡",
    items: ["Figma", "Adobe suite", "Framer", "Webflow", "After Effects"],
  },
  {
    title: "How I work",
    icon: "◎",
    items: [
      "Clear communication",
      "Decisive judgement",
      "Systems thinking",
      "Collaboration",
      "Client leadership",
    ],
  },
]

const marqueeSkills = [
  "Creative Direction",
  "Brand Identity",
  "Typography",
  "UI Design",
  "Motion",
  "Figma",
  "Webflow",
  "Art Direction",
  "Prototyping",
  "Storytelling",
  "Strategy",
  "Layout",
]

export function Skills() {
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section
      id="skills"
      className="border-t border-border/60 py-20 md:py-28 overflow-hidden"
    >
      {/* Section header */}
      <div className="px-5 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div ref={headerRef} className="reveal">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Skills
            </p>
            <h2 className="mt-6 max-w-xl font-display text-2xl font-bold leading-tight tracking-tight text-balance md:text-3xl">
              What I bring to the table — scannable in seconds.
            </h2>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative mt-10 overflow-hidden border-y border-border/60 py-3">
        <div className="marquee-track">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span
              key={i}
              className="mx-6 whitespace-nowrap text-sm font-medium text-muted-foreground"
            >
              <span className="mr-6 text-accent opacity-40">✦</span>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-5 md:px-8 mt-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((g, gi) => (
              <SkillCard key={g.title} group={g} delay={gi * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  group,
  delay,
}: {
  group: (typeof groups)[0]
  delay: number
}) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_24px_oklch(0.82_0.16_78/0.08)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Subtle hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-accent/5 to-transparent" />

      <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold">
        <span className="text-accent text-base">{group.icon}</span>
        {group.title}
      </h3>
      <ul className="space-y-2.5">
        {group.items.map((item, i) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm leading-relaxed text-muted-foreground"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="h-px w-3 bg-accent/40 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
