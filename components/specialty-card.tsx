import Link from "next/link"
import { Card } from "@/components/ui/card"
import type { Specialty } from "@/lib/mock-data"

interface SpecialtyCardProps {
  specialty: Specialty
}

export function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  return (
    <Link href={`/doctors?specialty=${specialty.name}`}>
      <Card className="p-6 text-center hover-shadow hover-scale smooth-transition rounded-2xl h-full">
        <div className="text-5xl mb-4">{specialty.icon}</div>
        <h3 className="font-bold mb-2 text-foreground">{specialty.name}</h3>
        <p className="text-sm text-muted-foreground">{specialty.count} doctors</p>
      </Card>
    </Link>
  )
}
