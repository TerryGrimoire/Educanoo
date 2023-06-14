import livre from "../assets/livre.svg";
import reseau from "../assets/reseau.svg";
import ess from "../assets/ess.svg";
import mains from "../assets/mains.svg";

const interventionData = [
  {
    id: 0,
    src: livre,
    alt: "icone d'un livre",
    h4: "Éducation",
    p: "Un accompagnement éducatif quotidien des populations issues des quartiers prioritaires les plus en difficultés.",
    link: "/",
  },
  {
    id: 1,
    src: mains,
    alt: "icone de deux mains avec un coeur dans l'une d'entre elle",
    h4: "Social",
    p: "Des permanences sociales pour accompagner les usagers dans leurs démarches administratives tout en les informant sur leurs droits.",
    link: "/",
  },
  {
    id: 2,
    src: ess,
    alt: "icone de deux personnes qui se tiennent la main et se font face",
    h4: "ESS",
    p: "L’association propose, pour les personnes les plus éloignées de l’emploi, un accompagnement vers la formation et vers l’emploi.",
    link: "/",
  },
  {
    id: 3,
    src: reseau,
    alt: "icone d'un réseau interconnecté",
    h4: "Solidarité Océan Indien",
    p: "En plus de nos actions sur l’île, nous développons des liens entre La Réunion et les îles voisines dont Maurice, Madagascar et les Comores.",
    link: "/",
  },
];

export default interventionData;
