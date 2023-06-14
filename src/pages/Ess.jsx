import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Banniere from "../components/Banniere";
import Title from "../components/Title";
import ACI from "../components/ACI";
import Duo from "../components/Duo";
import Financer from "../components/Financer";

function Ess({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | ESS </title>
        <link rel="canonical" href={`${helmet.href}/Ess`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main>
        <Banniere id={2} />
        <Title id={2} />
        <section className="apropos_objectifs_article ess_duo">
          <ul>
            <li>
              • Proposer des débouchés professionnels aux personnes sans emploi
              rencontrant des difficultés sociales et professionnelles
              particulières, en particulier aux habitants des quartiers
              prioritaires de la Politique de la Ville, en accompagnant la
              montée en compétences et en créant des emplois locaux ;
            </li>
            <li>
              • Développer des offres de consommation responsable pour
              contribuer à la lutte contre la pollution environnementale ;{" "}
            </li>
            <li>
              • Permettre à la population de faire des économies avec des
              produits de qualité à des prix accessibles ;
            </li>
          </ul>
          <ul>
            <li>
              • Permettre une diminution des déchets en limitant le recours aux
              produits jetables ou non recyclables ;{" "}
            </li>
            <li>
              • Promouvoir une économie durable et responsable, avec des
              partenaires engagés pour le développement de l’économie locale, de
              proximité, en circuit court ;{" "}
            </li>
            <li>
              • Accompagner des salariés en insertion à travers les ACI
              (Ateliers Chantiers d’Insertion).
            </li>
          </ul>
        </section>
        <Title id={3} />
        <Duo id={3} />
        <Title id={4} />
        <ACI />
        <Title id={5} />
        <Duo id={4} />
        <Title id={6} />
        <Duo id={5} />
        <Financer />
      </main>
    </div>
  );
}

export default Ess;
