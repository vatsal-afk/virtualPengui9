"use client"

import { Terminal, Folder } from "lucide-react"

interface DesktopIconsProps {
  onOpenWindow: (windowId: string) => void
}

export default function DesktopIcons({ onOpenWindow }: DesktopIconsProps) {
  return (
    <div className="absolute top-4 left-4 space-y-4">
      <div className="flex flex-col items-center space-y-1 cursor-pointer group" onClick={() => onOpenWindow("home")}>
        <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded flex items-center justify-center group-hover:bg-gray-700 transition-colors">
          <Terminal className="w-6 h-6 text-green-400" />
        </div>
        <span className="text-xs text-gray-400 group-hover:text-green-400 transition-colors">terminal</span>
      </div>

      <div className="flex flex-col items-center space-y-1 cursor-pointer group" onClick={() => onOpenWindow("work")}>
        <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded flex items-center justify-center group-hover:bg-gray-700 transition-colors">
          <Folder className="w-6 h-6 text-blue-400" />
        </div>
        <span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors">files</span>
      </div>
    </div>
  )
}
