import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Duo from "../components/Duo";
import Banniere from "../components/Banniere";
import carte from "../assets/carte.png";

function Apropos({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | À propos </title>
        <link rel="canonical" href={`${helmet.href}/Apropos`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main className="apropos">
        <Banniere id={0} />
        <section className="apropos_intro">
          <p className="apropos_text">
            Educanoo est une association loi 1901 qui agit depuis 2010 dans le
            domaine du développement solidaire. L’association développe ses
            activités sur l’ensemble du territoire de la Réunion depuis 2019 au
            cœur des quartiers prioritaires de la politique de la ville :
          </p>
          <div className="apropos_intro_villes">
            <ul>
              <li>
                • <span>À Saint-Benoît</span> dans le quartier Fragrance
                (quartier prioritaire Rive Droite) Local SIDR 2 avenue François
                Mitterrand
              </li>
              <li>
                • <span>À Saint-Denis</span> dans le quartier Marcadet (quartier
                prioritaire le Bas Maréchal Leclerc) Local SHLMR 332 rue du
                Maréchal Leclerc
              </li>
              <li>
                • <span>Au Port</span> dans le quartier Rivière des galets
                (quartier prioritaire 4ème Couronne) Local Semader 2 ruelle Jean
                Giraudoux
              </li>
              <li>
                • <span>À Saint-Pierre</span> à l’école élémentaire Alfred
                Isautier – Chemin Paulo Tilmar – Basse Terre Joli Fond et à la
                Maison de quartier Joli Fond
              </li>
            </ul>
            <img src={carte} alt="carte de la Réunion colorée" />
          </div>
        </section>
        <Duo id={0} />
        <section className="apropos_objectifs">
          <h3>Les objectifs de l'association</h3>
          <article className="apropos_objectifs_article">
            <ul>
              <li>
                •{" "}
                <span>
                  Développer la cohésion, le lien social et un meilleur vivre
                  ensemble
                </span>{" "}
                entre les jeunes, leur famille, leur voisinage, leur quartier,
                leur ville, et leurs établissements scolaires.
              </li>
              <li>
                • <span>Lutter contre l’isolement des jeunes</span> en leur
                proposant des activités visant à les sortir de leur quotidien.
              </li>
              <li>
                • <span>Lutter contre l’échec et le décrochage scolaire</span>{" "}
                par des cours de soutien scolaire et des activités périscolaires
                ludiques, culturelles et sportives.
              </li>
              <li>
                • <span>Venir en aide aux personnes en difficulté isolées</span>{" "}
                (notamment les familles monoparentales, les personnes âgées et
                les personnes en situation de handicap) en leur proposant une
                aide alimentaire
              </li>
            </ul>
            <ul>
              <li>
                •
                <span>
                  {" "}
                  Aider les personnes en difficulté dans leur insertion sociale
                  et professionnelle
                </span>{" "}
                en les accompagnant dans leurs démarches administratives et de
                recherche d’emploi.
              </li>
              <li>
                •
                <span>
                  {" "}
                  Soutenir ou porter la création d’activités économiques qui
                  concilient utilité sociale et solidarités
                </span>{" "}
                pour créer des emplois.
              </li>
              <li>
                • Contribuer au bien-être des Réunionnais par la pratique d’une
                activité physique et une alimentation saine.
              </li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Apropos;
