"use client"

import { createContext, useState, useContext } from "react"

const AppointmentContext = createContext()

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem("medlink_appointments")) || [])

  const bookAppointment = (appointment) => {
    const newAppointment = {
      id: Date.now().toString(),
      ...appointment,
      bookedAt: new Date().toISOString(),
    }
    const updated = [...appointments, newAppointment]
    setAppointments(updated)
    localStorage.setItem("medlink_appointments", JSON.stringify(updated))
    return newAppointment
  }

  const cancelAppointment = (appointmentId) => {
    const updated = appointments.filter((apt) => apt.id !== appointmentId)
    setAppointments(updated)
    localStorage.setItem("medlink_appointments", JSON.stringify(updated))
  }

  return (
    <AppointmentContext.Provider value={{ appointments, bookAppointment, cancelAppointment }}>
      {children}
    </AppointmentContext.Provider>
  )
}

export const useAppointments = () => useContext(AppointmentContext)
