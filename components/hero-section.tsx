"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Stethoscope, Zap, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-20 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing gradient blob */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-mindaro/15 to-transparent blur-3xl opacity-60 animate-pulse" />
        {/* Soft accent circle */}
        <div className="absolute bottom-32 left-10 w-64 h-64 rounded-full border border-mindaro/10 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single column layout - centered */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Top highlight badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mindaro/30 bg-mindaro/10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <CheckCircle size={18} className="text-accent" />
          </div>

          {/* Large premium heading */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Your Health is
              <span className="bg-gradient-to-r from-mindaro via-mindaro/80 to-mindaro/60 bg-clip-text">
                Our Priority
              </span>
            </h1>
          </div>

          {/* Professional subtext */}
          <p
            className={`text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Connect with trusted healthcare professionals. Book appointments, check symptoms, and manage your health—all
            in one place with our medical platform.
          </p>

          {/* Two modern buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="group bg-mindaro text-dark-slate-gray hover:bg-mindaro/90 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/doctors" className="flex items-center gap-2">
                <Stethoscope size={20} />
                Find a Doctor
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group rounded-2xl font-semibold border-2 border-dark-slate-gray text-dark-slate-gray hover:bg-dark-slate-gray/5 transition-all duration-300 bg-white"
            >
              <Link href="/symptoms" className="flex items-center gap-2">
                <Zap size={20} />
                Check Symptoms
              </Link>
            </Button>
          </div>

          {/* Mini stats section */}
          <div
            className={`grid grid-cols-3 gap-6 pt-8 border-t border-timberwolf transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="space-y-2">
              <p className="text-2xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Verified Doctors</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-foreground">24/7</p>
              <p className="text-sm text-muted-foreground">AI Symptom Checker</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground">Accurate Predictions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
