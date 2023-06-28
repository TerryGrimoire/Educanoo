import React from "react";
import { Link } from "react-router-dom";
import croix from "../../assets/fermer.png";
import fourchette from "../../assets/fourche.png";
import sac from "../../assets/sac.png";

function Nav({ setOpenBurger }) {
  return (
    <nav className="openBurger">
      <button
        type="button"
        className="croix"
        onClick={() => setOpenBurger(false)}
      >
        <img src={croix} alt="croix" />
      </button>
      <Link to="/">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Accueil
        </button>
      </Link>
      <Link to="/Apropos">
        <button type="button" onClick={() => setOpenBurger(false)}>
          À propos
        </button>
      </Link>
      <Link to="/SocioEducatif">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Socio-éducatif
        </button>
      </Link>
      <Link to="/ESS">
        <button type="button" onClick={() => setOpenBurger(false)}>
          ESS
        </button>
      </Link>
      <Link to="/SolidariteOI">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Solidarité Océan Indien
        </button>
      </Link>
      <Link to="/Filanoo">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Filanoo{" "}
          <img
            src={sac}
            alt="icone d'un sac représentant une boutique en ligne"
            className="sac_nav"
          />
        </button>
      </Link>
      <Link to="/LeMess">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Le Mess{" "}
          <img
            src={fourchette}
            alt="icone d'une fourchette représentant un restaurant"
            className="fourche_nav"
          />
        </button>
      </Link>
      <Link to="/Contact">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Contact
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
