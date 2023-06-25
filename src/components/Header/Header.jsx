import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Navigation/Nav";
import Navbar from "../Navigation/Navbar";
import burger from "../../assets/menu2.png";

import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";
import couvert from "../../assets/couverts.svg";
import sac from "../../assets/sac.svg";
import logo from "../../assets/logo_white.png";

function Burger() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header className="header">
      <div className="header_top desktop">
        <div className="header_top_left">
          <p>Le reséau EDUCANOO :</p>
          <Link to="/LeMess">
            <img
              src={couvert}
              alt="fourchette et couteau pour représenter un restaurant"
            />
            <p>Restaurant Le Mess</p>
          </Link>
          <Link to="/Filanoo">
            <img src={sac} alt="petit sac représentant une boutique" />
            <p>Boutique Filanoo</p>
          </Link>
        </div>
        <div className="header_top_right">
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
      <Navbar />
      <div className="mobile header_mobile">
        <button type="button" onClick={() => setOpenBurger(!openBurger)}>
          <img src={burger} alt="trois traits pour cliquer sur le burger" />
        </button>
        <Link to="/">
          <img src={logo} alt="logo Educanoo" />
        </Link>
      </div>
      {openBurger && <Nav setOpenBurger={setOpenBurger} />}
    </header>
  );
}

export default Burger;
