import React from "react";
import titleData from "../data/titleData";

function Title({ id }) {
  return (
    <section className="title" id={titleData[id].anchor}>
      <h2>{titleData[id].title}</h2>
      <div>
        {titleData[id].hashtag &&
          titleData[id].hashtag.map((el) => <p>{el}</p>)}
      </div>
      <p>{titleData[id].text}</p>
    </section>
  );
}

export default Title;
