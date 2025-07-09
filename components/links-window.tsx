import { Link, ExternalLink } from "lucide-react"

export default function LinksWindow() {
  const links = [
    { name: "portfolio-site", url: "#", description: "Complete portfolio showcase", type: "web" },
    { name: "github-profile", url: "https://github.com", description: "Source code & repositories", type: "code" },
    { name: "linkedin-profile", url: "https://linkedin.com", description: "Professional network", type: "social" },
    { name: "dev-blog", url: "#", description: "Technical articles & tutorials", type: "blog" },
    { name: "resume.pdf", url: "#", description: "Latest resume download", type: "file" },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "web":
        return "🌐"
      case "code":
        return "💻"
      case "social":
        return "👥"
      case "blog":
        return "📝"
      case "file":
        return "📄"
      default:
        return "🔗"
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-gray-700">
        <Link className="w-6 h-6 text-purple-400" />
        <div>
          <h2 className="text-xl text-gray-100">Links</h2>
          <p className="text-sm text-gray-500">~/links/bookmarks</p>
        </div>
      </div>

      {/* Links List */}
      <div className="space-y-2">
        <div className="text-green-400 text-sm mb-3">$ ls -la links/</div>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-2 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 transition-colors group"
          >
            <span className="text-lg">{getIcon(link.type)}</span>
            <div className="flex-1">
              <div className="text-gray-300 group-hover:text-blue-400 transition-colors">{link.name}</div>
              <div className="text-xs text-gray-500">{link.description}</div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" />
          </a>
        ))}
      </div>

      {/* Terminal command */}
      <div className="mt-6 p-3 bg-gray-800 border border-gray-700 rounded">
        <div className="text-green-400 text-xs mb-1">$ curl -L links.json</div>
        <div className="text-gray-400 text-xs">
          {"{"}"status": "success", "links": {links.length}
          {"}"}
        </div>
      </div>
    </div>
  )
}
