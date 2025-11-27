import { Search, Pill, Brain, Stethoscope } from "lucide-react";
import heroImage from "../assets/Hero-img.png";
import HowItWorks from "./H.jsx";
import HomeDoc from "./HomeDoc.jsx";
import SpecialitySection from "./SpecialitySection";

const Hero = () => {
  return (
    <section className="overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center min-h-[650px] relative">

        {/* Left Content */}
        <div className="flex flex-col justify-center py-14 px-10 md:py-0 animate-fade-slide">
          <div className="text-center md:text-left space-y-3">

            <h1 className="text-5xl lg:text-6xl p-0 font-bold leading-tight xl:leading-snug animate-fade-up delay-100">
              Healthcare at <br />
              Your <span className="text-primary">Fingertips</span>
            </h1>

            <p className="text-gray-600 xl:max-w-[500px] animate-fade-up delay-200">
              Check your symptoms, find doctors, book appointments, and access
              medical records all in one place with Med-link.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-8 md:justify-start mt-4 animate-fade-up delay-300">
              <button className="primary-btn flex items-center gap-2 hover:scale-[1.05] transition-all duration-300">
                Start symptoms Checker
              </button>

              <button className="flex justify-center items-center gap-2 hover:scale-[1.05] transition-all duration-300">
                <Search /> Find Doctors
              </button>
            </div>

            {/* Feature Icons */}
            <div className="flex py-4 gap-7 animate-fade-up delay-400">
              <span className="flex gap-2 items-center hover:translate-x-1 transition-all duration-300">
                <Stethoscope className="bg-green-100 h-8 w-8 rounded-2xl p-1" />
                Find Doctors
              </span>

              <span className="flex gap-2 items-center hover:translate-x-1 transition-all duration-300">
                <Brain className="bg-green-100 h-8 w-8 rounded-2xl p-1" />
                Symptoms Checker
              </span>

              <span className="flex gap-2 items-center hover:translate-x-1 transition-all duration-300">
                <Pill className="bg-green-100 h-8 w-8 rounded-2xl p-1" />
                Affordable Medicine
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center animate-fade-up delay-500">
          <div className="orbit-container">
            <img
              src={heroImage}
              alt="hero-img"
              className="orbit-img w-[350px] md:w-[550px] xl:w-[700px]"
            />
          </div>
        </div>

      </div>
      <HowItWorks />
      <SpecialitySection />
      <HomeDoc />
    </section>
    
  );
};

export default Hero;
