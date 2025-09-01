"use client"

import type React from "react"

import { useState } from "react"
import { Github, Linkedin, Mail, Info, Folder, MessageCircle } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import Window from "@/components/window"
import ThemeToggle from "@/components/theme-toggle"

type Project = {
  title: string
  description: string
  image: string
  demo: string
  code: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: "Facto",
    description: "Real-Time Misinformation Detection and Verification System for Broadcast Media",
    image: "/image.png",
    demo: "https://youtu.be/aau0Zq4QEDk?si=mXVYLUpbFXAysw5M",
    code: "https://github.com/vatsal-afk/Facto",
    tags: ["NLP", "ffmpeg", "Next.js", "Smart Contracts"],
  },
  {
    title: "Zest",
    description: "A NFT Skin Marketplace and Open World Game",
    image: "/image copy 2.png",
    demo: "",
    code: "https://github.com/10m4y/Zest",
    tags: [
      "Three.js",
      "Solidity",
      "Smart Contracts",
      "NFT",
      "ERC721",
      "Metaverse",
    ]

  },
  {
    title: "Aethereal",
    description: "Procedural Graphics Rendering Engine written in C++",
    image: "/image copy.png",
    demo: "https://drive.google.com/file/d/1BC_-vWuE6aJfjBp0z2tDwLyhrc1BiuYQ/view?usp=sharing",
    code: "https://github.com/vatsal-afk/Aethereal",
    tags: ["OpenGL", "C++", "ImGUI", "Shaderss"],
  },
  {
    title: "Multiplayer Car Racing Game",
    description: "Turned phones into steering wheels with React Native, WebSockets, and Unity for real-time multiplayer racing.",
    image: "/image copy 3.png",
    demo: "",
    code: "https://github.com/TinkeringLab-IITR/Racing-Game",
    tags: ["Unity", "WebSockets", "React Native", "Gyro"],
  },
]

// simple z-index manager
function useZIndex(count: number) {
  const base = 10
  const [order, setOrder] = useState<number[]>(Array.from({ length: count }, (_, i) => i))
  const bringToFront = (i: number) =>
    setOrder((prev) => {
      const without = prev.filter((x) => x !== i)
      return [...without, i]
    })
  const z = (i: number) => base + order.indexOf(i)
  return { z, bringToFront }
}

