export default function AboutSection() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-light text-gray-800 mb-6 text-center">About Me</h2>
      <div className="space-y-4 text-gray-600 max-w-lg mx-auto">
        <p>
          Hey! I'm Vatsal — a C++ enthusiast, backend nerd, and all-around curious developer.
        </p>
        <p>
          I love building things from the ground up — from rendering fractals in real-time with OpenGL to designing full-stack platforms that just work. Physics fascinates me, math keeps me grounded, and diving deep into AI and systems programming is my idea of fun.
          I’m fluent in the MERN stack and have shipped full-stack web apps that blend performance and usability. I've also dabbled in the Web3 world — writing smart contracts and connecting them to playful, interactive interfaces.
          When I’m not coding, I’m probably solving math puzzles, exploring low-level internals, or dreaming up the next side project over a cup of coffee.
        </p>
        <div className="pt-4">
          <h3 className="font-semibold text-gray-800 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["C++", "OpenGL", "React", "TypeScript", "JavaScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "Tailwind CSS", "Python", "Flask", "NLP", "FastAPI", "Redis", "NGINX", "Git", "Linux", "Bash"].map((skill) => (
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
