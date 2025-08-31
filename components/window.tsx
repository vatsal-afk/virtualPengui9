"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  id: string
  title: string
  children: React.ReactNode
  className?: string
  onClose?: () => void
  initialCenter?: boolean
  style?: React.CSSProperties
  onFocus?: () => void
  draggable?: boolean
}

export default function Window({
  id,
  title,
  children,
  className,
  onClose,
  initialCenter,
  style,
  onFocus,
  draggable = true,
}: Props) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [pos, setPos] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const drag = React.useRef<{ dx: number; dy: number; active: boolean }>({ dx: 0, dy: 0, active: false })

  React.useEffect(() => {
    if (!initialCenter || !ref.current) return
    const el = ref.current
    const center = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const rect = el.getBoundingClientRect()
      setPos({ x: Math.max(12, vw / 2 - rect.width / 2), y: Math.max(12, vh / 2 - rect.height / 2) })
    }
    center()
    window.addEventListener("resize", center)
    return () => window.removeEventListener("resize", center)
  }, [initialCenter])

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current.active = true
    drag.current.dx = e.clientX - pos.x
    drag.current.dy = e.clientY - pos.y
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    onFocus?.()
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return
    const x = e.clientX - drag.current.dx
    const y = e.clientY - drag.current.dy
    setPos({
      x: Math.max(4, Math.min(x, window.innerWidth - 80)),
      y: Math.max(4, Math.min(y, window.innerHeight - 48)),
    })
  }
  const onPointerUp = (e: React.PointerEvent) => {
    drag.current.active = false
    ;(e.target as Element).releasePointerCapture?.(e.pointerId)
  }

  return (
    <section
      ref={ref}
      role="dialog"
      aria-label={title}
      style={{ left: pos.x, top: pos.y, ...style }}
      className={cn("absolute select-none bg-card text-foreground backdrop-saturate-150 win-chrome", className)}
      onMouseDown={onFocus}
    >
      <header
        className={cn(
          "win-header flex items-center justify-between px-4 h-10 rounded-t-lg bg-secondary/10",
          draggable ? "cursor-move" : "cursor-default",
        )}
        onPointerDown={draggable ? onPointerDown : undefined}
        onPointerMove={draggable ? onPointerMove : undefined}
        onPointerUp={draggable ? onPointerUp : undefined}
      >
        <div className="text-sm font-medium">{title}</div>
        {onClose && (
          <button
            aria-label={`Close ${title}`}
            className="h-6 w-6 inline-grid place-items-center rounded border"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </header>
      <div className="bg-card p-4">{children}</div>
    </section>
  )
}
