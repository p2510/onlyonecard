function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  CompteEcologiqueEthique: path(ROOTS_AUTH, "/compte-ecologique-et-ethique"),
};

export const PATH_PAGE = {
  CompteEcologiqueEthique: "/compte-ecologique-et-ethique",
  UnGesteUnImpact: "/un-geste-un-impact",
  NotreMission: "/notre-mission",
  ChroniqueFinanceEtImpact: "/blog",
  OuvertureDeCompte: "/ouvrir-un-compte-onlyone",
  PlaceImpact: "/place-impact",
  TarifsEtAbonnements: "/nos-tarifs-et-abonnements",
};
