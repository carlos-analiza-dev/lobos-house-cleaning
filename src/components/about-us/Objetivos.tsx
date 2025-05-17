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

const Objetivos = () => {
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
          <h1 className="text-2xl md:text-5xl font-bold">Our Objectives</h1>
          <div className="mt-5">
            <li className="md:text-lg">
              Guarantee total customer satisfaction with every service.
            </li>
            <li className="md:text-lg">
              Continuously train our staff to ensure impeccable results.
            </li>
            <li className="md:text-lg">
              Expand our service offering to new residential, commercial, and
              industrial areas.
            </li>
            <li className="md:text-lg">
              Implement sustainable and environmentally friendly practices in
              our cleaning processes.
            </li>
            <li className="md:text-lg">
              Build long-term relationships with our clients based on trust and
              quality.
            </li>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          <Image
            src="/images/img1.jpeg"
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

export default Objetivos;
