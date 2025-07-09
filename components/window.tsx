"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { X, Minus, Square } from "lucide-react"

interface WindowProps {
  id: string
  title: string
  position: { x: number; y: number }
  zIndex: number
  children: React.ReactNode
  onClose: () => void
  onFocus: () => void
  onMove: (position: { x: number; y: number }) => void
}

export default function Window({ id, title, position, zIndex, children, onClose, onFocus, onMove }: WindowProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const windowRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains("drag-handle")) {
      setIsDragging(true)
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      })
      onFocus()
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = Math.max(0, Math.min(window.innerWidth - 450, e.clientX - dragOffset.x))
        const newY = Math.max(0, Math.min(window.innerHeight - 350, e.clientY - dragOffset.y))
        onMove({ x: newX, y: newY })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragOffset, onMove])

  return (
    <div
      ref={windowRef}
      className="absolute bg-gray-800 border border-gray-700 shadow-2xl overflow-hidden select-none font-mono"
      style={{
        left: position.x,
        top: position.y,
        zIndex,
        width: id === "home" ? "450px" : "400px",
        minHeight: "350px",
      }}
      onClick={onFocus}
    >
      {/* Title Bar */}
      <div
        className="bg-gray-700 text-gray-300 px-3 py-2 flex items-center justify-between cursor-move drag-handle border-b border-gray-600"
        onMouseDown={handleMouseDown}
      >
        <span className="text-sm">{title}</span>
        <div className="flex items-center space-x-2">
          <button className="w-4 h-4 bg-yellow-500 hover:bg-yellow-400 transition-colors text-xs flex items-center justify-center">
            <Minus className="w-2 h-2" />
          </button>
          <button className="w-4 h-4 bg-green-500 hover:bg-green-400 transition-colors text-xs flex items-center justify-center">
            <Square className="w-2 h-2" />
          </button>
          <button
            onClick={onClose}
            className="w-4 h-4 bg-red-500 hover:bg-red-400 transition-colors text-xs flex items-center justify-center"
          >
            <X className="w-2 h-2" />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="p-4 h-full overflow-auto text-gray-300 bg-gray-900">{children}</div>
    </div>
  )
}
