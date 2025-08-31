import React from "react";
import { useNavigate } from "react-router-dom";

function IndarDecoDetails() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white">
      {/* Non-floating Navbar */}
      <nav className="w-full bg-black backdrop-blur-md shadow-md z-50 p-6">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div>
            <a href="/">
              <img
                src="/images/logooooooblanc.png" // ✅ now from public/
                className="w-32 md:w-40"
                alt="Instar Logo"
              />
            </a>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mt-8">
        <h1 className="text-4xl font-bold mb-4">Indar Deco</h1>
        <p className="text-gray-300 text-lg">
          Indar Deco est une plateforme de e-commerce spécialisée dans les meubles,
          intégrant la Réalité Augmentée (AR) et la Réalité Virtuelle (VR) pour une
          expérience immersive.
        </p>
      </div>

      {/* Images Section */}
      <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="/images/1726764094685-portrait.png"
          alt="Indar Deco Preview 1"
          className="rounded-lg shadow-md"
        />
        <img
          src="/images/dashboard.png"
          alt="Indar Deco Preview 2"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Features Section */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">Pourquoi Indar Deco ?</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>📱 Achetez des meubles directement via l'application mobile.</li>
          <li>🛋️ Visualisez les meubles en AR avant de les acheter.</li>
          <li>🖥️ Interface simple et intuitive pour une navigation fluide.</li>
          <li>🏬 Expérience VR en showroom pour découvrir les produits en 3D.</li>
        </ul>
      </div>

      {/* Google Play Download Button */}
      <div className="flex justify-center mt-8">
        <a
          href="https://play.google.com/store/apps/details?id=com.indar.deco"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300 text-lg"
        >
          📥 Télécharger sur Google Play
        </a>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          ⬅ Retour
        </button>
      </div>
    </div>
  );
}

export default IndarDecoDetails;
