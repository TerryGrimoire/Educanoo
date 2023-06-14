import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Banniere from "../components/Banniere";
import Duo from "../components/Duo";
import Financer from "../components/Financer";

import horloge from "../assets/horloge.png";
import map from "../assets/map.png";
import tel from "../assets/tel.png";
import email from "../assets/email.png";
import resto from "../assets/resto.jpg";

function Mess({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
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
