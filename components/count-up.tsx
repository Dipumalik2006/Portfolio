"use client"

import { useEffect, useRef, useState } from "react"

interface CountUpProps {
  end: number
  suffix?: string
  duration?: number
}

export function CountUp({ end, suffix = "", duration = 1800 }: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          function tick(now: number) {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * end))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
