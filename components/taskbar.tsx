"use client"

import type { WindowState } from "./portfolio"
import { Terminal, User, Briefcase, Mail, Link, HelpCircle } from "lucide-react"

interface TaskbarProps {
  windows: WindowState[]
  onOpenWindow: (windowId: string) => void
  onFocusWindow: (windowId: string) => void
}

export default function Taskbar({ windows, onOpenWindow, onFocusWindow }: TaskbarProps) {
  const getIcon = (windowId: string) => {
    switch (windowId) {
      case "home":
        return Terminal
      case "about":
        return User
      case "work":
        return Briefcase
      case "contact":
        return Mail
      case "links":
        return Link
      case "faq":
        return HelpCircle
      default:
        return Terminal
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-gray-800 border-t border-gray-700 flex items-center px-2 space-x-1">
      {windows
        .filter((w) => w.isOpen)
        .map((window) => {
          const Icon = getIcon(window.id)
          return (
            <button
              key={window.id}
              onClick={() => onFocusWindow(window.id)}
              className="h-8 px-3 bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded text-xs text-gray-300 flex items-center space-x-2 transition-colors"
            >
              <Icon className="w-3 h-3" />
              <span>{window.title}</span>
            </button>
          )
        })}
    </div>
  )
}
