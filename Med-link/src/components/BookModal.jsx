import { motion } from "framer-motion";

export default function BookModal({ doctor, onClose, onConfirm }) {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-6 rounded-xl w-[350px]"
      >
        <h2 className="text-lg font-semibold mb-2">
          Book Appointment
        </h2>

        <p className="text-sm">{doctor.name}</p>
        <p className="text-xs text-gray-500 mb-4">
          {doctor.specialization}
        </p>

        <input type="date" className="border w-full p-2 rounded mb-3" />
        <input type="time" className="border w-full p-2 rounded mb-4" />

        <div className="flex gap-3">
          <button
            onClick={onConfirm}
            className="bg-primary text-white w-full py-2 rounded"
          >
            Confirm
          </button>

          <button
            onClick={onClose}
            className="border w-full py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
}
