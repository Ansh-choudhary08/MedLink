"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { Card } from "@/components/ui/card"
import { doctors } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import { MapPin, Clock, Award, Users } from "lucide-react"

interface DoctorPageProps {
  params: Promise<{ id: string }>
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { id } = await params
  const doctor = doctors.find((d) => d.id === id)

  if (!doctor) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Doctor Info */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden mb-6">
                <div className="flex flex-col md:flex-row gap-6 p-6">
                  <div className="flex-shrink-0">
                    <img
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      className="w-48 h-48 rounded-lg object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
                    <p className="text-lg text-primary font-semibold mb-4">{doctor.specialty}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500 text-xl">★</span>
                        <span className="text-2xl font-bold">{doctor.rating}</span>
                        <span className="text-muted-foreground">({doctor.reviews} reviews)</span>
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Award className="text-primary mt-1" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Experience</p>
                          <p className="font-semibold">{doctor.experience} years</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="text-primary mt-1" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="font-semibold">{doctor.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="text-primary mt-1" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Availability</p>
                          <p className="font-semibold">{doctor.availability.length} days/week</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="text-primary mt-1" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Consultation Fee</p>
                          <p className="font-semibold">${doctor.fee}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Bio */}
              <Card className="p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">About</h2>
                <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
              </Card>

              {/* Availability */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Availability</h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.availability.map((day) => (
                    <span key={day} className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                      {day}
                    </span>
                  ))}
                </div>
              </Card>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <BookingForm doctor={doctor} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
