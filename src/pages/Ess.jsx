import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Banniere from "../components/Banniere";

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
      </main>
    </div>
  );
}

export default Ess;
