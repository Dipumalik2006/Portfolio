"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function update() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[60] h-[2px] bg-accent transition-none"
      style={{ width: `${width}%` }}
    />
  )
}
