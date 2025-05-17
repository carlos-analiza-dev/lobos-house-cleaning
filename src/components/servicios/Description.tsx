import { CheckCircle, Leaf, Shield, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Description = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-sky-600" />,
      text: "Flawless results guaranteed",
    },
    {
      icon: <Shield className="w-6 h-6 text-sky-600" />,
      text: "Verified and reliable staff",
    },
    {
      icon: <Users className="w-6 h-6 text-sky-600" />,
      text: "Equipo con varios años de experiencia",
    },
    {
      icon: <Leaf className="w-6 h-6 text-sky-600" />,
      text: "Ecological and safe products",
    },
  ];

  return (
    <div className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 bg-gray-50">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mt-10 md:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            More than cleaning,{" "}
            <span className="text-sky-600">we take care of your space</span>
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            In <strong>Lobo&#39;s House Cleaning</strong>, We have been
            transforming spaces since 2022 with a professional approach that
            combines <strong>certified techniques</strong>,
            <strong> ecological products</strong> y una{" "}
            <strong>personalized attention</strong>.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Our team of <strong>10+ specialists</strong> is trained to the
            highest standards of residential and commercial cleaning, adapting
            to the unique needs of each client in Chattanooga, Tennessee.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={staggerContainer}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                variants={fadeInUp}
              >
                {feature.icon}
                <span className="text-gray-800">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="relative rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/img9.jpeg"
            width={600}
            height={600}
            alt="Equipo profesional de Lobo's House Cleaning"
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent flex items-end p-6">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-800">
                <CheckCircle className="inline mr-2 text-green-600" />
                Certified equipment
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {[
          { number: "1K+", label: "Satisfied customers" },
          { number: "98%", label: "Retention rate" },
          { number: "24/7", label: "Availability" },
          { number: "10+", label: "Professionals" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100"
          >
            <p className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">
              {stat.number}
            </p>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Description;
