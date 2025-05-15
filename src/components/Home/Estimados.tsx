"use client";
import { motion } from "framer-motion";

const Estimados = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+50487709116";

    const message =
      "Hola, estoy interesado en sus servicios de limpieza. ¿Podrían proporcionarme más información?";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 bg-gray-50">
      <motion.div
        className="mt-5 md:mt-10 flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">
          Nuestros estimados son totalmente gratis
        </h1>
      </motion.div>

      <motion.div
        className="flex justify-center mt-4 md:mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 self-start flex items-center cursor-pointer"
          onClick={openWhatsApp}
        >
          Contactar ahora
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default Estimados;
