import aide_financiere from "../../../assets/images/aide_financiere.png";
import rouages_onlyone from "../../../assets/images/rouages_onlyone.png";
import financement_protection from "../../../assets/images/financement_protection.png";
import comment_estimer from "../../../assets/images/comment_estimer.png";
import saviez_vous from "../../../assets/images/saviez_vous.svg";
import carte_recyclee from "../../../assets/images/carte_recyclee.png";
import unitlife from "../../../assets/images/unitlife.png";

export const buttonStyles = {
  borderRadius: 50,
  p: 1,
  m: 2,
  minWidth: "150px",
  border: "1px solid",
  borderColor: "#00db89",
  textTransform: "none",
  color: "#333",
};

export const buttonTwoStyles = {
  borderRadius: "23px",
  p: 1,
  m: 2,
  minWidth: "170px",
  border: "1px solid",
  borderColor: "#2A7267",
  backgroundColor: "#2A7267",
  textTransform: "none",
  color: "#fff",
};

export const CHRONIQUEDATA = [
  {
    id: 1,
    type: "Finance",
    date: "9 mars 2022",
    icon: `${aide_financiere}`,
    description:
      "Les aides financières qui existent pour financer des projets écologiques",
    lien: "En savoir plus",
  },
  {
    id: 2,
    type: "Finance",
    date: "10 janvier 2022",
    icon: `${rouages_onlyone}`,
    description:
      "Les rouages d’OnlyOne : lancer un projet à impact positif dans le monde bancaire",
    lien: "En savoir plus",
  },
  {
    id: 3,
    type: "Finance",
    date: "17 juin 2021",
    icon: `${saviez_vous}`,
    description: "Saviez-vous que l’argent à la banque ne dort pas ?",
    lien: "En savoir plus",
  },
  {
    id: 4,
    type: "Impact Positif",
    date: "8 avril 2021",
    icon: `${financement_protection}`,
    description:
      "Financement de la protection de la biodiversité à chaque transaction",
    lien: "En savoir plus",
  },
  {
    id: 5,
    type: "Impact Positif",
    date: "11 février 2021",
    icon: `${comment_estimer}`,
    description:
      "Comment estimer, comprendre et réduire son empreinte carbone ?",
    lien: "En savoir plus",
  },
  {
    id: 6,
    type: "Actualités",
    date: "26 novembre 2020",
    icon: `${carte_recyclee}`,
    description: "Pourquoi une carte de paiement recyclée ?",
    lien: "En savoir plus",
  },
  {
    id: 7,
    type: "Impact Positif",
    date: "12 novembre 2020",
    icon: `${unitlife}`,
    description: "Partenariat avec l’ONU à travers UNITLIFE",
    lien: "En savoir plus",
  },
];

export const BUTTONLABELLEDATA = [
  {
    id: 0,
    type: "Tout",
  },
  {
    id: 1,
    type: "Finance",
  },
  {
    id: 2,
    type: "Actualités",
  },
  {
    id: 3,
    type: "Impact Positif",
  },
];
