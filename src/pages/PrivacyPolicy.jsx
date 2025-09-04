import React from "react";
import { Link } from "react-router-dom";

// ✅ Import logo image
import logoWhite from "../assets/images/logooooooblanc.png";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black z-50 p-6">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src={logoWhite} // ✅ use imported image
                className="w-32 md:w-40"
                alt="Logo Instar"
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 pt-[80px] pb-12">
        <h1 className="mt-6 text-3xl font-bold text-[#284F75] mb-2">
          Politique de Confidentialité
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Dernière mise à jour : 11 août 2025
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#284F75] mb-3">1. Introduction</h2>
          <p>
            Bienvenue chez Instar. Nous accordons une grande importance à votre vie privée et
            nous engageons à protéger vos informations personnelles. Cette politique explique
            comment nous collectons, utilisons, stockons et protégeons vos données lorsque
            vous utilisez notre site web ou notre application mobile. En continuant à utiliser
            nos services, vous acceptez cette politique.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#284F75] mb-3">2. Informations que nous collectons</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Détails de compte fournis (nom, email, mot de passe).</li>
            <li>Données d’utilisation telles que les pages visitées, le temps passé, et les informations sur l’appareil.</li>
            <li>Détails de commande et de paiement lors d’achats.</li>
            <li>Contenu soumis comme des commentaires ou images téléchargées.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#284F75] mb-3">3. Utilisation de vos informations</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Fournir et améliorer nos services.</li>
            <li>Traiter les commandes et paiements.</li>
            <li>Personnaliser votre expérience.</li>
            <li>Assurer la sécurité et prévenir les abus.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#284F75] mb-3">4. Stockage et sécurité des données</h2>
          <p>
            Nous stockons vos données sur des serveurs AWS sécurisés et prenons des mesures
            raisonnables pour les protéger contre tout accès non autorisé. Aucun système
            n’est totalement sécurisé, mais nous mettons tout en œuvre pour appliquer
            les meilleures pratiques de l’industrie.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#284F75] mb-3">5. Partage de vos informations</h2>
          <p>
            Nous ne vendons pas vos données personnelles. Elles peuvent être partagées avec
            des prestataires de services (ex. processeurs de paiement, hébergement) ou avec
            des autorités légales si la loi l’exige.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#284F75] mb-3">6. Cookies et suivi</h2>
          <p>
            Notre site peut utiliser des cookies ou technologies similaires pour améliorer
            l’expérience utilisateur et analyser les habitudes de navigation. Vous pouvez
            désactiver les cookies dans les paramètres de votre navigateur, mais certaines
            fonctionnalités pourraient ne pas fonctionner correctement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#284F75] mb-3">7. Réalité augmentée et contenu numérique</h2>
          <p>
            Les aperçus en Réalité Augmentée (RA) sont uniquement fournis à titre indicatif
            et peuvent ne pas correspondre exactement au produit physique.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#284F75] mb-3">8. Vos droits</h2>
          <p>
            Vous pouvez demander l’accès à vos données personnelles, la correction
            d’informations inexactes ou la suppression de votre compte et des données associées.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#284F75] mb-3">9. Modifications de cette politique</h2>
          <p>
            Nous pouvons mettre à jour cette politique de temps en temps. La date de mise à
            jour sera indiquée en haut de cette page. La poursuite de l’utilisation de nos
            services implique votre acceptation des changements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#284F75] mb-3">10. Contactez-nous</h2>
          <p>
            Pour toute question ou préoccupation concernant cette Politique de Confidentialité,
            veuillez nous contacter à :
          </p>
          <p className="mt-2 font-semibold">📧 dhaouadinstar2024@gmail.com</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Instar. Tous droits réservés.
      </footer>
    </div>
  );
}
