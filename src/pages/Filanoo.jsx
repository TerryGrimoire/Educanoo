import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";

import Banniere from "../components/Banniere";
import Duo from "../components/Duo";

function Filanoo({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [items, setItems] = useState([]);

  const prepareData = (data) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à
    let obj = {};
    const json = data.map((line, index) => {
      if (index > 0) {
        data[0].forEach((key, j) => {
          obj = { ...obj, [key]: line[j] };
        });
      }
      return obj;
    });

    json.shift();
    setItems([...new Set(json)]);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_FILANOO)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);

  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Filanoo </title>
        <link rel="canonical" href={`${helmet.href}/Filanoo`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main>
        <Banniere id={6} />
        {items.length > 0 ? (
          <section className="items_main_container">
            <h3>Un produit vous intéresse ?</h3>
            <p>
              Contactez-nous au <a href="telto:+262693556807">0693556807</a>{" "}
              pour résserver et recevoir les instructions pour le paiement et
              pour récupérer le produit.
            </p>
            <div className="items_container">
              {items &&
                items.map((el) => (
                  <div key={el.id} className="item">
                    <img src={el.image} alt={el.nom} />
                    <h4>{el.nom}</h4>
                    <p>{el.prix}</p>
                    <p className="stock">{el.stock}</p>
                  </div>
                ))}
            </div>
          </section>
        ) : (
          <p>chargement des produits</p>
        )}
        <section>
          <h2 className="h2">Qu'est-ce que Filanoo ?</h2>
          <Duo id={9} />
        </section>
      </main>
    </div>
  );
}

export default Filanoo;
