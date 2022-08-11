import facebook_icon from "../../../../assets/images/facebook_icon.svg";
import linkedin_icon from "../../../../assets/images/linkedin_icon.svg";
import insta_icon from "../../../../assets/images/insta_icon.svg";
import twitter_icon from "../../../../assets/images/twitter_icon.svg";
import { styled } from "@mui/system";

export const SOCIALS = [
  { name: "FaceBook", icon: facebook_icon },
  { name: "Linkedin", icon: linkedin_icon },
  { name: "Twitter", icon: twitter_icon },
  { name: "Instagram", icon: insta_icon },
];

export const LINKS = [
  {
    headline: "Application OnlyOne",
    children: [
      { name: "Comment créer de l'impact", href: "#" },
      { name: "Compte écologique et éthique", href: "#" },
      { name: "L'Eco-coach", href: "#" },
      { name: "La place Impact", href: "#" },
      { name: "Nos tarifs et abonnements", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  },
  {
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
    headline: "Mentions",
    children: [{ name: "Mentions légales", href: "#" }],
  },
  {
    headline: "confidentialités",
    children: [{ name: "Charte de confidentialités", href: "#" }],
  },
  {
    headline: "Conditions",
    children: [{ name: "Conditions générales", href: "#" }],
  },
];

export const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#75AB95",
}));
