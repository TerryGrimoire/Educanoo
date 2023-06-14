import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import ACI from "../components/ACI";

import interventionData from "../data/interventionData";

import video from "../assets/video.mp4";
import mission from "../assets/mission.png";
import mainCoeur from "../assets/main_coeur.svg";
import logo from "../assets/logo.png";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="flex-col">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <div className="video">
        <video autoPlay loop muted>
          <track kind="captions" />
          <source src={video} type="video/mp4" />
        </video>
        <h1 className="h1">
          Partenaire du développement solidaire à La Réunion
        </h1>
        <div className="veil" />
      </div>
      <section className="mission">
        <div className="mission_bloc_left">
          <img
            src={mission}
            alt="Femme au milieu de la végétation"
            className="mission_main_img"
          />
          <div className="mission_main_text">
            <img src={logo} alt="Logo Educanoo" />
            <h3>Notre Mission</h3>
            <p>
              Educanoo développe des actions de proximité dans les quartiers, où
              elle accompagne le public à rompre avec l’isolement et à acquérir
              les moyens de son propre épanouissement.
            </p>
          </div>
        </div>
        <div className="mission_bloc_right">
          <img src={mainCoeur} alt="icone d'une main tenant un coeur" />
          <p>
            Nous faisons appel à la solidarité des Réunionnais pour soutenir les
            actions de l’association !
          </p>
          <a
            href="https://www.helloasso.com/associations/association-educanoo"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="button_style button_white_blue">
              Faire un don
            </button>
          </a>
          <a
            href="https://www.helloasso.com/associations/association-educanoo"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="button_style button_white_blue">
              Adhérer à l'association
            </button>
          </a>
        </div>
      </section>
      <section className="interventions">
        <h2>Nos champs d'intervention</h2>
        <div className="interventions_container">
          {interventionData.map((el) => (
            <div className="intervention">
              <img src={el.src} alt="" /> <h4>{el.h4}</h4> <p>{el.p}</p>{" "}
              <Link to={el.link}>
                <button type="button">Découvrir</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="chiffres">
        <h2>Quelques chiffres</h2>
        <div>
          <div>
            <h3>2010</h3> <p>L'année de création d'Educanoo</p>
          </div>
          <div>
            <h3>20000</h3> <p>Personnes accompagnées</p>
          </div>
          <div>
            <h3>120</h3> <p>Permanences par an</p>
          </div>
        </div>
        <Link to="/Apropos">
          <button type="button" className="button_style button_white_blue">
            En savoir plus
          </button>
        </Link>
      </section>
      <section className="ess">
        <h2>L'économie sociale et solidaire</h2>
        <Link to="/Ess">
          <button type="button" className="button_style">
            Voir toutes nos actions ESS
          </button>
        </Link>
        <ACI />
      </section>
      <section className="objectifs">
        <div className="objectifs_top" />
        <p className="objectifs_top_text">
          En 2022, Educanoo entame sa transition numérique avec un grand projet
          « d’Optimisation des parcours des bénéficiaires par le développement
          d’une plateforme numérique de gestion et de services »
        </p>

        <article>
          <p>La finalité est : </p>
          <ul>
            <li>
              • Améliorer le fonctionnement des actions de l’association ;
            </li>
            <li>
              • Améliorer les services rendus aux personnes en situation de
              précarité ;
            </li>
            <li>
              • Favoriser l’évaluation des besoins des familles en difficulté ;
            </li>
            <li> • Améliorer les outils fournis aux bénéficiaires.</li>
          </ul>
        </article>
        <div className="objectifs_bottom" />
      </section>
    </main>
  );
}
