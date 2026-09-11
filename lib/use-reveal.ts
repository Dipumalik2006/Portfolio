"use client"

import { useEffect, useRef } from "react"

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, it adds the `visible` class
 * which triggers CSS transitions defined on `.reveal`, `.reveal-scale`, etc.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible")
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

/**
 * Observes multiple children inside a container and stagger-reveals them.
 */
export function useStaggerReveal<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = Array.from(container.children) as HTMLElement[]

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add("visible"), i * 100)
          })
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