export default function Page() {
  const { resolvedTheme } = useTheme()
  const [open, setOpen] = useState({ home: true, about: false, projects: false, contact: false })
  const { z } = useZIndex(4)

  return (
    <main
      className={cn(
        "min-h-dvh w-full relative overflow-hidden",
        "bg-background text-foreground",
        "selection:bg-primary/20 selection:text-foreground",
      )}
    >
      {/* top-left theme toggle */}
      <div className="absolute left-4 top-4 z-[100]">
        <ThemeToggle />
      </div>

      {/* subtle horizon band to avoid 'empty' feel while staying minimalist */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background:
            resolvedTheme === "dark" ? "linear-gradient(#0000, #2e2e2e 60%)" : "linear-gradient(#0000, #a2d8a233 60%)",
        }}
      />

      {/* Windows */}
      {open.home && (
        <Window
          id="home"
          title="home"
          className="w-[min(94vw,860px)]"
          initialCenter
          style={{ zIndex: z(0) }}
          draggable={false}
        >
          <div className="p-6 md:p-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-[var(--font-heading)] text-balance">
              {"hi! i'm "}
              <span className="text-primary">Vatsal</span>
            </h1>
            <p className="mt-3 text-muted-foreground">full stack developer • web3 • mathematics enthusiast</p>

            <div className="mt-7 mx-auto max-w-xs md:max-w-sm grid grid-cols-3 gap-2 md:gap-3 justify-items-center">
              <NavIcon label="about" Icon={Info} onClick={() => setOpen((s) => ({ ...s, about: true }))} />
              <NavIcon label="projects" Icon={Folder} onClick={() => setOpen((s) => ({ ...s, projects: true }))} />
              <NavIcon label="contact" Icon={MessageCircle} onClick={() => setOpen((s) => ({ ...s, contact: true }))} />
            </div>
          </div>
        </Window>
      )}

      {open.about && (
        <Window
        id="about"
        title="about"
        className="w-[min(92vw,880px)]"
        initialCenter
        style={{ zIndex: z(1) }}
        onFocus={() => setOpen((s) => ({ ...s, about: true }))}
        onClose={() => setOpen((s) => ({ ...s, about: false }))}
      >
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-6">
            <img
              src="/vatsal.jpg"
              alt="Profile avatar"
              className="h-40 w-40 md:h-48 md:w-48 rounded-full border"
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-[var(--font-heading)]">
                Vatsal Agarwal
              </h2>
              <p className="text-muted-foreground">Full Stack Developer</p>
              <p className="text-muted-foreground">Undergraduate student at IIT Roorkee</p>
              <p className="text-muted-foreground">Developer at Tinkering Lab, IITR</p>
            </div>
          </div>

          <p className="mt-6 leading-relaxed">
            I build applications that combine intuitive UIs, scalable backends, 
            and on-chain logic. Recently, I’ve been exploring distributed systems 
            and agentic AI to push how apps can reason, coordinate, and act 
            autonomously.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "React", "Next.js", "TypeScript",
              "Node.js", "Express", "Postgres", "Redis",
              "Solidity", "Smart Contracts",
              "LangChain", "C++", "Python", "JavaScript"
            ].map((t) => (
              <span key={t} className="rounded-full border px-3 py-1 text-xs bg-card">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Window>
      )}

      {open.projects && (
        <Window
          id="projects"
          title="projects"
          className="w-[min(95vw,1300px)]"
          initialCenter
          style={{ zIndex: z(2) }}
          onFocus={() => setOpen((s) => ({ ...s, projects: true }))}
          onClose={() => setOpen((s) => ({ ...s, projects: false }))}
        >
          <div className="p-4 md:p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((p) => (
                <article key={p.title} className="rounded-lg border overflow-hidden bg-card flex flex-col">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={`${p.title} screenshot`}
                    className="aspect-video object-cover border-b"
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs rounded-full border px-2 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-sm bg-primary text-primary-foreground hover:opacity-90"
                      >
                        Demo
                      </a>
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-sm"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Window>
      )}

      {open.contact && (
        <Window
          id="contact"
          title="contact"
          className="w-[min(92vw,400px)]"
          initialCenter
          style={{ zIndex: z(3) }}
          onFocus={() => setOpen((s) => ({ ...s, contact: true }))}
          onClose={() => setOpen((s) => ({ ...s, contact: false }))}
        >
          <div className="p-6 md:p-8 text-center">
            <h3 className="text-2xl font-bold font-[var(--font-heading)]">📬 Let’s Connect!</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The best way to reach me is by email—quick, simple, and always open. Your message won’t get lost here!
            </p>
            <img src="/cute-character-holding-letter.png" alt="" className="mx-auto my-6 max-h-48" />
            <a
              href="mailto:vatsal31415@gmail.com"
              className="inline-flex items-center justify-center rounded-md border bg-primary text-primary-foreground px-4 py-2"
            >
              ✉️ Send me an email
            </a>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="https://github.com/vatsal-afk"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full border"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vatsal-agarwal-b67315280/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full border"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:vatsal31415@gmail.com" aria-label="Email" className="p-2 rounded-full border">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Window>
      )}

      {/* Bottom dock */}
      <footer className="absolute left-0 right-0 bottom-4 flex items-center justify-center gap-3">
        <a
          className="p-2 rounded-full border bg-card hover:scale-105 transition"
          href="https://github.com/vatsal-afk"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          className="p-2 rounded-full border bg-card hover:scale-105 transition"
          href="https://www.linkedin.com/in/vatsal-agarwal-b67315280/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          className="p-2 rounded-full border bg-card hover:scale-105 transition"
          href="mailto:vatsal31415@gmail.com"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </footer>
    </main>
  )
}

function NavIcon({
  label,
  Icon,
  onClick,
}: {
  label: string
  Icon: React.ComponentType<any>
  onClick: () => void
}) {
  return (
    <button onClick={onClick} className="group flex flex-col items-center gap-1.5 focus:outline-none">
      <span className="rounded-xl border bg-card p-3 md:p-3.5 group-hover:scale-105 transition">
        <Icon className="h-5 w-5 md:h-6 md:w-6" />
      </span>
      <span className="text-[11px] md:text-xs text-muted-foreground">{label}</span>
    </button>
  )
}
