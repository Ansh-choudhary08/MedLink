export default function DoctorCard({ doctor, onBook }) {
  return (
    <div className="
      bg-white rounded-2xl overflow-hidden shadow-lg 
      hover:shadow-2xl hover:-translate-y-2 
      transition-all duration-300 cursor-pointer w-full
    ">
      
      {/* TOP IMAGE */}
      <div className="w-full h-52 overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* DETAILS */}
      <div className="p-5 space-y-2">

        {/* Name */}
        <h3 className="font-semibold text-xl text-gray-800">
          {doctor.name}
        </h3>

        {/* Specialization */}
        <p className="text-primary font-medium text-sm">
          {doctor.specialty}
        </p>

        {/* Experience */}
        <p className="text-gray-500 text-sm">{doctor.experience} years experience</p>

        {/* Hospital */}
        <p className="text-gray-500 text-sm">{doctor.hospital}</p>

        {/* Rating & Fees */}
        <div className="flex justify-between items-center text-sm mt-3">
          <span className="text-green-600 font-medium">
            ⭐ {doctor.rating}
          </span>
          <span className="font-semibold text-gray-700">
            ₹{doctor.fee}/consultation
          </span>
        </div>

        {/* Book Button */}
        <button
          onClick={() => onBook(doctor)}
          className="
            w-full bg-primary text-white py-2 mt-3 
            rounded-xl font-medium tracking-wide 
            hover:opacity-90 shadow-md
          "
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
