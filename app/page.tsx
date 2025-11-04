import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SpecialtyCard } from "@/components/specialty-card"
import { DoctorCard } from "@/components/doctor-card"
import { specialties, doctors } from "@/lib/mock-data"
import { Stethoscope, MessageCircle, Activity } from "lucide-react"

export default function Home() {
  const featuredDoctors = doctors.slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-timberwolf/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Stethoscope,
                  title: "Find Specialists",
                  description:
                    "Browse qualified doctors across different specialties, view their profiles and patient reviews.",
                },
                {
                  icon: Activity,
                  title: "Check Symptoms",
                  description: "Use our intelligent symptom checker to get personalized doctor recommendations.",
                },
                {
                  icon: MessageCircle,
                  title: "Chat & Book",
                  description:
                    "Chat with our health assistant and book appointments directly with your preferred doctor.",
                },
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-border hover-shadow hover-scale animate-scale-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                      <Icon size={28} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-foreground">Browse by Specialty</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {specialties.map((specialty, idx) => (
                <div key={specialty.id} className="animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                  <SpecialtyCard specialty={specialty} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Doctors */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-timberwolf/10">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl font-bold text-foreground">Featured Doctors</h2>
              <Button variant="outline" asChild className="border-border hidden md:flex hover-shadow bg-transparent">
                <Link href="/doctors">View All</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDoctors.map((doctor, idx) => (
                <div key={doctor.id} className="animate-slide-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <DoctorCard doctor={doctor} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
