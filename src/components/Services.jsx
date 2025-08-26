import { motion } from "framer-motion";

const services = [
  {
    title: "Réalité Augmentée (AR)",
    description: "Nous créons des expériences immersives avec la réalité augmentée pour améliorer l'interaction des utilisateurs avec vos produits.",
    icon: "../assets/ar-svgrepo-com.svg", // Replace with an actual image or icon path
  },
  {
    title: "Réalité Virtuelle (VR)",
    description: "Offrez à vos clients une immersion totale avec nos solutions de réalité virtuelle adaptées à vos besoins.",
    icon: "../assets/vr-svgrepo-com.svg", // Replace with an actual image or icon path
  },
  {
    title: "Développement Mobile & Web",
    description: "Nous développons des applications mobiles et web performantes pour répondre aux besoins de votre entreprise.",
    icon: "../assets/code-tech-dev-svgrepo-com.svg", // Replace with an actual image or icon path
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-16 px-6 md:px-12 lg:px-24 text-white">
      <div  className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-primaryBlue font-[orbitron]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nos Services
        </motion.h2>
        <motion.p
          className="text-lg mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Instar propose des solutions innovantes pour améliorer l'expérience de vos utilisateurs et faire évoluer vos projets grâce aux technologies de pointe.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1F2937] p-8 rounded-2xl shadow-xl text-center transition-all duration-300 cursor-pointer"
          >
            <div className="text-6xl mb-6">
              <img src={service.icon} alt={service.title} className="w-20 h-20 mx-auto" /> {/* Icon or Image */}
            </div>
            <motion.h3
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
