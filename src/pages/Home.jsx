import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import video from "../assets/video.mp4";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="flex-col">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <div className="video">
        <video autoPlay loop muted>
          <track kind="captions" />
          <source src={video} type="video/mp4" />
        </video>
        <h1 className="h1">Partenaire du développement solidaire à La Réunion</h1>
        <div className="veil" />
      </div>
      <section className="section2">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          aliquid vel blanditiis. Iste earum tempore, corrupti distinctio nam
          dignissimos incidunt eveniet in tempora libero! Possimus explicabo
          architecto aut dolorem blanditiis magni porro maiores dignissimos
          repellat rem voluptatum, magnam provident at illum atque fugit
          assumenda eaque minima iste. Quaerat odit suscipit possimus nostrum,
          libero odio est quo culpa tempore ex tenetur sed esse unde doloremque
          ea minus rerum laboriosam eveniet labore ipsam voluptate officiis
          fugiat. Natus minima voluptatem hic eum ad perferendis rerum animi,
          provident aliquid quisquam, mollitia eaque enim eligendi consequatur
          nihil eveniet ex corrupti delectus quidem consequuntur! Saepe
          repudiandae excepturi ut atque dolorum quisquam voluptas laudantium
          sapiente, obcaecati voluptatibus earum adipisci dolor maiores beatae
          delectus ab pariatur! Fuga voluptatibus soluta quidem alias suscipit
          animi, nisi dolorum adipisci veritatis veniam amet aut odio magni,
          nihil nobis fugit iste expedita ut nulla quas consequuntur debitis?
          Nihil ipsam dicta saepe temporibus molestiae!
        </p>
      </section>
    </main>
  );
}
