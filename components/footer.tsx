import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <div className="bg-sky-100 px-6 py-4">
      <div className="flex justify-center space-x-4 mb-3">
        {[
          { icon: Twitter, href: "https://x.com/virtualPengui9", label: "Twitter" },
          { icon: Github, href: "https://github.com/vatsal-afk", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/vatsal-agarwal-b67315280/", label: "LinkedIn" },
        ].map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.href}
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              aria-label={social.label}
            >
              <Icon className="w-4 h-4 text-white" />
            </a>
          )
        })}
      </div>
      <p className="text-center text-sm text-gray-600">© 2025 vatsal-afk</p>
    </div>
  )
}
