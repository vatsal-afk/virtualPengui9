import { User, Code, Coffee } from "lucide-react"

export default function AboutWindow() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-gray-700">
        <User className="w-6 h-6 text-blue-400" />
        <div>
          <h2 className="text-xl text-gray-100">About</h2>
          <p className="text-sm text-gray-500">~/about/README.md</p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 text-sm">
        <div>
          <span className="text-green-400"># </span>
          <span className="text-gray-300">Personal Information</span>
        </div>

        <div className="pl-4 space-y-2 text-gray-400">
          <p>Hello! I'm a passionate full-stack developer who loves building efficient, scalable applications.</p>
          <p>I enjoy working with modern technologies and contributing to open-source projects.</p>
        </div>

        <div className="mt-6">
          <span className="text-green-400">## </span>
          <span className="text-gray-300">Skills</span>
        </div>

        <div className="pl-4 space-y-2">
          <div className="flex items-center space-x-2">
            <Code className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-400">Languages:</span>
            <span className="text-gray-300">JavaScript, TypeScript, Python, Go</span>
          </div>
          <div className="flex items-center space-x-2">
            <Coffee className="w-4 h-4 text-orange-400" />
            <span className="text-gray-400">Frameworks:</span>
            <span className="text-gray-300">React, Node.js, Next.js, Express</span>
          </div>
        </div>

        <div className="mt-6 p-3 bg-gray-800 border border-gray-700 rounded">
          <div className="text-green-400 text-xs mb-1">$ cat status.txt</div>
          <div className="text-gray-400 text-xs">Currently: Available for new opportunities</div>
          <div className="text-gray-400 text-xs">Location: Remote / San Francisco</div>
        </div>
      </div>
    </div>
  )
}
