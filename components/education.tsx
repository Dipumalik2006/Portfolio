"use client"

import { useReveal } from "@/lib/use-reveal"

const timeline = [
  {
    period: "2020 — 2024",
    title: "Bachelor of Design",
    place: "University / Institute",
    note: "Focused on visual communication, brand systems, and creative direction.",
  },
  {
    period: "2023",
    title: "Advanced Interaction Design",
    place: "Independent program",
    note: "Interface design, motion, and prototyping for digital products.",
  },
  {
    period: "Ongoing",
    title: "Self-directed learning",
    place: "Every project",
    note: "Typography, systems thinking, and staying deliberate as tools change.",
  },
]

export function Education() {
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section
      id="education"
      className="border-t border-border/60 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div ref={headerRef} className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Education
          </p>
          <h2 className="mt-6 max-w-xl font-display text-2xl font-bold leading-tight tracking-tight text-balance md:text-3xl">
            The learning journey behind the work.
          </h2>
        </div>

        <ol className="mt-10 border-l border-border">
          {timeline.map((t, i) => (
            <TimelineItem key={t.title} item={t} delay={i * 120} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function TimelineItem({
  item,
  delay,
}: {
  item: (typeof timeline)[0]
  delay: number
}) {
  const ref = useReveal<HTMLLIElement>()

  return (
    <li
      ref={ref}
      className="reveal relative pl-8 pb-10 last:pb-0"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Dot */}
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background transition-all duration-300 group-hover:scale-125" />

      <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
      <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight">
        {item.title}
      </h3>
      <p className="text-sm text-accent">{item.place}</p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {item.note}
      </p>
    </li>
  )
}
