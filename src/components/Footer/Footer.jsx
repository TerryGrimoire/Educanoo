import React from "react";
import { Link } from "react-router-dom";

import partenairesData from "../../data/partenairesData";

import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";
import logo from "../../assets/logo.png";
import region from "../../assets/region.png";
import ue from "../../assets/ue.png";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer_top">
        <div className="footer_top_left">
          <img src={logo} alt="logo Educanoo" />
          <div className="reseaux_sociaux">
            <a
              href="https://www.facebook.com/educanoo.reunion"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="Logo Facebook" />
            </a>
            <a
              href="https://www.instagram.com/educanooreunion/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="Logo Instagram" />
            </a>
            <a
              href="https://www.youtube.com/@educanooreunion1510"
              target="_blank"
              rel="noreferrer"
            >
              <img src={youtube} alt="Logo Youtube" />
            </a>
          </div>
        </div>
        <div className="footer_top_right">
          <div>
            <Link to="/Mentions">Mentions Légales</Link>
            <Link to="/Mentions">Politiques de confidentialité</Link>
          </div>
          <div className="oblig">
            <p>
              Ce site a été financé à l’aide du FEDER (REACT-UE) dans le cadre
              de la réponse de l’Union Européenne à la pandémie COVID-19.
              L’Europe s’engage à La Réunion.
            </p>
            <div className="logo">
              <img src={region} alt="logo de la region Réunion" />
              <img src={ue} alt="logo de l'Union Européenne" />
            </div>
          </div>
        </div>
      </section>
      <section className="footer_bottom">
        <h3>Nos partenaires</h3>
        {partenairesData.map((el) => (
          <img src={el} alt="logo des partenaires" />
        ))}
      </section>
    </footer>
  );
}

export default Footer;
