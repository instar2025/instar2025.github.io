import { motion } from "framer-motion";
import MariemImg from "../assets/images/Mariem.jpg";
import AbdImg from "../assets/images/AbedRazek1.jpg";
import YassineImg from "../assets/images/Yassine1.jpg";


const cofounders = [
  {
    name: "Mariem DHAOUIADI",
    role: "CEO",
    image: MariemImg, // ✅ use imported variable
  },
  {
    name: "Abd El Razzak DHAOUIADI",
    role: "COO",
    image: AbdImg, // ✅ use imported variable
  },
  {
    name: "Yassine AJROUD",
    role: "CTO",
    image: YassineImg, // ✅ use imported variable
  },
];

export default function AboutUs() {
  return (
    <section id="à-propos-de-nous" className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title with Animation */}
        <motion.h2
          className="text-3xl font-bold text-[#284F75] mb-6 font-[orbitron]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          À propos de Inst ar
        </motion.h2>

        {/* Intro Paragraph with Animation */}
        <motion.p
          className="text-gray-700 text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Inst ar est une startup innovante spécialisée dans les solutions de Réalité Virtuelle (VR) 
          et Réalité Augmentée (AR), ainsi que le développement d’applications mobiles et web. 
          Nous aidons les entreprises à intégrer ces technologies pour offrir des expériences immersives et interactives.
        </motion.p>
      </div>

      {/* Cofounders Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {cofounders.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.3 }} // Delayed animation for each box
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-[#284F75]"
            />
            <h3 className="text-xl font-semibold text-[#284F75]">{person.name}</h3>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {person.role}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
