import React from "react";
import prefecture from "../assets/prefecture.png";
import region from "../assets/region.png";
import departement from "../assets/departement.png";
import leport from "../assets/leport.png";
import agence from "../assets/agence.png";
import prison from "../assets/prison.png";

function Financer() {
  return (
    <section className="financer">
      <h4>
        Atelier et Chantier d'insertion de production horticole financé par{" "}
      </h4>
      <div>
        <img src={prefecture} alt="logo Préfecture de la Réunion" />
        <img src={region} alt="logo Région Réunion" />
        <img src={departement} alt="logo Département de la Réunion" />
        <img src={leport} alt="logo de la ville de Le Port" />
        <img src={agence} alt="logo de Agence" />
        <img src={prison} alt="logo du Centre Pénitentier du Port" />
      </div>
    </section>
  );
}

export default Financer;
