import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Prefooter from "./components/Footer/Prefooter";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import SocioEducatif from "./pages/SocioEducatif";
import Mess from "./pages/Mess";
import Ess from "./pages/Ess";
import Filanoo from "./pages/Filanoo";
import SolidariteOI from "./pages/SolidariteOI";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import "./App.css";

function App() {
  const helmet = {
    title: "Educanoo",
    href: "https://educanoo.fr",
    description:
      "Educanoo est une association loi 1901 qui agit depuis 2010 dans le domaine du développement solidaire. L’association développe ses activités sur l’ensemble du territoire de la Réunion depuis 2019 au cœur des quartiers prioritaires.",
  };

  const [bandeau, setBandeau] = useState(true);

  return (
    <BrowserRouter>
      <HelmetProvider>
        <Header helmet={helmet} />
        <Routes>
          <Route path="/" element={<Home helmet={helmet} />} />
          <Route path="/Apropos" element={<Apropos helmet={helmet} />} />
          <Route
            path="/SocioEducatif"
            element={<SocioEducatif helmet={helmet} />}
          />
          <Route path="/ESS" element={<Ess helmet={helmet} />} />
          <Route
            path="/SolidariteOI"
            element={<SolidariteOI helmet={helmet} />}
          />
          <Route path="/LeMess" element={<Mess helmet={helmet} />} />
          <Route path="/Filanoo" element={<Filanoo helmet={helmet} />} />
          <Route path="/Contact" element={<Contact helmet={helmet} />} />
          <Route path="/Mentions" element={<Mentions />} />
        </Routes>
        {bandeau && (
          <div className="bandeau">
            <h2>Cookie</h2>
            <p>
              Ce site est à usage informatif et n'utilise donc pas de cookie.
              Nous ne collectons aucune donnée personnelle. Pour en savoir plus,
              consultez notre{" "}
              <a href="/mentions">politique de confidentialité</a>
            </p>

            <div>
              <button
                type="button"
                className="button_style button_white_blue shad"
                onClick={() => setBandeau(false)}
              >
                Tout accepter
              </button>
              <button
                type="button"
                className="button_style"
                onClick={() => setBandeau(false)}
              >
                Tout refuser
              </button>
            </div>
          </div>
        )}
        <Prefooter />
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
