"use client"

import { useState } from "react"
import WindowManager from "./window-manager"
import DesktopIcons from "./desktop-icons"
import Taskbar from "./taskbar"

export interface WindowState {
  id: string
  title: string
  isOpen: boolean
  position: { x: number; y: number }
  zIndex: number
}

export default function Portfolio() {
  const [windows, setWindows] = useState<WindowState[]>([
    { id: "home", title: "~/portfolio", isOpen: true, position: { x: 200, y: 80 }, zIndex: 1 },
    { id: "about", title: "~/about", isOpen: false, position: { x: 250, y: 120 }, zIndex: 0 },
    { id: "work", title: "~/projects", isOpen: false, position: { x: 300, y: 160 }, zIndex: 0 },
    { id: "contact", title: "~/contact", isOpen: false, position: { x: 350, y: 200 }, zIndex: 0 },
    { id: "links", title: "~/links", isOpen: false, position: { x: 400, y: 240 }, zIndex: 0 },
    { id: "faq", title: "~/help", isOpen: false, position: { x: 450, y: 280 }, zIndex: 0 },
  ])

  const [highestZIndex, setHighestZIndex] = useState(1)

  const openWindow = (windowId: string) => {
    const newZIndex = highestZIndex + 1
    setHighestZIndex(newZIndex)

    setWindows((prev) =>
      prev.map((window) => (window.id === windowId ? { ...window, isOpen: true, zIndex: newZIndex } : window)),
    )
  }

  const closeWindow = (windowId: string) => {
    setWindows((prev) => prev.map((window) => (window.id === windowId ? { ...window, isOpen: false } : window)))
  }

  const focusWindow = (windowId: string) => {
    const newZIndex = highestZIndex + 1
    setHighestZIndex(newZIndex)

    setWindows((prev) => prev.map((window) => (window.id === windowId ? { ...window, zIndex: newZIndex } : window)))
  }

  const moveWindow = (windowId: string, position: { x: number; y: number }) => {
    setWindows((prev) => prev.map((window) => (window.id === windowId ? { ...window, position } : window)))
  }

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden relative font-mono">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Desktop Icons */}
      <DesktopIcons onOpenWindow={openWindow} />

      {/* Windows */}
      <WindowManager
        windows={windows}
        onOpenWindow={openWindow}
        onCloseWindow={closeWindow}
        onFocusWindow={focusWindow}
        onMoveWindow={moveWindow}
      />

      {/* Taskbar */}
      <Taskbar windows={windows} onOpenWindow={openWindow} onFocusWindow={focusWindow} />
    </div>
  )
}
