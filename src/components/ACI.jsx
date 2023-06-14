import React from "react";
import { Link } from "react-router-dom";

import repas from "../assets/repas.jpg";
import filanoo from "../assets/filanoo.jpg";

function ACI() {
  return (
    <section className="aci">
      <div className="aci_div green">
        <img src={repas} alt="plusieurs repas disposés dans des bols" />
        <article>
          <h3>L'ACI le Mess</h3>
          <p>
            L’ ACI le Mess a été lancé en juillet 2022, afin de valoriser les
            métiers autour de la restauration en ayant comme support l’ancien
            Mess du centre de détention du Port.
          </p>
          <Link to="/">
            <button type="button" className="button_style button_white_blue">
              En savoir plus
            </button>
          </Link>
        </article>
      </div>
      <div className="aci_div blue">
        <article>
          <h3>L'ACI Filanoo</h3>
          <p>
            Educanoo porte depuis septembre 2020 l’Atelier Chantier d’Insertion
            Filanoo, conventionné par le CDIAE, qui permet l’accompagnement de
            10 salariés en insertion et le développement d’une offre textile
            durable et responsable.
          </p>
          <Link to="/">
            <button type="button" className="button_style button_white_blue">
              En savoir plus
            </button>
          </Link>
        </article>
        <img src={filanoo} alt="plusieurs créations faits maisons" />
      </div>
    </section>
  );
}

export default ACI;
