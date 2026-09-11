"use client"

import Image from "next/image"
import { useRef, useState } from "react"

export function TiltPhoto() {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [glow, setGlow] = useState({ x: 50, y: 50 })

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotX = (0.5 - py) * 16
    const rotY = (px - 0.5) * 16
    setTransform(`perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`)
    setGlow({ x: px * 100, y: py * 100 })
  }

  function reset() {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)")
    setGlow({ x: 50, y: 50 })
  }

  return (
    <div className="relative" style={{ transformStyle: "preserve-3d" }}>
      {/* accent shadow slab behind the card for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-accent/20 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -inset-px rounded-3xl border border-accent/40"
        style={{ transform: "translateZ(-1px)" }}
      />

      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-card shadow-2xl transition-transform duration-200 ease-out will-change-transform"
        style={{ transform, transformStyle: "preserve-3d" }}
      >
        <Image
          src="/portrait.jpeg"
          alt="Portrait photograph"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 40vw"
          className="object-cover object-top"
        />

        {/* dark vignette to blend into the black aesthetic */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

        {/* moving specular highlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{
            background: `radial-gradient(340px circle at ${glow.x}% ${glow.y}%, oklch(0.82 0.16 78 / 0.28), transparent 60%)`,
          }}
        />

        {/* floating label chip that lifts in 3D */}
        <div
          className="absolute bottom-4 left-4 rounded-full border border-accent/50 bg-background/80 px-3 py-1.5 text-xs font-semibold tracking-wide backdrop-blur-sm"
          style={{ transform: "translateZ(45px)" }}
        >
          <span className="text-accent">●</span> Available for work
        </div>
      </div>
    </div>
  )
}
