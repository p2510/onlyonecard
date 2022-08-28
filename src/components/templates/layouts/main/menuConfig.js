import Iconify from "../../../atoms/Iconify";
import { PATH_PAGE } from "../../../../configues/routes/paths";

const ICON_SIZE = {
  width: 20,
  height: 20,
};

const menuConfig = [
  {
    title: "Compte écologique et éthique",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: PATH_PAGE.CompteEcologiqueEthique,
  },
  {
    title: "Notre mission",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: PATH_PAGE.NotreMission,
  },
  {
    title: "Un geste, un impact",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: PATH_PAGE.UnGesteUnImpact,
  },
  {
    title: "La chronique finance et impact",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: PATH_PAGE.ChroniqueFinanceEtImpact,
  },
  {
    title: "Ouvrir un compte",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: PATH_PAGE.OuvertureDeCompte,
  },
];

export default menuConfig;
