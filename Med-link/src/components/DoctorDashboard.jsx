export default function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-green-100 p-8">

      <h1 className="text-2xl font-bold mb-6">
        Doctor Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-5 rounded shadow">
          <h2 className="font-semibold">Total Appointments</h2>
          <p className="text-2xl mt-2">24</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="font-semibold">Today’s Patients</h2>
          <p className="text-2xl mt-2">6</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="font-semibold">Earnings</h2>
          <p className="text-2xl mt-2">₹18,000</p>
        </div>

      </div>
    </div>
  );
}
