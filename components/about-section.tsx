export default function AboutSection() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-light text-gray-800 mb-6 text-center">About Me</h2>
      <div className="space-y-4 text-gray-600 max-w-lg mx-auto">
        <p>
          Hello! I'm a passionate full-stack developer with a love for creating beautiful and functional web
          applications. I specialize in React, Node.js, and modern web technologies.
        </p>
        <p>
          When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or
          enjoying a good cup of coffee while sketching out my next big idea.
        </p>
        <div className="pt-4">
          <h3 className="font-semibold text-gray-800 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Tailwind CSS"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
