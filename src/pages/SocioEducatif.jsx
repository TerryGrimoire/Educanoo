import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Banniere from "../components/Banniere";
import Title from "../components/Title";
import Duo from "../components/Duo";

function SocioEducatif({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Socio-éducatif </title>
        <link rel="canonical" href={`${helmet.href}/SocioEducatif`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main>
        <Banniere id={1} />
        <Title id={0} />
        <Duo id={1} />
        <Title id={1} />
        <Duo id={2} />
      </main>
    </div>
  );
}

export default SocioEducatif;
