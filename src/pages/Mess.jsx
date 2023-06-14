import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Banniere from "../components/Banniere";

function Mess({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Le Mess </title>
        <link rel="canonical" href={`${helmet.href}/LeMess`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main>
        <Banniere id={5} />
      </main>
    </div>
  );
}

export default Mess;
