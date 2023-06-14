import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import banniereData from "../data/banniereData";
import couvert from "../assets/couverts.png";

function Banniere({ id }) {
  return (
    <>
      <section className={banniereData[id].src}>
        <h1>{banniereData[id].title}</h1> <div className="veil" />
        {banniereData[id].subtitle && <h2>{banniereData[id].subtitle}</h2>}
        {banniereData[id].button && (
          <Link to={banniereData[id].buttonLink}>
            <button type="button" className="button_style button_white_blue">
              <img
                src={couvert}
                alt="fourchette et couteaux pour representer le restaurant"
              />
              {banniereData[id].button}
            </button>
          </Link>
        )}
      </section>
      <div className="barreNav">
        <Link to="/">Accueil</Link>
        <p>{`>`}</p>
        <p>{banniereData[id].title}</p>
      </div>
      {banniereData[id].sommaire && (
        <nav className="sommaire">
          <div className="sommaire_left">
            <img
              src={banniereData[id].sommaire.src}
              alt={banniereData[id].sommaire.alt}
            />
            <p>Sommaire</p>
          </div>
          <div className="sommaire_right">
            {banniereData[id].sommaire.anchor.map((el) => (
              <HashLink smooth to={el.hash}>
                <button
                  type="button"
                  className="button_style button_white_blue"
                >
                  {el.name}
                </button>
              </HashLink>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}

export default Banniere;
