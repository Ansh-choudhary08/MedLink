export interface Doctor {
  id: string
  name: string
  specialty: string
  rating: number
  reviews: number
  image: string
  experience: number
  location: string
  fee: number
  availability: string[]
  bio: string
}

export interface Appointment {
  id: string
  doctorId: string
  userId: string
  date: string
  time: string
  status: "scheduled" | "completed" | "cancelled"
  notes: string
}

export interface Specialty {
  id: string
  name: string
  icon: string
  count: number
}

export const specialties: Specialty[] = [
  { id: "1", name: "Cardiology", icon: "❤️", count: 45 },
  { id: "2", name: "Dermatology", icon: "🩹", count: 38 },
  { id: "3", name: "Neurology", icon: "🧠", count: 32 },
  { id: "4", name: "Orthopedics", icon: "🦴", count: 41 },
  { id: "5", name: "Pediatrics", icon: "👶", count: 29 },
  { id: "6", name: "Psychiatry", icon: "💭", count: 25 },
]

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.8,
    reviews: 156,
    image: "/female-doctor-cardiology.jpg",
    experience: 12,
    location: "New York, NY",
    fee: 150,
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    bio: "Specialized in heart disease prevention and treatment with 12 years of experience.",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Dermatology",
    rating: 4.7,
    reviews: 128,
    image: "/male-doctor-dermatology.jpg",
    experience: 10,
    location: "Los Angeles, CA",
    fee: 120,
    availability: ["Monday", "Wednesday", "Friday", "Saturday"],
    bio: "Expert in skin conditions and cosmetic dermatology.",
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Neurology",
    rating: 4.9,
    reviews: 189,
    image: "/female-doctor-neurology.jpg",
    experience: 15,
    location: "Chicago, IL",
    fee: 180,
    availability: ["Tuesday", "Thursday", "Friday", "Saturday"],
    bio: "Leading neurologist specializing in migraine and neurological disorders.",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    rating: 4.6,
    reviews: 142,
    image: "/male-doctor-orthopedics.jpg",
    experience: 14,
    location: "Houston, TX",
    fee: 160,
    availability: ["Monday", "Tuesday", "Thursday", "Friday"],
    bio: "Specialist in joint replacement and sports medicine.",
  },
  {
    id: "5",
    name: "Dr. Lisa Anderson",
    specialty: "Pediatrics",
    rating: 4.8,
    reviews: 167,
    image: "/female-doctor-pediatrics.jpg",
    experience: 11,
    location: "Phoenix, AZ",
    fee: 100,
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    bio: "Compassionate pediatrician dedicated to child health and wellness.",
  },
  {
    id: "6",
    name: "Dr. Robert Martinez",
    specialty: "Psychiatry",
    rating: 4.7,
    reviews: 134,
    image: "/male-doctor-psychiatry.jpg",
    experience: 13,
    location: "Miami, FL",
    fee: 140,
    availability: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    bio: "Experienced psychiatrist providing mental health support and therapy.",
  },
]

export const symptoms = [
  "Headache",
  "Fever",
  "Cough",
  "Sore Throat",
  "Fatigue",
  "Nausea",
  "Dizziness",
  "Chest Pain",
  "Shortness of Breath",
  "Skin Rash",
  "Joint Pain",
  "Insomnia",
]
