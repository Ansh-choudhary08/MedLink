import { Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { AppointmentProvider } from "./contexts/AppointmentContext"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import Home from "./pages/Home"
import Doctors from "./pages/Doctors"
import DoctorDetails from "./pages/DoctorDetails"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import SymptomChecker from "./pages/SymptomChecker"
import "./styles/tailwind.css"

export default function App() {
  return (
    <AuthProvider>
      <AppointmentProvider>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/:id" element={<DoctorDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/symptom-checker" element={<SymptomChecker />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AppointmentProvider>
    </AuthProvider>
  )
}
