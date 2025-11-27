import { useState } from "react";
import signinImg from "../assets/signin.svg";
import signupImg from "../assets/signup.svg";
import logo from "../assets/logo.svg";
import { UserCheck, UserPlus, Mail, Lock, User } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [view, setView] = useState("signin");
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // ✅ HANDLE LOGIN / SIGNUP
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (view === "signin") {
        const res = await login(form.email, form.password);

        if (res.success) {
          navigate("/dashboard");   // ✅ Redirect after login
        } else {
          alert(res.error || "Login failed");
        }
      } else {
        const res = await signup(
          form.email,
          form.password,
          form.fullName,
          "user"
        );

        if (res.success) {
          navigate("/dashboard");  // ✅ Redirect after signup
        } else {
          alert(res.error || "Signup failed");
        }
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="min-h-screen bg-linear-to-r from-[#e6fff2] to-green-300 flex items-center justify-center py-16"
    >
      <div className="max-w-[950px] w-full h-[520px] bg-white shadow-xl shadow-gray-300/30 flex rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.01]">

        {/* LEFT NAV */}
        <div className="relative flex flex-col justify-center items-center w-[150px] h-full border-r bg-gray-50/60 backdrop-blur-sm">

          <span
            className="absolute left-0 w-1.5 h-[33.33%] bg-primary rounded-r-full transition-all duration-500"
            style={{ top: view === "signin" ? "33.33%" : "66.66%" }}
          />

          <div className="flex justify-center items-center h-[33.33%]">
            <img src={logo} className="w-16 opacity-80" />
          </div>

          <button
            onClick={() => setView("signin")}
            className={`flex flex-col justify-center items-center h-[33.33%] w-full gap-1 transition-all ${
              view === "signin"
                ? "text-primary font-semibold scale-110"
                : "text-gray-500 hover:text-primary"
            }`}
          >
            <UserCheck size={22} />
            <span>Sign In</span>
          </button>

          <button
            onClick={() => setView("signup")}
            className={`flex flex-col justify-center items-center h-[33.33%] w-full gap-1 transition-all ${
              view === "signup"
                ? "text-primary font-semibold scale-110"
                : "text-gray-500 hover:text-primary"
            }`}
          >
            <UserPlus size={22} />
            <span>Sign Up</span>
          </button>
        </div>

        {/* MIDDLE HERO */}
        <div className="relative bg-primary w-[320px] h-full flex items-center justify-center p-6">
          <div className="text-white space-y-3 flex flex-col justify-center items-center text-center h-full">
            {view === "signin" ? (
              <>
                <h2 className="text-2xl font-semibold">Welcome Back.</h2>
                <p className="text-sm opacity-80">Please enter your credentials.</p>
                <img src={signinImg} className="drop-shadow-xl mt-4 max-h-[230px]" />
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold">Sign Up Now.</h2>
                <p className="text-sm opacity-80">Join the crowd and get started.</p>
                <img src={signupImg} className="drop-shadow-xl mt-4 max-h-[230px]" />
              </>
            )}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative w-[380px] overflow-hidden p-10 bg-white">

          <motion.form
            onSubmit={handleSubmit}     // ✅ SUBMIT FIX
            initial={{ opacity: 0, x: view === "signin" ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4"
          >

            {view === "signup" && (
              <>
                <label className="text-gray-600 text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="border h-11 rounded-xl px-4"
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                />
              </>
            )}

            <label className="text-gray-600 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="border h-11 rounded-xl px-4"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <label className="text-gray-600 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="•••••••••"
              className="border h-11 rounded-xl px-4"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <button
              type="submit"
              className="bg-primary text-white h-11 rounded-xl mt-2 tracking-wider shadow-lg hover:opacity-90 transition-all"
            >
              {view === "signin" ? "SIGN IN" : "SIGN UP"}
            </button>

          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}
