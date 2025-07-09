import { ExternalLink } from "lucide-react"

export default function LinksSection() {
  const links = [
    { title: "GitHub", url: "https://github.com/vatsal-afk/", description: "Check out my code repositories" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/vatsal-agarwal-b67315280/", description: "Connect with me professionally" },
    { title: "Blog", url: "https://medium.com/@virtualPengui9", description: "Read my thoughts" },
    { title: "Resume", url: "#", description: "Download my latest resume" },
  ]

  return (
    <div className="py-8">
      <h2 className="text-3xl font-light text-gray-800 mb-6 text-center">Useful Links</h2>
      <div className="space-y-3 max-w-lg mx-auto">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div>
              <h3 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-gray-600">{link.description}</p>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
          </a>
        ))}
      </div>
    </div>
  )
}
