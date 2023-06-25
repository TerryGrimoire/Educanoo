import reseau from "../assets/connected.svg";
import livre from "../assets/socio.svg";
import ess from "../assets/essWhite.svg";
import logoMess from "../assets/logoMess.png";
import logoFilanoo from "../assets/logoFilanoo.png";

const banniereData = [
  {
    id: 0,
    title: "À propos",
    src: "banniere kafrine",
  },
  {
    id: 1,
    title: "Socio-éducatif",
    src: "banniere peintres",
    sommaire: {
      src: livre,
      alt: "icone d'un livre",
      anchor: [
        {
          hash: "/SocioEducatif#Education",
          name: "Éducation",
        },
        {
          hash: "/SocioEducatif#Social",
          name: "Social",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Économie Sociale et Solidaire",
    src: "banniere sourires",
    sommaire: {
      src: ess,
      alt: "icone de deux personnes qui se tiennent la main et collaborent",
      anchor: [
        {
          hash: "/ESS#Presentation",
          name: "Présentation",
        },
        {
          hash: "/ESS#Insertion",
          name: "Insertion et emploi",
        },
        {
          hash: "/ESS#LeMess",
          name: "Le Mess & Filanoo",
        },
        {
          hash: "/ESS#Bougeanoo",
          name: "Bougeanoo",
        },
        {
          hash: "/ESS#Colibrinoo",
          name: "Colibrinoo",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Solidarité Océan Indien",
    src: "banniere sourireSolidaire",
    sommaire: {
      src: reseau,
      alt: "icône d'un réseau interconnecté",
      anchor: [
        {
          hash: "/SolidariteOI#Comore",
          name: "Grande Comore",
        },
        {
          hash: "/SolidariteOI#Moheli",
          name: "Mohéli",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Nous contacter",
    src: "banniere contactBanniere",
  },
  {
    id: 5,
    subtitle: "La réinsertion par les métiers de la restauration",
    src: "banniere table",
    button: "Voir le Menu",
    logo: logoMess,
    logoClass: "logoACI messLogo",
    buttonLink: "/LeMess#menu",
  },
  {
    id: 6,
    subtitle: "Atelier textile Zéro Déchet",
    src: "banniere couture",
    logo: logoFilanoo,
    logoClass: "logoACI",
  },
];

export default banniereData;
