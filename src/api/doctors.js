export const fetchDoctors = async () => {
  const res = await fetch("/data/doctors.json")
  if (!res.ok) throw new Error("Failed to load doctors")
  return res.json()
}

export const fetchDoctorById = async (id) => {
  const doctors = await fetchDoctors()
  return doctors.find((doc) => doc.id === id)
}

export const fetchSpecialties = async () => {
  const res = await fetch("/data/specialties.json")
  if (!res.ok) throw new Error("Failed to load specialties")
  return res.json()
}

export const fetchSymptoms = async () => {
  const res = await fetch("/data/symptoms.json")
  if (!res.ok) throw new Error("Failed to load symptoms")
  return res.json()
}
