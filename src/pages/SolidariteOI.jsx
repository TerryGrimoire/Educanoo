import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Banniere from "../components/Banniere";
import Title from "../components/Title";
import Duo from "../components/Duo";

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
        <Title id={7} />
        <Duo id={6} />
        <Title id={8} />
        <Duo id={7} />
      </main>
    </div>
  );
}

export default SolidariteOI;
