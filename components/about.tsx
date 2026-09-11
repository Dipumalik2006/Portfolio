"use client"

import { useReveal } from "@/lib/use-reveal"
import { CountUp } from "@/components/count-up"

const stats = [
  { end: 5, suffix: "+", label: "Years shaping ideas" },
  { end: 40, suffix: "+", label: "Projects delivered" },
  { end: 100, suffix: "%", label: "Intentional decisions" },
]

export function About() {
  const sectionRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>(0.1)

  return (
    <section
      id="about"
      className="border-t border-border/60 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div ref={sectionRef} className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            About
          </p>
        </div>

        <div className="mt-6 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div ref={textRef} className="reveal delay-100">
            <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-balance md:text-3xl">
              Curious by default. Confident in the outcome.
            </h2>
          </div>

          <div className="space-y-6">
            <div className="reveal delay-200">
              <p className="text-base leading-relaxed text-muted-foreground">
                I work at the point where messy problems become sharp, usable
                ideas. My job is to understand what a thing is actually trying
                to say, then give it a form that says it well — without
                decoration for its own sake.
              </p>
            </div>
            <div className="reveal delay-300">
              <p className="text-base leading-relaxed text-muted-foreground">
                I care about intent. Every decision on a project should be able
                to answer the question &ldquo;why is this here?&rdquo; If it
                can&apos;t, it goes. That discipline is what keeps the work bold
                instead of loud.
              </p>
            </div>

            {/* Animated stats */}
            <div className="reveal delay-400">
              <div className="flex flex-wrap gap-x-10 gap-y-6 pt-4">
                {stats.map((s) => (
                  <div key={s.label} className="group">
                    <p className="font-display text-3xl font-bold text-foreground tabular-nums">
                      <CountUp end={s.end} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
