"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Doctor } from "@/lib/mock-data"

interface BookingFormProps {
  doctor: Doctor
  onSuccess?: () => void
}

export function BookingForm({ doctor, onSuccess }: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [notes, setNotes] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // Generate available dates (next 30 days)
  const availableDates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i + 1)
    return date
  }).filter((date) => {
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" })
    return doctor.availability.includes(dayName)
  })

  // Generate time slots
  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Store appointment in localStorage
      const appointments = JSON.parse(localStorage.getItem("appointments") || "[]")
      appointments.push({
        id: "apt-" + Date.now(),
        doctorId: doctor.id,
        date: selectedDate,
        time: selectedTime,
        notes,
        status: "scheduled",
        createdAt: new Date().toISOString(),
      })
      localStorage.setItem("appointments", JSON.stringify(appointments))

      setSuccess(true)
      onSuccess?.()

      // Reset form
      setTimeout(() => {
        setSelectedDate("")
        setSelectedTime("")
        setNotes("")
        setSuccess(false)
      }, 2000)
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <Card className="p-6 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold mb-2">Appointment Booked!</h3>
        <p className="text-muted-foreground">
          Your appointment with {doctor.name} has been confirmed. Check your dashboard for details.
        </p>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-6">Book an Appointment</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium mb-3">Select Date</label>
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
            className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Choose a date...</option>
            {availableDates.map((date) => (
              <option key={date.toISOString()} value={date.toISOString().split("T")[0]}>
                {date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
              </option>
            ))}
          </select>
        </div>

        {/* Time Selection */}
        <div>
          <label className="block text-sm font-medium mb-3">Select Time</label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setSelectedTime(time)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  selectedTime === time
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 border border-input"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium mb-2">Additional Notes (Optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Describe your symptoms or reason for visit..."
            className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            rows={4}
          />
        </div>

        {/* Price Info */}
        <div className="bg-muted p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium">Consultation Fee</span>
            <span className="text-lg font-bold text-primary">${doctor.fee}</span>
          </div>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full" disabled={isLoading || !selectedDate || !selectedTime}>
          {isLoading ? "Booking..." : "Confirm Booking"}
        </Button>
      </form>
    </Card>
  )
}
