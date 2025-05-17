"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Elegirnos = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  const fadeInImage = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1 + 0.3, duration: 0.5 },
    }),
  };

  const beneficios = [
    "Highly trained staff",
    "Ecological and safe products",
    "State-of-the-art professional equipment",
    "Flexible scheduling",
    "Guaranteed results",
    "Competitive pricing",
  ];

  const imagenes = [
    "/images/img2.jpeg",
    "/images/img3.jpeg",
    "/images/img4.jpeg",
    "/images/img5.jpeg",
  ];

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        <motion.div
          className="flex flex-col justify-center h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            variants={fadeUp}
            custom={0}
          >
            Why choose us?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 mb-8"
            variants={fadeUp}
            custom={1}
          >
            We offer the best cleaning services with certified personnel and
            high-quality products that guarantee exceptional results.
          </motion.p>

          <motion.ul className="space-y-4 mb-8">
            {beneficios.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={fadeUp}
                custom={index + 2}
              >
                <svg
                  className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 self-start flex items-center cursor-pointer"
            variants={fadeUp}
            custom={beneficios.length + 3}
            onClick={openWhatsApp}
          >
            Contact now
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
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 h-[500px] md:h-auto">
          {imagenes.map((src, index) => (
            <motion.div
              key={index}
              className="relative h-full rounded-lg overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInImage}
              custom={index}
            >
              <Image
                src={src}
                alt={`Imagen de nuestros servicios ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Elegirnos;
