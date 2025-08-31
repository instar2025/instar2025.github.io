import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import IndarDecoDetails from "./pages/IndarDecoDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function AppContent() {
  const location = useLocation(); // ✅ inside Router now
  const hash = location.hash; // HashRouter uses the hash

  return (
    <div className="bg-black">
      {/* Show NavBar only on home page */}
      {!hash.includes("#/indar-deco-details") && !hash.includes("#/privacy-policy") && <NavBar />}

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Projects />
              <Footer />
            </>
          }
        />

        {/* Indar Deco Details Page */}
        <Route path="/indar-deco-details" element={<IndarDecoDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
