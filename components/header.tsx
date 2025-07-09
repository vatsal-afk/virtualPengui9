"use client"

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  return (
    <div className="bg-white">
      {/* Star icon */}
      <div className="flex justify-center pt-6 pb-2">
        <div className="text-4xl">⭐</div>
      </div>

      {/* Navigation bar */}
      <div className="bg-gray-700 text-white px-4 py-2">
        <button
          onClick={() => setActiveSection("home")}
          className={`text-sm ${activeSection === "home" ? "font-semibold" : ""}`}
        >
          home
        </button>
      </div>
    </div>
  )
}
