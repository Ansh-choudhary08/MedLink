"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProtectedRoute } from "@/components/protected-route"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { AppointmentsList } from "@/components/appointments-list"
import Link from "next/link"
import { Calendar, MessageSquare, Stethoscope, ArrowRight } from "lucide-react"

function DashboardContent() {
  const { user } = useAuth()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {/* Welcome Section */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">Welcome, {user?.name}!</h1>
            <p className="text-lg text-muted-foreground">
              {user?.role === "patient"
                ? "Manage your appointments and health records"
                : "Manage your availability and patient appointments"}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Upcoming Appointments", value: "0", icon: Calendar },
              { label: "Total Consultations", value: "0", icon: Stethoscope },
              { label: "Account Status", value: "Active", icon: MessageSquare },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <Card
                  key={idx}
                  className="p-8 rounded-2xl border-border hover-shadow smooth-transition animate-scale-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-muted-foreground mb-2">{stat.label}</h3>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <Icon size={40} className="text-accent/20 flex-shrink-0" />
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Appointments */}
              <Card className="p-8 rounded-2xl border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Your Appointments</h2>
                <AppointmentsList />
              </Card>

              {/* Quick Actions */}
              <Card className="p-8 rounded-2xl border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {user?.role === "patient" ? (
                    <>
                      <Button
                        asChild
                        className="bg-accent hover:bg-accent/90 rounded-xl py-6 justify-between smooth-transition"
                      >
                        <Link href="/doctors">
                          Book an Appointment
                          <ArrowRight size={20} />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-border hover:bg-muted rounded-xl py-6 justify-between smooth-transition bg-transparent"
                      >
                        <Link href="/symptoms">
                          Check Symptoms
                          <ArrowRight size={20} />
                        </Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        asChild
                        className="border-border hover:bg-muted rounded-xl py-6 smooth-transition bg-transparent"
                      >
                        <Link href="/dashboard/availability">Set Availability</Link>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="border-border hover:bg-muted rounded-xl py-6 smooth-transition bg-transparent"
                      >
                        <Link href="/dashboard/patients">View Patients</Link>
                      </Button>
                    </>
                  )}
                </div>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Profile Card */}
              <Card className="p-8 rounded-2xl border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Profile Information</h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-2 font-bold">Full Name</p>
                    <p className="font-medium text-foreground">{user?.name}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2 font-bold">Email</p>
                    <p className="font-medium text-foreground">{user?.email}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2 font-bold">Account Type</p>
                    <p className="font-medium text-foreground capitalize">{user?.role}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2 font-bold">Member Since</p>
                    <p className="font-medium text-foreground">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Chat Assistant Link */}
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent/90 rounded-xl py-6 justify-between smooth-transition"
              >
                <Link href="/chatbot">
                  Chat with Assistant
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}
