"use client"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => setMounted(true), [])
  
  if (!mounted) return null
  
  const isDark = resolvedTheme === "dark"
  
  return (
    <button
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-2 hover:bg-muted transition"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      <span className="text-xs">{isDark ? "dark" : "light"}</span>
    </button>
  )
}