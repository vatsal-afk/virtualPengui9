"use client"

import type { WindowState } from "./portfolio"
import Window from "./window"
import MainWindow from "./main-window"
import AboutWindow from "./about-window"
import WorkWindow from "./work-window"
import ContactWindow from "./contact-window"
import LinksWindow from "./links-window"
import FaqWindow from "./faq-window"

interface WindowManagerProps {
  windows: WindowState[]
  onOpenWindow: (windowId: string) => void
  onCloseWindow: (windowId: string) => void
  onFocusWindow: (windowId: string) => void
  onMoveWindow: (windowId: string, position: { x: number; y: number }) => void
}

export default function WindowManager({
  windows,
  onOpenWindow,
  onCloseWindow,
  onFocusWindow,
  onMoveWindow,
}: WindowManagerProps) {
  const renderWindowContent = (windowId: string) => {
    switch (windowId) {
      case "home":
        return <MainWindow onOpenWindow={onOpenWindow} />
      case "about":
        return <AboutWindow />
      case "work":
        return <WorkWindow />
      case "contact":
        return <ContactWindow />
      case "links":
        return <LinksWindow />
      case "faq":
        return <FaqWindow />
      default:
        return <div>Window not found</div>
    }
  }

  return (
    <>
      {windows
        .filter((window) => window.isOpen)
        .sort((a, b) => a.zIndex - b.zIndex)
        .map((window) => (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            position={window.position}
            zIndex={window.zIndex}
            onClose={() => onCloseWindow(window.id)}
            onFocus={() => onFocusWindow(window.id)}
            onMove={(position) => onMoveWindow(window.id, position)}
          >
            {renderWindowContent(window.id)}
          </Window>
        ))}
    </>
  )
}
