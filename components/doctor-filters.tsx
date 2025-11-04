"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { specialties } from "@/lib/mock-data"
import { Search, X } from "lucide-react"

interface DoctorFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedSpecialty: string
  onSpecialtyChange: (specialty: string) => void
  minRating: number
  onMinRatingChange: (rating: number) => void
  onReset: () => void
}

export function DoctorFilters({
  searchQuery,
  onSearchChange,
  selectedSpecialty,
  onSpecialtyChange,
  minRating,
  onMinRatingChange,
  onReset,
}: DoctorFiltersProps) {
  const hasActiveFilters = searchQuery || selectedSpecialty || minRating > 0

  return (
    <Card className="p-6 mb-6">
      <div className="space-y-6">
        {/* Search Bar */}
        <div>
          <label className="block text-sm font-medium mb-2">Search Doctors</label>
          <div className="relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Specialty Filter */}
        <div>
          <label className="block text-sm font-medium mb-3">Specialty</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <button
              onClick={() => onSpecialtyChange("")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                selectedSpecialty === "" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
              }`}
            >
              All
            </button>
            {specialties.map((specialty) => (
              <button
                key={specialty.id}
                onClick={() => onSpecialtyChange(specialty.name)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  selectedSpecialty === specialty.name
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {specialty.name}
              </button>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="block text-sm font-medium mb-3">Minimum Rating</label>
          <div className="flex gap-2">
            {[0, 4, 4.5, 4.8].map((rating) => (
              <button
                key={rating}
                onClick={() => onMinRatingChange(rating)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  minRating === rating ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                }`}
              >
                {rating === 0 ? "All" : `${rating}+`}
              </button>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        {hasActiveFilters && (
          <Button variant="outline" onClick={onReset} className="w-full gap-2 bg-transparent">
            <X size={18} />
            Clear Filters
          </Button>
        )}
      </div>
    </Card>
  )
}
