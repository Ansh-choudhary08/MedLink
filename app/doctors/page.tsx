"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DoctorFilters } from "@/components/doctor-filters"
import { DoctorCard } from "@/components/doctor-card"
import { doctors } from "@/lib/mock-data"

export default function DoctorsPage() {
  const searchParams = useSearchParams()
  const initialSpecialty = searchParams.get("specialty") || ""

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialty)
  const [minRating, setMinRating] = useState(0)

  // Filter and search doctors
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.location.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty

      const matchesRating = doctor.rating >= minRating

      return matchesSearch && matchesSpecialty && matchesRating
    })
  }, [searchQuery, selectedSpecialty, minRating])

  const handleReset = () => {
    setSearchQuery("")
    setSelectedSpecialty("")
    setMinRating(0)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Find a Doctor</h1>
            <p className="text-muted-foreground">Browse our network of qualified healthcare professionals</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <DoctorFilters
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  selectedSpecialty={selectedSpecialty}
                  onSpecialtyChange={setSelectedSpecialty}
                  minRating={minRating}
                  onMinRatingChange={setMinRating}
                  onReset={handleReset}
                />
              </div>
            </div>

            {/* Doctors Grid */}
            <div className="lg:col-span-3">
              {filteredDoctors.length > 0 ? (
                <>
                  <div className="mb-6">
                    <p className="text-muted-foreground">
                      Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredDoctors.map((doctor) => (
                      <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">No doctors found matching your criteria</p>
                  <button onClick={handleReset} className="text-primary hover:underline font-semibold">
                    Clear filters and try again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
