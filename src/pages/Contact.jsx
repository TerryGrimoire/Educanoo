import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Banniere from "../components/Banniere";
import horloge from "../assets/horloge.png";
import map from "../assets/map.png";
import tel from "../assets/tel.png";
import email from "../assets/email.png";

function Contact({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <Helmet>
        <title> {helmet.title} | Contact </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main>
        <Banniere id={4} />
        <section className="contact_duo">
          <div className="contact_duo_text">
            <h2>Infos Pratiques</h2>
            <div>
              <img src={horloge} alt="icone horloge" />
              <div>
                <h3>Horaires</h3>
                <p>du lundi au vendredi</p>
                <p>9h00 - 18h00</p>
              </div>
            </div>
            <div>
              <img src={map} alt="icone carte" />
              <div>
                <h3>Siège social</h3>
                <p>18 rue Tessan</p>
                <p>97400 Saint-Denis</p>
              </div>
            </div>
            <div>
              <img src={tel} alt="icone téléphone" />
              <div>
                <h3>Téléphone</h3>
                <p>0693 49 75 04</p>
              </div>
            </div>
            <div>
              <img src={email} alt="icone e-mail" />
              <div>
                <h3>E-mail</h3>
                <p>accueil.educanoo974@gmail.com</p>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14910.84407290306!2d55.4641773!3d-20.883695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21827fba54b211b7%3A0x23450290e10ed715!2sAssociation%20Educanoo%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1686775046350!5m2!1sfr!2sfr"
            title="carte"
          />
        </section>
      </main>
    </div>
  );
}

export default Contact;
