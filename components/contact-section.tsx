import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactSection() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-light text-gray-800 mb-6 text-center">Get In Touch</h2>
      <div className="max-w-lg mx-auto text-center">
        <p className="text-gray-600 mb-8">
          I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work
          together!
        </p>

        <div className="space-y-4 mb-8">
          <a
            href="mailto:hello@example.com"
            className="flex items-center justify-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Mail className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">hello@example.com</span>
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Twitter, href: "#", label: "Twitter" },
          ].map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label={social.label}
              >
                <Icon className="w-6 h-6 text-white" />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
