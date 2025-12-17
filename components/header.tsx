"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Tibeb Logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Tibeb
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#shop" className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground">
              SHOP
            </Link>
            <Link href="/#explore" className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground">
              EXPLORE
            </Link>
            <Link href="/#about" className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground">
              ABOUT
            </Link>
            <Link href="/contact" className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground">
              CONTACT
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/#shop" className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground">
                SHOP
              </Link>
              <Link href="/#explore" className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground">
                EXPLORE
              </Link>
              <Link href="/#about" className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground">
                ABOUT
              </Link>
              <Link href="/contact" className="text-sm font-mono font-medium text-muted-foreground hover:text-foreground">
                CONTACT
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
