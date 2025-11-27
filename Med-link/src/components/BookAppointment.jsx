import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BookAppointment() {
  const { state: doctor } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
  });

  if (!doctor) {
    return (
      <div className="text-center mt-20 text-xl">
        No Doctor Selected
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Appointment Booked Successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e6fff2] to-green-300 flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[360px]">

        {/* Doctor Info */}
        <div className="text-center mb-4">
          <img
            src={doctor.image}
            className="w-24 h-24 mx-auto rounded-full"
            alt={doctor.name}
          />
          <h2 className="text-lg font-semibold mt-2">{doctor.name}</h2>
          <p className="text-primary text-sm">{doctor.specialty}</p>
          <p className="text-sm text-gray-500">{doctor.hospital}</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Patient Name"
            required
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="border px-3 py-2 rounded"
          />

          <input
            type="date"
            required
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
            className="border px-3 py-2 rounded"
          />

          <input
            type="time"
            required
            onChange={(e) =>
              setForm({ ...form, time: e.target.value })
            }
            className="border px-3 py-2 rounded"
          />

          <button
            type="submit"
            className="bg-primary text-white py-2 rounded-lg mt-2 hover:opacity-90"
          >
            Confirm Appointment (₹{doctor.fees})
          </button>
        </form>
      </div>
    </div>
  );
}
