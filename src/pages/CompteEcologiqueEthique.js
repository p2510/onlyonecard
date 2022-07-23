// components
import CartePaiementEtPrix from "src/sections/compte-ecologique-et-ethique/CartePaiementEtPrix";
import DifferentsEtapes from "src/sections/compte-ecologique-et-ethique/DifferentsEtapes";
import DifferentsService from "src/sections/compte-ecologique-et-ethique/DifferentsService";
import OuvrirUnCompte from "src/sections/compte-ecologique-et-ethique/OuvrirUnCompte";
import Page from "../components/Page";
// sections

// ----------------------------------------------------------------------

export default function CompteEcologiqueEthique() {
  return (
    <Page title="Le 1er compte à impact positif | ONLYONE">
      <OuvrirUnCompte />
      <DifferentsService />
      <CartePaiementEtPrix />
      <DifferentsEtapes />
    </Page>
  );
}
