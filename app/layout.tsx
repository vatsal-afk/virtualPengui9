import type React from "react"
import type { Metadata } from "next"
import { Inter, Quicksand } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "vatsal-afk",
  description: "",
  generator: "virtualPengui9",
}

// load fonts
const heading = Quicksand({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-heading",
})
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${heading.variable} ${body.variable} ${GeistMono.variable} antialiased`}
    >
      <body className="font-sans">
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
