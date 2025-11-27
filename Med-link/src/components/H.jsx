import React from "react";
import { Stethoscope, Activity, MessageCircle } from "lucide-react";


const steps = [
  {
    icon: <Stethoscope size={30} strokeWidth={1.7} className="text-lime-600" />,
    title: "Find Specialists",
    desc: "Browse qualified doctors across different specialties, view their profiles and patient reviews.",
  },
  {
    icon: <Activity size={30} strokeWidth={1.7} className="text-lime-600" />,
    title: "Check Symptoms",
    desc: "Use our intelligent symptom checker to get personalized doctor recommendations.",
  },
  {
    icon: <MessageCircle size={30} strokeWidth={1.7} className="text-lime-600" />,
    title: "Chat & Book",
    desc: "Chat with our health assistant and book appointments directly with your preferred doctor.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-14">
        How It Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className="
              bg-white rounded-3xl shadow-sm border border-gray-200 
              p-10 text-center transition-all duration-300 
              hover:-translate-y-2 hover:shadow-xl hover:border-gray-300
            "
          >
            <div
              className="
                bg-lime-100 w-20 h-20 mx-auto rounded-2xl 
                flex items-center justify-center
              "
            >
              {step.icon}
            </div>

            <h3 className="text-xl font-semibold mt-6">{step.title}</h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
