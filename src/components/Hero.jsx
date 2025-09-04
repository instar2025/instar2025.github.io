import { motion } from 'framer-motion';
import heroImage from "../assets/images/hero_image.png";
function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projets');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section id="accueil"  className="bg-black py-5 mb-4 lg:py-20 w-full">
      <div  className="my-6 max-w-full mx-auto px-8 p-6 lg:px-28 flex flex-col lg:flex-row items-center ">
        {/* Left Section: Text */}
        <div className="text-left lg:w-1/2">
        <motion.h1
            className="font-medium  font-[orbitron] text-2xl sm:text-3xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-primaryBlue"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundSize: '200% 200%',
              backgroundPosition: 'right center',
              animation: 'gradientTextAnimation 3s ease infinite', // Gradient animation
            }}
          >
            Bienvenue chez Inst AR
          </motion.h1>

          <motion.p
            className="my-4  font-[orbitron] text-2xl font-extrabold text-white sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Façonner les réalités, Créer des merveilles
          </motion.p>

          <motion.p
            className="my-4 text-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
              Découvrez l’avenir avec Inst ar, où l’innovation et la créativité fusionnent harmonieusement. Nous sommes votre passerelle vers le monde captivant des solutions de réalité virtuelle (VR) et de réalité augmentée (AR). Notre passion est de redéfinir les possibilités et d'élever votre réalité.
          </motion.p>

          <motion.div
            className="flex mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.a
              href="#projets"
              onClick={(e) => { e.preventDefault(); scrollToProjects(); }}
              className="bg-gradient-to-r from-blue-500 to-primaryBlue py-5 px-3 text-white rounded-md baseline hover:to-hoverPrimaryBlue hover:from-secondaryBlue text-center transition-all duration-200 ease-in-out transform hover:scale-105"
              style={{
                backgroundSize: '200% 200%',
                backgroundPosition: 'right center',
                animation: 'gradientAnimation 3s ease infinite', // Gradient animation
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              Nos produits
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToContact(); }}
              className="mx-5 py-5 px-3 text-white baseline hover:text-grey text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              Contactez-nous
            </motion.a>
          </motion.div>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <motion.img
            src={heroImage}  // Replace with your image path
            alt="Hero Image"
            className="w-full h-auto object-cover rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
