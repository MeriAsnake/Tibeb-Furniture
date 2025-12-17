import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Header } from "@/components/header"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tibeb Furniture | Timeless Elegance for Modern Living",
  description:
    "Discover handcrafted furniture that blends traditional craftsmanship with contemporary design. Transform your space with Tibeb Furniture.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${playfair.className} font-sans antialiased`}
      >
        {/* Header appears on ALL pages */}
        <Header />

        {/* Page content */}
        {children}

        <Analytics />
      </body>
    </html>
  )
}
