"use client"

import { User, Link, Briefcase, HelpCircle, Mail } from "lucide-react"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: "about", icon: User, label: "about" },
    { id: "links", icon: Link, label: "links" },
    { id: "work", icon: Briefcase, label: "work" },
    { id: "faq", icon: HelpCircle, label: "faq" },
    { id: "contact", icon: Mail, label: "contact" },
  ]

  return (
    <div className="flex justify-center space-x-8 py-4">
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
              activeSection === item.id ? "bg-gray-100" : "hover:bg-gray-50"
            }`}
          >
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-2">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm text-gray-700">{item.label}</span>
          </button>
        )
      })}
    </div>
  )
}
