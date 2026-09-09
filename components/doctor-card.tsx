import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import type { Doctor } from "@/lib/mock-data"

interface DoctorCardProps {
  doctor: Doctor
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden hover-shadow hover-scale smooth-transition rounded-2xl h-full flex flex-col">
      <div className="aspect-square overflow-hidden bg-muted">
        <img src={doctor.image || "/placeholder.svg"} alt={doctor.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-1 text-foreground">{doctor.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{doctor.specialty}</p>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-accent text-accent" />
            <span className="font-bold text-foreground">{doctor.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({doctor.reviews})</span>
        </div>

        <div className="space-y-2 mb-6 text-sm text-muted-foreground flex-1">
          <p>{doctor.experience} years experience</p>
          <p>{doctor.location}</p>
          <p className="font-bold text-foreground">${doctor.fee}/consultation</p>
        </div>

        <Button asChild className="w-full bg-accent hover:bg-accent/90 smooth-transition rounded-xl">
          <Link href={`/doctor/${doctor.id}`}>View Profile</Link>
        </Button>
      </div>
    </Card>
  )
}
