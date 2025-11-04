"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, LogOut } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
    setIsOpen(false)
  }

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50 soft-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 smooth-transition">
            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center soft-shadow">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline text-foreground">MedLink</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-accent smooth-transition font-medium">
              Home
            </Link>
            <Link href="/doctors" className="text-foreground hover:text-accent smooth-transition font-medium">
              Find Doctors
            </Link>
            <Link href="/symptoms" className="text-foreground hover:text-accent smooth-transition font-medium">
              Symptoms
            </Link>
            <Link href="/chatbot" className="text-foreground hover:text-accent smooth-transition font-medium">
              Chat
            </Link>
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Button
                  variant="outline"
                  asChild
                  className="border-border hover:bg-muted smooth-transition bg-transparent"
                >
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button onClick={handleLogout} className="gap-2 bg-accent hover:bg-accent/90 smooth-transition">
                  <LogOut size={18} />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  asChild
                  className="border-border hover:bg-muted smooth-transition bg-transparent"
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="bg-accent hover:bg-accent/90 smooth-transition">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-xl smooth-transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-fade-in">
            <Link
              href="/"
              className="block px-4 py-3 text-foreground hover:bg-muted rounded-xl smooth-transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/doctors"
              className="block px-4 py-3 text-foreground hover:bg-muted rounded-xl smooth-transition"
              onClick={() => setIsOpen(false)}
            >
              Find Doctors
            </Link>
            <Link
              href="/symptoms"
              className="block px-4 py-3 text-foreground hover:bg-muted rounded-xl smooth-transition"
              onClick={() => setIsOpen(false)}
            >
              Symptoms
            </Link>
            <Link
              href="/chatbot"
              className="block px-4 py-3 text-foreground hover:bg-muted rounded-xl smooth-transition"
              onClick={() => setIsOpen(false)}
            >
              Chat
            </Link>
            <div className="flex gap-2 pt-4 flex-col">
              {user ? (
                <>
                  <Button variant="outline" asChild className="w-full border-border bg-transparent">
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                  <Button onClick={handleLogout} className="w-full justify-start gap-2 bg-accent hover:bg-accent/90">
                    <LogOut size={18} />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" asChild className="w-full border-border bg-transparent">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
