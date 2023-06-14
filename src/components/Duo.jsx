import React from "react";
import duoData from "../data/duoData";

function Duo({ id }) {
  return (
    <section className="duo_container">
      {duoData[id].map((el) => (
        <div className="duo">
          <img src={el.src} alt={el.alt} className="duo_img" />
          <article className="duo_article">
            <h3>{el.title}</h3>
            {el.text.map((texte) => (
              <p>{texte}</p>
            ))}
          </article>
        </div>
      ))}
    </section>
  );
}

export default Duo;
