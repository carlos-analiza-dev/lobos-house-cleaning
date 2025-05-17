"use client";
import { motion } from "framer-motion";
import ButtonContactar from "./ButtonContactar";

const Estimados = () => {
  const openWhatsApp = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE;

    const message =
      "Hello, I'm interested in your cleaning services. Could you provide me with more information?";

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
          Our estimates are completely free.
        </h1>
      </motion.div>

      <motion.div
        className="flex justify-center mt-4 md:mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ButtonContactar openWhatsApp={openWhatsApp} />
      </motion.div>
    </div>
  );
};

export default Estimados;
