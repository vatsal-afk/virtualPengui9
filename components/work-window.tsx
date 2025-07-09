import { Briefcase, ExternalLink, Github } from "lucide-react"

export default function WorkWindow() {
  const projects = [
    {
      name: "ecommerce-platform",
      description: "Full-stack e-commerce solution",
      tech: ["React", "Node.js", "PostgreSQL"],
      status: "production",
      links: { demo: "#", github: "#" },
    },
    {
      name: "task-manager",
      description: "Real-time collaborative task management",
      tech: ["Next.js", "Socket.io", "MongoDB"],
      status: "development",
      links: { demo: "#", github: "#" },
    },
    {
      name: "weather-dashboard",
      description: "Beautiful weather forecasting app",
      tech: ["React", "Weather API", "Chart.js"],
      status: "completed",
      links: { demo: "#", github: "#" },
    },
  ]

  return (
    <div>
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-gray-700">
        <Briefcase className="w-6 h-6 text-green-400" />
        <div>
          <h2 className="text-xl text-gray-100">Projects</h2>
          <p className="text-sm text-gray-500">~/projects/</p>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-700 bg-gray-800 p-4 rounded">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">📁</span>
                <span className="text-gray-100 font-medium">{project.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    project.status === "production"
                      ? "bg-green-900 text-green-400 border border-green-700"
                      : project.status === "development"
                        ? "bg-yellow-900 text-yellow-400 border border-yellow-700"
                        : "bg-blue-900 text-blue-400 border border-blue-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-3">{project.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-2">
                <a href={project.links.demo} className="text-green-400 hover:text-green-300 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a href={project.links.github} className="text-gray-400 hover:text-gray-300 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
