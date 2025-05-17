"use client";
import { motion } from "framer-motion";
import { BrushCleaning, Phone, Smile, User } from "lucide-react";
import FuncionamientoServices from "../FuncionamientoServices";

const Funcionamiento = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
  };

  return (
    <motion.div
      className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      <motion.div className="mt-5 flex justify-center" variants={titleVariants}>
        <h1 className="text-xl md:text-5xl font-bold">
          How does our cleaning service work?
        </h1>
      </motion.div>

      <motion.div
        className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
      >
        <motion.div variants={item}>
          <FuncionamientoServices
            titulo="Book via WhatsApp"
            numero={1}
            icono={<Phone className="hidden sm:block" size={20} />}
            subtitulo="Easily contact us via WhatsApp to schedule a cleaning service for your home, office, garage, etc. Just send us a message with your preferred date and time—no calls, no hassle."
          />
        </motion.div>

        <motion.div variants={item}>
          <FuncionamientoServices
            titulo="Administrator query"
            numero={2}
            icono={<User className="hidden sm:block" size={20} />}
            subtitulo="You&#39;ll be able to communicate with the administrator and answer any questions you may have about the service you wish to contract."
          />
        </motion.div>

        <motion.div variants={item}>
          <FuncionamientoServices
            titulo="Ready for cleaning"
            numero={3}
            icono={<BrushCleaning className="hidden sm:block" size={20} />}
            subtitulo="Our team will arrive ready to leave every corner of your home, office, garage, etc. spotless. From dusting to scrubbing, we follow a detailed checklist."
          />
        </motion.div>

        <motion.div variants={item}>
          <FuncionamientoServices
            titulo="Clean Spaces"
            numero={4}
            icono={<Smile className="hidden sm:block" size={20} />}
            subtitulo="Relax while we leave your space spotless. Want to keep it that way? Schedule regular cleanings every week, every two weeks, or whenever it suits you best."
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Funcionamiento;
