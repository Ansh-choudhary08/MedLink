import { Link } from "react-router-dom"
import { Card } from "./common/Card"
import { Button } from "./common/Button"

export const DoctorCard = ({ doctor }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="flex flex-col h-full">
        <img
          src={doctor.image || "/placeholder.svg"}
          alt={doctor.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-bold text-gray-900 mb-1">{doctor.name}</h3>
        <p className="text-sm text-blue-600 font-medium mb-2">{doctor.specialty}</p>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow-500">★</span>
          <span className="font-semibold text-gray-900">{doctor.rating}</span>
          <span className="text-gray-500 text-sm">({doctor.experience}y exp)</span>
        </div>

        <p className="text-sm text-gray-600 mb-3">{doctor.location}</p>
        <p className="text-lg font-bold text-gray-900 mb-4">₹{doctor.fees}</p>

        <Link to={`/doctors/${doctor.id}`} className="mt-auto">
          <Button variant="primary" className="w-full">
            View Profile
          </Button>
        </Link>
      </div>
    </Card>
  )
}
