import { Link } from "react-router-dom";

export default function AppointmentSuccess() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">

      <h1 className="text-3xl font-bold text-green-700 mb-3">
        Appointment Confirmed ✅
      </h1>

      <p className="text-gray-600 mb-6">
        Your appointment has been successfully booked.
      </p>

      <Link
        to="/find-doctors"
        className="bg-primary text-white px-6 py-2 rounded-lg"
      >
        Book Another
      </Link>
    </div>
  );
}
