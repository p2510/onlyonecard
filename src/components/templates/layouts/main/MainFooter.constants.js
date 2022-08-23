import facebook_icon from "../../../../assets/images/facebook_icon.svg";
import linkedin_icon from "../../../../assets/images/linkedin_icon.svg";
import insta_icon from "../../../../assets/images/insta_icon.svg";
import twitter_icon from "../../../../assets/images/twitter_icon.svg";
import { styled } from "@mui/system";
import { PATH_PAGE } from "src/configues/routes/paths";

export const SOCIALS = [
  {
    id: 1,
    name: "FaceBook",
    icon: facebook_icon,
    lien: "https://www.facebook.com/OnlyOne.Card.FR",
  },
  {
    id: 2,
    name: "Twitter",
    icon: twitter_icon,
    lien: "https://twitter.com/OnlyOnecard",
  },
  {
    id: 3,
    name: "Instagram",
    icon: insta_icon,
    lien: "https://www.instagram.com/onlyone.card/",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: linkedin_icon,
    lien: "https://www.linkedin.com/company/onlyonecard/",
  },
];

export const LINKS = [
  {
    id: 1,
    headline: "Application OnlyOne",
    children: [
      {
        name: "Comment créer de l'impact",
        href: `${PATH_PAGE.UnGesteUnImpact}`,
      },
      {
        name: "Compte écologique et éthique",
        href: `${PATH_PAGE.CompteEcologiqueEthique}`,
      },
      { name: "L'Eco-coach", href: `${PATH_PAGE.ActionEtEmpreinteCarbone}` },
      {
        name: "La place Impact",
        href: `${PATH_PAGE.PlaceImpact}`,
      },
      {
        name: "Nos tarifs et abonnements",
        href: `${PATH_PAGE.TarifsEtAbonnements}`,
      },
      { name: "FAQ", href: `/https://www.support.onlyonecard.eu/hc/fr` },
    ],
  },
  {
    id: 2,
    headline: "La marque OnlyOne",
    children: [
      { name: "La chronique finance et impact", href: "#" },
      { name: "Kite média", href: "#" },
      { name: "Nous rejoindre", href: "#" },
      { name: "Programme d'affiliation", href: "#" },
    ],
  },
];

export const CONDITIONLINKS = [
  {
    id: 1,
    headline: "Mentions",
    children: [{ id: 1, name: "Mentions légales", href: "#" }],
  },
  {
    id: 2,
    headline: "confidentialités",
    children: [{ id: 2, name: "Charte de confidentialités", href: "#" }],
  },
  {
    id: 3,
    headline: "Conditions",
    children: [{ id: 3, name: "Conditions générales", href: "#" }],
  },
];

export const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#75AB95",
}));
