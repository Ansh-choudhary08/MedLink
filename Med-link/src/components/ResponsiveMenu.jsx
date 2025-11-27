import { motion, AnimatePresence } from 'framer-motion';

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20  "
        >
          {/* CLICKING OUTSIDE CLOSES MENU */}
          <div 
            className="absolute inset-0"
            tabIndex={-1}
            onClick={() => setOpen(false)}
          ></div>
          <div className="relative text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li onClick={() => setOpen(false)}>Home</li>
              <li onClick={() => setOpen(false)}>Dashboard</li>
              <li onClick={() => setOpen(false)}>Checkup</li>
              <li onClick={() => setOpen(false)}>Book Appointment</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
