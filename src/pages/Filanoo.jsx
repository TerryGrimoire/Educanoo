import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Banniere from "../components/Banniere";

function Filanoo({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      </main>
    </div>
  );
}

export default Filanoo;
