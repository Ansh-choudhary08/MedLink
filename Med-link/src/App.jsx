import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/footer.jsx";
import { Routes, Route } from "react-router-dom";
import BookAppointment from "./components/BookAppointment.jsx";
import FindDoctors from "./components/FindDoctor.jsx";
import Login from "./components/login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import { Home } from "lucide-react";

const App = () => {
  return (
    <div className="overflow-x-hidden  bg-linear-to-r from-[#e6fff2] to-green-300">
      <div className="min-h-screen">
        <Nav />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="/" element={<Hero />} />
          <Route path="/find-Doctors" element={<FindDoctors />} />
          <Route path="/book-Appointment" element={<BookAppointment />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
