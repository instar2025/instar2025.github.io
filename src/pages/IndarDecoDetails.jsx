import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaGooglePlay } from "react-icons/fa";

// ✅ Import images
import logoWhite from "../assets/images/logooooooblanc.png";
import mobileImg from "../assets/images/1726764094685-portrait.png";
import dashboardImg from "../assets/images/dashboard.png";

function IndarDecoDetails() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <nav className="w-full bg-black backdrop-blur-md shadow-md z-50 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <a href="/">
              <img
                src={logoWhite}
                className="w-32 md:w-40"
                alt="Instar Logo"
              />
            </a>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="max-w-full sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto text-center mt-8 px-4">
        <motion.h1
          className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-primaryBlue"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center',
            animation: 'gradientTextAnimation 3s ease infinite',
          }}
        >
          Indar Deco
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Indar Deco est une plateforme de e-commerce spécialisée dans les meubles,
          intégrant la Réalité Augmentée (AR) et la Réalité Virtuelle (VR) pour une expérience immersive.
        </motion.p>
      </div>

      {/* Google Play Download Button */}
      <div className="flex justify-center mt-8">
        <motion.a
          href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-5 py-3 px-5 text-white bg-[#284F75] rounded-lg hover:bg-[#1f3f5c] flex items-center justify-center gap-2 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <FaGooglePlay className="text-xl" />
          <span className="font-semibold">Télécharger sur Play Store</span>
        </motion.a>
      </div>

      {/* Images Section */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        <motion.img
          src={mobileImg}
          alt="Indar Deco mobile"
          className="rounded-lg shadow-md w-full h-auto object-cover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        />
        <motion.img
          src={dashboardImg}
          alt="Indar Deco web"
          className="rounded-lg shadow-md w-full h-auto object-cover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </div>

      {/* Features Section */}
      <motion.div 
        className="max-w-6xl mx-auto mt-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { staggerChildren: 0.2, }
          }
        }}
      >
        <motion.h2 
          className="text-2xl font-semibold mb-4"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Pourquoi Indar Deco ?
        </motion.h2>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {[
            "Achetez des meubles directement via l'application mobile.",
            "Visualisez les meubles en AR avant de les acheter.",
            "Interface simple et intuitive pour une navigation fluide.",
            "Expérience VR en showroom pour découvrir les produits en 3D."
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Fonctionnalités & Utilisateurs Section */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-start">
          Fonctionnalités & Utilisateurs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Application Mobile",
              color: "text-green-400",
              features: [
                "Visualisation des produits en Réalité Augmentée (AR).",
                "Achat direct via l'application.",
                "Gestion du panier et des commandes.",
                "Ajout de commentaires et photos sur les produits.",
                "Compte utilisateur pour suivre les commandes.",
              ],
            },
            {
              title: "Dashboard Fournisseurs",
              color: "text-blue-400",
              features: [
                "Gestion des produits.",
                "Suivi des commandes reçues.",
                "Analyse des ventes et statistiques.",
                "Gestion du stock en temps réel.",
                "Showroom virtuel en VR pour présenter les produits.",
              ],
            },
          ].map((col, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.3 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className={`text-xl font-bold mb-4 ${col.color}`}>{col.title}</h3>
              
              {/* Features */}
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {col.features.map((feat, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.3 + i * 0.05 }}
                  >
                    {feat}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Users Explanation Paragraph */}
        <motion.div
          className="max-w-6xl mx-auto mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-300 text-justify mb-2">
            L'application mobile d'Indar Deco est entièrement gratuite et conçue pour les clients finaux. Les utilisateurs peuvent explorer le catalogue de meubles, visualiser les produits en 
            <span className="text-green-400 font-semibold"> Réalité Augmentée (AR)</span>, passer commande et suivre l'évolution de leurs achats en toute simplicité.
          </p>
          <p className="text-gray-300 text-justify mb-2">
            Les fournisseurs et propriétaires de showroom disposent d'un dashboard puissant pour gérer leurs produits, suivre les commandes reçues, analyser les ventes et présenter leurs meubles dans un showroom virtuel en 
            <span className="text-blue-400 font-semibold"> Réalité Virtuelle (VR)</span>, offrant ainsi une expérience immersive aux clients.
          </p>
          <p className="text-gray-300 text-justify">
            Chaque utilisateur bénéficie d'outils et de fonctionnalités adaptés à son rôle, garantissant une interaction fluide et une expérience enrichissante sur l'ensemble de la plateforme.
          </p>
        </motion.div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-6 pb-8">
        <motion.button
          onClick={() => navigate(-1)}
          className="bg-gray-700 text-white px-6 py-2 rounded-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, backgroundColor: "#4B5563" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          Retour
        </motion.button>
      </div>
    </div>
  );
}

export default IndarDecoDetails;
