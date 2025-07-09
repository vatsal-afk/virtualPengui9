import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react"

export default function ContactWindow() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-gray-700">
        <Mail className="w-6 h-6 text-red-400" />
        <div>
          <h2 className="text-xl text-gray-100">Contact</h2>
          <p className="text-sm text-gray-500">~/contact/info</p>
        </div>
      </div>

      {/* Terminal-style contact info */}
      <div className="space-y-4 mb-6">
        <div className="bg-gray-800 p-3 border border-gray-700 rounded">
          <div className="text-green-400 text-sm mb-2">$ cat contact.txt</div>
          <div className="space-y-1 text-sm">
            <div>
              <span className="text-gray-500">email:</span> <span className="text-blue-400">alex@example.com</span>
            </div>
            <div>
              <span className="text-gray-500">status:</span> <span className="text-green-400">available</span>
            </div>
            <div>
              <span className="text-gray-500">timezone:</span> <span className="text-gray-300">UTC-8 (PST)</span>
            </div>
          </div>
        </div>

        <div className="text-gray-400 text-sm">
          I'm always interested in discussing new opportunities, collaborations, or just chatting about technology.
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-2">
        <div className="text-gray-500 text-sm mb-3">Social links:</div>
        {[
          { icon: Github, label: "github", url: "#", color: "text-gray-400" },
          { icon: Linkedin, label: "linkedin", url: "#", color: "text-blue-400" },
          { icon: Twitter, label: "twitter", url: "#", color: "text-sky-400" },
        ].map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.url}
              className="flex items-center space-x-3 p-2 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <Icon className={`w-4 h-4 ${social.color}`} />
              <span className="text-gray-300">./{social.label}</span>
              <span className="text-gray-600 text-xs ml-auto">LINK</span>
            </a>
          )
        })}
      </div>

      {/* Quick contact */}
      <div className="mt-6 p-3 bg-gray-800 border border-gray-700 rounded">
        <div className="flex items-center space-x-2 text-sm">
          <Send className="w-4 h-4 text-green-400" />
          <span className="text-gray-400">Quick contact:</span>
          <a href="mailto:alex@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
            Send email
          </a>
        </div>
      </div>
    </div>
  )
}
