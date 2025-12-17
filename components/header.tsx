"use client"

import { useState } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Tibeb</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#shop"
              className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              SHOP
            </a>
            <a
              href="#explore"
              className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              EXPLORE
            </a>
            <a
              href="#about"
              className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              CONTACT
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#shop"
                className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                SHOP
              </a>
              <a
                href="#explore"
                className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                EXPLORE
              </a>
              <a
                href="#about"
                className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                ABOUT
              </a>
              <a
                href="#contact"
                className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                CONTACT
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
