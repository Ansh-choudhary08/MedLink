import doctors from "../mockData/Doctors";
import DoctorCard from "../components/DoctorCard";
import { Link } from "react-router-dom";

export default function HomeDoc() {
  const featuredDoctors = doctors.slice(0, 4); // Show only 4

  return (
    <div className="py-16 px-6 bg-gradient-to-r from-[#e6fff2] to-green-300">

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Doctors
          </h2>

          <Link
            to="/find-doctors"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
          >
            Show All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

      </div>
    </div>
  );
}
