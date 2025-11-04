"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { doctors } from "@/lib/mock-data"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"

interface Appointment {
  id: string
  doctorId: string
  date: string
  time: string
  notes: string
  status: "scheduled" | "completed" | "cancelled"
  createdAt: string
}

export function AppointmentsList() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem("appointments")
    if (stored) {
      try {
        setAppointments(JSON.parse(stored))
      } catch (error) {
        console.error("Failed to parse appointments:", error)
      }
    }
    setIsLoading(false)
  }, [])

  const getDoctorInfo = (doctorId: string) => {
    return doctors.find((d) => d.id === doctorId)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20"
      case "completed":
        return "bg-green-500/10 text-green-700 border-green-500/20"
      case "cancelled":
        return "bg-red-500/10 text-red-700 border-red-500/20"
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500/20"
    }
  }

  if (isLoading) {
    return <div className="text-center py-8 text-muted-foreground">Loading appointments...</div>
  }

  if (appointments.length === 0) {
    return (
      <Card className="p-8 text-center">
        <Calendar className="mx-auto mb-4 text-muted-foreground" size={32} />
        <h3 className="font-semibold mb-2">No Appointments Yet</h3>
        <p className="text-muted-foreground mb-4">You haven't booked any appointments yet.</p>
        <Button asChild>
          <Link href="/doctors">Find a Doctor</Link>
        </Button>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => {
        const doctor = getDoctorInfo(appointment.doctorId)
        if (!doctor) return null

        return (
          <Card key={appointment.id} className="p-4 hover:shadow-md transition">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <User size={18} className="text-primary" />
                  <h4 className="font-semibold">{doctor.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{doctor.specialty}</p>

                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-muted-foreground" />
                    <span>{new Date(appointment.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-muted-foreground" />
                    <span>{appointment.time}</span>
                  </div>
                </div>

                {appointment.notes && <p className="text-sm text-muted-foreground mt-2">Notes: {appointment.notes}</p>}
              </div>

              <div className="flex flex-col items-end gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(appointment.status)}`}
                >
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </span>
                {appointment.status === "scheduled" && (
                  <Button variant="outline" size="sm" asChild className="bg-transparent">
                    <Link href={`/doctor/${doctor.id}`}>Reschedule</Link>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
