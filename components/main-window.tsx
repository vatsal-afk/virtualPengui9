"use client"

import { User, Link, Briefcase, HelpCircle, Mail, Terminal } from "lucide-react"

interface MainWindowProps {
  onOpenWindow: (windowId: string) => void
}

export default function MainWindow({ onOpenWindow }: MainWindowProps) {
  const navItems = [
    { id: "about", icon: User, label: "about", description: "Personal info" },
    { id: "work", icon: Briefcase, label: "projects", description: "My work" },
    { id: "links", icon: Link, label: "links", description: "External links" },
    { id: "faq", icon: HelpCircle, label: "help", description: "FAQ" },
    { id: "contact", icon: Mail, label: "contact", description: "Get in touch" },
  ]

  return (
    <div>
      {/* Terminal Header */}
      <div className="flex items-center space-x-2 mb-6 pb-2 border-b border-gray-700">
        <Terminal className="w-5 h-5 text-green-400" />
        <span className="text-green-400">alex@portfolio:~$</span>
        <span className="text-gray-400">whoami</span>
      </div>

      {/* Main Content */}
      <div className="space-y-4 mb-6">
        <div className="text-green-400">
          <span className="text-gray-500">{">"}</span> Full-Stack Developer
        </div>
        <div className="text-blue-400">
          <span className="text-gray-500">{">"}</span> UI/UX Designer
        </div>
        <div className="text-yellow-400">
          <span className="text-gray-500">{">"}</span> Open Source Contributor
        </div>
      </div>

      {/* Navigation */}
      <div className="space-y-2">
        <div className="text-gray-500 text-sm mb-3">Available commands:</div>
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => onOpenWindow(item.id)}
              className="w-full flex items-center space-x-3 p-2 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 transition-colors text-left"
            >
              <Icon className="w-4 h-4 text-green-400" />
              <div className="flex-1">
                <div className="text-gray-300">./{item.label}</div>
                <div className="text-xs text-gray-500">{item.description}</div>
              </div>
              <span className="text-gray-600 text-xs">ENTER</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
