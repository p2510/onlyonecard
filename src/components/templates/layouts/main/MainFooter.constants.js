import twitterFill from "@iconify/icons-eva/twitter-fill";
import facebookFill from "@iconify/icons-eva/facebook-fill";
import InstagramIcon from "@mui/icons-material/Instagram";
import linkedinFill from "@iconify/icons-eva/linkedin-fill";
import { styled } from "@mui/system";

export const SOCIALS = [
  { name: "FaceBook", icon: facebookFill },
  { name: "Twitter", icon: twitterFill },
  { name: "Linkedin", icon: linkedinFill },
  { name: "Instagram", icon: InstagramIcon },
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
  backgroundColor: "#333333",
}));
