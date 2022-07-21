import compte_courant from "../../assets/images/compte_courant.png";
import paiement_carte from "../../assets/images/paiement_carte.png";
import epargne_position from "../../assets/images/epargne_position.png";
import sgbci from "../../assets/images/sgbci.png";
import banque_france from "../../assets/images/banque_france.png";
import master_card from "../../assets/images/master_card.png";
import ethique_icon from "../../assets/images/ethique_icon.png";
import responsable_icon from "../../assets/images/responsable_icon.png";
import solidaire_icon from "../../assets/images/solidaire_icon.png";
import transparent_icon from "../../assets/images/transparent_icon.png";

export const AVANTAGES = [
  {
    id: 1,
    icon: `${compte_courant}`,
    title: `Un compte courant écologique`,
    title2: ``,
    paragraphe: `Bénéficiez d’un compte en ligne avec IBAN Français sécurisé`,
    paragraphe2: `Suivez l’impact CO2 de vos dépenses`,
  },
  {
    id: 2,
    icon: `${paiement_carte}`,
    title: `Une carte de paiement utile`,
    title2: ``,
    paragraphe: `Payez sans frais dans toute l’Europe et à l’international`,
    paragraphe2: `À chaque paiement nous finançons des projets à impact positif`,
  },
  {
    id: 3,
    icon: `${epargne_position}`,
    title: `De l’épargne positive`,
    title2: ``,
    paragraphe: `Découvrez des produits financiers qui vous correspondent`,
    paragraphe2: `Diversifier votre épargne au profit de la transition écologique et solidaire`,
  },
];

export const BANQUEDATA = [
  {
    id: 1,
    icon: `${banque_france}`,
    title: `Validé par le régulateur bancaire`,
    paragraphe: `OnlyOne est enregistrée auprès de l’Autorité de Contrôle Prudentiel et de Résolution (Banque de France).`,
  },
  {
    id: 2,
    icon: `${sgbci}`,
    title: `Fonds cantonnés en sécurité`,
    paragraphe: `Vos fonds sont garantis et sécurisés par la Société Générale et seul vous avez accès à votre argent.`,
  },
  {
    id: 3,
    icon: `${master_card}`,
    title: `Paiements sécurisés`,
    paragraphe: `Vos paiements sont protégés sur le réseau Mastercard et grâce à la technologie 3D Secure.`,
  },
];

export const VALEURANDENGAGEMENTDATA = [
  {
    id: 1,
    icon: `${ethique_icon}`,
    title: `Ethique`,
  },
  {
    id: 2,
    icon: `${responsable_icon}`,
    title: `Responsable`,
  },
  {
    id: 3,
    icon: `${solidaire_icon}`,
    title: `Solidaire`,
  },
  {
    id: 4,
    icon: `${transparent_icon}`,
    title: `Transparent`,
  },
];
