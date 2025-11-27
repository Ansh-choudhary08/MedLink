import { useState } from "react";
import doctorsData from "../mockData/Doctors";
import DoctorCard from "../components/DoctorCard";
import { useNavigate } from "react-router-dom";

export default function FindDoctors() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("");
  const navigate = useNavigate();

  const filteredDoctors = doctorsData.filter((doc) => {
    const matchName = doc.name.toLowerCase().includes(search.toLowerCase());
    const matchSpecialty = specialty
      ? doc.specialty === specialty
      : true;
    return matchName && matchSpecialty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e6fff2] to-green-300 p-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Find Doctors
      </h1>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
        <input
          type="text"
          placeholder="Search doctor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg shadow w-full md:w-64"
        />

        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="px-4 py-2 rounded-lg shadow w-full md:w-64"
        >
          <option value="">All Specialties</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Radiologist">Radiologist</option>
          <option value="Orthopedic">Orthopedic</option>
        </select>
      </div>

      {/* DOCTOR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onBook={() =>
              navigate("/book-appointment", { state: doctor })
            }
          />
        ))}
      </div>
    </div>
  );
}
