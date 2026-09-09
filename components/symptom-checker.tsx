"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { symptoms, doctors } from "@/lib/mock-data"
import { symptomToSpecialties, symptomSeverity, severityAdvice } from "@/lib/symptom-mapping"
import { X, AlertCircle, AlertTriangle, Info } from "lucide-react"

export function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) => (prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]))
  }

  const getRecommendedSpecialties = () => {
    const specialtyCount: Record<string, number> = {}

    selectedSymptoms.forEach((symptom) => {
      const specialties = symptomToSpecialties[symptom] || []
      specialties.forEach((specialty) => {
        specialtyCount[specialty] = (specialtyCount[specialty] || 0) + 1
      })
    })

    return Object.entries(specialtyCount)
      .sort(([, a], [, b]) => b - a)
      .map(([specialty]) => specialty)
  }

  const getMaxSeverity = () => {
    if (selectedSymptoms.length === 0) return "low"

    const severities = selectedSymptoms.map((s) => symptomSeverity[s] || "low")
    if (severities.includes("high")) return "high"
    if (severities.includes("medium")) return "medium"
    return "low"
  }

  const recommendedSpecialties = getRecommendedSpecialties()
  const maxSeverity = getMaxSeverity()

  const recommendedDoctors = doctors.filter((doctor) => recommendedSpecialties.includes(doctor.specialty))

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <AlertTriangle className="text-destructive" size={24} />
      case "medium":
        return <AlertCircle className="text-yellow-500" size={24} />
      default:
        return <Info className="text-blue-500" size={24} />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-destructive/10 border-destructive/20"
      case "medium":
        return "bg-yellow-500/10 border-yellow-500/20"
      default:
        return "bg-blue-500/10 border-blue-500/20"
    }
  }

  return (
    <div className="space-y-8">
      {/* Symptom Selection */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Select Your Symptoms</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
          {symptoms.map((symptom) => (
            <button
              key={symptom}
              onClick={() => toggleSymptom(symptom)}
              className={`px-4 py-3 rounded-lg font-medium transition ${
                selectedSymptoms.includes(symptom)
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 border border-input"
              }`}
            >
              {symptom}
            </button>
          ))}
        </div>

        {selectedSymptoms.length > 0 && (
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-3">Selected symptoms:</p>
            <div className="flex flex-wrap gap-2">
              {selectedSymptoms.map((symptom) => (
                <div key={symptom} className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">{symptom}</span>
                  <button onClick={() => toggleSymptom(symptom)} className="hover:text-destructive transition">
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <Button onClick={() => setShowResults(true)} disabled={selectedSymptoms.length === 0} className="w-full">
          Get Recommendations
        </Button>
      </Card>

      {/* Results */}
      {showResults && selectedSymptoms.length > 0 && (
        <>
          {/* Severity Assessment */}
          <Card className={`p-6 border-2 ${getSeverityColor(maxSeverity)}`}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">{getSeverityIcon(maxSeverity)}</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 capitalize">
                  {maxSeverity === "high" ? "Urgent" : maxSeverity === "medium" ? "Moderate" : "Mild"} Symptoms
                </h3>
                <p className="text-muted-foreground">{severityAdvice[maxSeverity]}</p>
              </div>
            </div>
          </Card>

          {/* Recommended Specialties */}
          {recommendedSpecialties.length > 0 && (
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Recommended Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {recommendedSpecialties.map((specialty) => (
                  <span key={specialty} className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                    {specialty}
                  </span>
                ))}
              </div>
            </Card>
          )}

          {/* Recommended Doctors */}
          {recommendedDoctors.length > 0 && (
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-6">Recommended Doctors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendedDoctors.map((doctor) => (
                  <div key={doctor.id} className="border border-border rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{doctor.name}</h4>
                        <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="font-semibold">{doctor.rating}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{doctor.location}</p>
                    <p className="text-sm font-semibold mb-4">${doctor.fee} per consultation</p>
                    <Button asChild className="w-full" size="sm">
                      <Link href={`/doctor/${doctor.id}`}>View Profile & Book</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Health Tips */}
          <Card className="p-6 bg-primary/5">
            <h3 className="text-lg font-bold mb-4">Health Tips</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Stay hydrated and get adequate rest</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Avoid self-medication without professional advice</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Monitor your symptoms and seek immediate help if they worsen</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Maintain good hygiene to prevent spreading infections</span>
              </li>
            </ul>
          </Card>
        </>
      )}
    </div>
  )
}
