import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";

import Banniere from "../components/Banniere";
import Duo from "../components/Duo";
import Financer from "../components/Financer";

import horloge from "../assets/horloge.png";
import map from "../assets/map.png";
import tel from "../assets/tel.png";
import email from "../assets/email.png";
import resto from "../assets/resto.jpg";
import separateur from "../assets/separateur.svg";

function Mess({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [menu, setMenu] = useState([]);

  const prepareData = (data) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    const jour = [];
    let date = "";

    const json = data.map((line, index) => {
      if (index > 0) {
        data[0].forEach((key, j) => {
          if (key.includes("di")) {
            jour.push({ day: key, menu: line[j] });
          } else {
            date = line[j];
          }
        });
      }
      return { date, jour };
    });

    json.shift();
    sessionStorage.setItem("actu", JSON.stringify([...new Set(json)]));
    setMenu([...new Set(json)]);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_MESS)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);

  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Le Mess </title>
        <link rel="canonical" href={`${helmet.href}/LeMess`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main className="restoMess">
        <Banniere id={5} />
        <section className="contact_duo">
          <img
            src={resto}
            alt="plat servi dans une assiette par un chef"
            className="restoImg"
          />
          <div className="contact_duo_text">
            <h2>Infos Pratiques</h2>
            <div>
              <img src={horloge} alt="icone horloge" />
              <div>
                <h3>Horaires</h3>
                <p>du mardi au vendredi</p>
                <p>11h00 - 14h00</p>
              </div>
            </div>
            <div>
              <img src={map} alt="icone carte" />
              <div>
                <h3>Siège social</h3>
                <p>Centre de détention du Port - 11, rue Faraday</p>
                <p>97420 Le Port</p>
              </div>
            </div>
            <div>
              <img src={tel} alt="icone téléphone" />
              <div>
                <h3>Téléphone</h3>
                <p>0693 86 27 20</p>
              </div>
            </div>
            <div>
              <img src={email} alt="icone e-mail" />
              <div>
                <h3>E-mail</h3>
                <p>mess.educanoo@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
        {menu &&
          menu.length > 0 &&
          menu.map((el) => (
            <section className="menuDuJour" id="menu">
              <h3>{el.date}</h3>
              <p className="bold">
                {el.date && "Réservation à effectuer la veille par téléphone"}
              </p>
              <div className="menu_container">
                {el.jour.map((day) => (
                  <div className="menu">
                    <h4>{day.day}</h4>
                    <ol>
                      {day.menu.split(";").map((plat, index) => (
                        <li>
                          {plat}{" "}
                          {index < day.menu.split(";").length - 1 && (
                            <img
                              src={separateur}
                              alt="petite décoration pour séparer le menu"
                              className="separateur"
                            />
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </section>
          ))}
        <section>
          <h2 className="h2">Les objectifs du Mess</h2>
          <Duo id={8} />
        </section>
        <Financer />
      </main>
    </div>
  );
}

export default Mess;
