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

const Valores = () => {
  return (
    <div className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 bg-gray-50">
      <div className=" mt-10 md:mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <h1 className="text-2xl md:text-5xl font-bold">Our Values</h1>
          <div className="mt-5">
            <li className=" md:text-xl mt-4">
              Guarantee total customer satisfaction with every service.
            </li>
            <li className=" md:text-xl mt-4">
              Continuously train our staff to ensure impeccable results.
            </li>
            <li className=" md:text-xl mt-4">
              Expand our service offering to new residential, commercial, and
              industrial areas.
            </li>
            <li className=" md:text-xl mt-4">
              Implement sustainable and environmentally friendly practices in
              our cleaning processes.
            </li>
            <li className=" md:text-xl mt-4">
              Build long-term relationships with our clients based on trust and
              quality.
            </li>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Valores;
