"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const QuienesSomos = () => {
  return (
    <div className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center mt-10 md:mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <h1 className="text-2xl md:text-5xl font-bold">Who Are We?</h1>
          <p className="mt-5 md:text-lg">
            In{" "}
            <span className="text-sky-600 font-bold">
              Lobo&#39;s House Cleaning
            </span>
            , We are a company committed to offering professional cleaning
            services for homes, offices, and various residential and commercial
            environments. Our team is made up of trained personnel dedicated to
            providing efficient, reliable solutions tailored to each
            client&#39;s needs.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          <Image
            src="/images/img7.jpeg"
            width={500}
            height={500}
            alt="quienes-somos"
            className="rounded-xl h-auto w-auto transition-transform duration-300 hover:scale-105 shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default QuienesSomos;
