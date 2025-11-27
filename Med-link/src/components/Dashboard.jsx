import { Calendar, User, ArrowRight, MessageCircle } from "lucide-react";
import { useAuth } from "../context/Auth.jsx";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5fff9] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-8">

          {/* APPOINTMENTS CARD */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-xl font-semibold mb-6">Your Appointments</h2>

            <div className="border rounded-2xl p-10 flex flex-col items-center text-center space-y-4">
              <Calendar size={32} className="text-gray-400" />
              <h3 className="font-semibold text-gray-800">
                No Appointments Yet
              </h3>
              <p className="text-sm text-gray-500">
                You haven't booked any appointments yet.
              </p>

              <button
                onClick={() => navigate("/find-doctors")}
                className="mt-4 bg-gray-900 text-white px-10 py-3 rounded-full hover:opacity-90 transition"
              >
                Find a Doctor
              </button>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>

            <div className="flex flex-col md:flex-row gap-6">
              <button
                onClick={() => navigate("/book-appointment")}
                className="flex items-center justify-between w-full bg-primary text-gray-900 px-6 py-4 rounded-full font-medium hover:scale-[1.02] transition"
              >
                Book an Appointment
                <ArrowRight />
              </button>

              <button
                onClick={() => navigate("/check-symptoms")}
                className="flex items-center justify-between w-full border px-6 py-4 rounded-full font-medium hover:bg-gray-50 transition"
              >
                Check Symptoms
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* PROFILE INFO */}
          <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
            <h2 className="text-xl font-semibold mb-4">
              Profile Information
            </h2>

            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{user?.fullName || "User"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{user?.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Account Type</p>
              <p className="font-medium">Patient</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="font-medium">
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* CHAT WITH ASSISTANT */}
          <button
            onClick={() => navigate("/assistant")}
            className="w-full flex items-center justify-between bg-primary px-6 py-4 rounded-full font-medium hover:scale-[1.02] transition"
          >
            Chat with Assistant
            <MessageCircle />
          </button>

        </div>
      </div>
    </div>
  );
}
