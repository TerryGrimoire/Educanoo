import beneficiaires from "../assets/beneficiaire.jpg";
import devoirs from "../assets/devoirs.jpg";
import sportives from "../assets/sportives.jpg";
import culturelle from "../assets/culturelles.jpg";
import sorties from "../assets/sorties.jpg";

const duoData = [
  [
    {
      id: 0,
      src: beneficiaires,
      alt: "Dame qui sert la main en souriant",
      title: "Les bénéficiaires",
      text: [
        "Le projet s’adresse à tous les Réunionnais, enfants, jeunes, adultes et personnes âgées et plus particulièrement aux personnes en difficulté, aux habitants des quartiers prioritaires de la politique de la ville et aux personnes résidant à proximité des locaux de l’association.",
      ],
    },
  ],
  [
    {
      id: 0,
      src: devoirs,
      alt: "Aide aux devoirs",
      title: "Aide aux devoirs",
      text: [
        "Des accompagnateurs périscolaires encadrent les jeunes dans la réalisation de leurs devoirs. Au-delà de l’aide aux devoirs, un travail de remise à niveau plus en profondeur est effectué via des rappels de cours qui ont eu pour but de permettre aux élèves les plus en difficultés de rattraper le retard accumulé et d’acquérir les bases nécessaires à la bonne poursuite de leur niveau d’étude.",
      ],
    },
    {
      id: 1,
      src: sportives,
      alt: "Activités sportives",
      title: "Activités sportives",
      text: [
        "La pratique d’une activité sportive régulière est proposée aux jeunes afin de les faire sortir de la sédentarité et de l’enfermement dans lequel ils vivent au travers des réseaux sociaux et des jeux vidéo, voire des drogues dans les pires des cas.",
      ],
    },
    {
      id: 2,
      src: culturelle,
      alt: "Activités culturelles",
      title: "Activités culturelles",
      text: [
        "Des ateliers culturels sont proposés aux enfants et aux jeunes afin de contribuer au développement de leurs compétences en termes de lecture et d’écriture, mais aussi d’expression orale, d’autonomie et de méthodologie.",
      ],
    },
    {
      id: 3,
      src: sorties,
      alt: "Sorties découvertes",
      title: "Sorties découvertes",
      text: [
        "Des sorties sportives pédagogiques sont organisées pour permettre aux jeunes de sortir de leur quartier et de découvrir toutes les richesses de leur île, tant sur le plan naturel que le plan humain.",
      ],
    },
  ],
];

export default duoData;
