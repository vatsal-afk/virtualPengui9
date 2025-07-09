export default function WorkSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      tech: ["React", "Node.js", "PostgreSQL"],
      status: "Live",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates",
      tech: ["Next.js", "Socket.io", "MongoDB"],
      status: "In Progress",
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather app with location-based forecasts",
      tech: ["React", "Weather API", "Chart.js"],
      status: "Completed",
    },
  ]

  return (
    <div className="py-8">
      <h2 className="text-3xl font-light text-gray-800 mb-6 text-center">My Work</h2>
      <div className="space-y-6 max-w-2xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  project.status === "Live"
                    ? "bg-green-100 text-green-800"
                    : project.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
