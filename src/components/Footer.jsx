import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { useRef } from "react";

// ✅ Import partner images
import LogoApii from "../assets/images/partners/logo-apii.jpg";
import Ticdce from "../assets/images/partners/ticdce.jpg";
import Aws from "../assets/images/partners/aws.png";

export default function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lt5ox7a",
        "template_35kg3an",
        form.current,
        "Xd_2Vs5wSJN2tH1R4"
      )
      .then(
        () => {
          alert("Message envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Erreur lors de l'envoi du message.");
        }
      );
  };

  return (
    <footer id="contact" className="bg-[#284F75] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Contactez-nous</h3>
            <p>Adresse: Pépinière d’entreprise de la manouba 2010, Tunisie</p>
            <p>Email: dhaouadinstar2024@gmail.com</p>
            <p>Téléphone: +216 56 273 801</p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-xl font-bold">Envoyez-nous un message</h3>
            <input
              type="text"
              name="name"
              placeholder="Votre Nom"
              className="p-2 rounded text-black"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Votre Email"
              className="p-2 rounded text-black"
              required
            />
            <textarea
              name="message"
              placeholder="Votre Message"
              className="p-2 rounded text-black"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-white text-[#284F75] py-2 px-4 rounded hover:bg-gray-200"
            >
              Envoyer
            </button>
          </motion.form>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 items-start">
          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center justify-start space-y-4 md:space-y-0 md:space-x-6"
          >
            <h3 className="text-xl font-bold">Suivez-nous</h3>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://www.facebook.com/profile.php?id=100094304917318"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/instartech/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/instar_technology/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start space-y-4 lg:px-4 mt-8 md:mt-0"
          >
            <h3 className="text-xl font-bold">Nos partenaires</h3>
            <div className="flex space-x-6">
              <img src={LogoApii} alt="APII Manouba" className="h-20" />
              <img src={Ticdce} alt="TICDCE" className="h-20" />
              <img src={Aws} alt="AWS" className="h-20" />
            </div>
          </motion.div>
        </div>

        {/* Privacy Policy Link */}
        <div className="mt-12 text-center">
          <Link
            to="/privacy-policy"
            className="text-white hover:underline font-semibold"
          >
            Politique de Confidentialité
          </Link>
        </div>
        {/* Copyright */}
        <div className="text-center text-sm text-gray-300 mt-6">
          &copy; {new Date().getFullYear()} Instar. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
