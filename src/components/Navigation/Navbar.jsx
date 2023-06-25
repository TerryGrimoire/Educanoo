import React from "react";
import { Link, useLocation } from "react-router-dom";

import logoNormal from "../../assets/logo.png";
import logoWhite from "../../assets/logo_white.png";

function Navbar() {
  const location = useLocation();
  const loc = location.pathname;

  const logo = loc === "/" ? logoWhite : logoNormal;

  return (
    <nav className={loc === "/" ? "navbar nav_white desktop" : "navbar desktop"}>
      <Link to="/">
        <img src={logo} alt="Logo Educanoo" className="logo" />
      </Link>
      <div className="nav_middle">
        <Link to="/">Accueil</Link>
        <Link to="/Apropos">À propos</Link>
        <Link to="/SocioEducatif">Socio-éducatif</Link>
        <Link to="/ESS">ESS</Link>
        <Link to="/SolidariteOI">Solidarité Océan Indien</Link>
      </div>
      <Link to="/Contact">
        <button
          type="button"
          className={
            loc === "/" ? "button_style button_white_blue" : "button_style"
          }
        >
          Nous contacter
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
