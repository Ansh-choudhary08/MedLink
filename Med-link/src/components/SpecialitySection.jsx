import { Heart, Bandage, Brain, Bone, Baby, Cloud } from "lucide-react";
import { useNavigate } from "react-router-dom";

const specialities = [
  { id: 1, name: "Cardiology", count: 45, icon: <Heart size={34} />, color: "text-red-500", bg: "bg-red-50" },
  { id: 2, name: "Dermatology", count: 38, icon: <Bandage size={34} />, color: "text-blue-500", bg: "bg-blue-50" },
  { id: 3, name: "Neurology", count: 32, icon: <Brain size={34} />, color: "text-pink-500", bg: "bg-pink-50" },
  { id: 4, name: "Orthopedics", count: 41, icon: <Bone size={34} />, color: "text-gray-600", bg: "bg-gray-100" },
  { id: 5, name: "Pediatrics", count: 29, icon: <Baby size={34} />, color: "text-yellow-500", bg: "bg-yellow-50" },
  { id: 6, name: "Psychiatry", count: 25, icon: <Cloud size={34} />, color: "text-purple-500", bg: "bg-purple-50" },
];

export default function SpecialitySection() {
  const navigate = useNavigate();

  const handleClick = (speciality) => {
    navigate(`/find-doctors?speciality=${speciality}`);
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Browse by Speciality
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">

          {specialities.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item.name)}
              className="
                group bg-white rounded-3xl p-6
                flex flex-col items-center justify-center text-center
                border border-gray-200
                shadow-sm hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-3 active:scale-95
                cursor-pointer
              "
            >
              {/* Icon */}
              <div
                className={`
                  mb-4 w-16 h-16 rounded-full flex items-center justify-center
                  ${item.bg} ${item.color}
                  group-hover:scale-110 transition-transform duration-300
                `}
              >
                {item.icon}
              </div>

              {/* Name */}
              <h3 className="font-semibold text-gray-800 text-base">
                {item.name}
              </h3>

              {/* Count */}
              <p className="text-sm text-gray-500 mt-1">
                {item.count} doctors
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
