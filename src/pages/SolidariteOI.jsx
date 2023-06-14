import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Banniere from "../components/Banniere";

function SolidariteOI({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Solidarité OI </title>
        <link rel="canonical" href={`${helmet.href}/SolidariteOI`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main>
        <Banniere id={3} />
      </main>
    </div>
  );
}

export default SolidariteOI;
