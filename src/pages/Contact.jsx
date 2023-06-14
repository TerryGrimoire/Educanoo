import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Banniere from "../components/Banniere";

function Contact({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <Helmet>
        <title> {helmet.title} | Contact </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main>
        <Banniere id={4} />
      </main>
    </div>
  );
}

export default Contact;
