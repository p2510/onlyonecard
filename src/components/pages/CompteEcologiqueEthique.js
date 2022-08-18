import DifferentsEtapes from "../organisms/compte-ecologique-et-ethique/DifferentsEtapes";
import DifferentsService from "../organisms/compte-ecologique-et-ethique/DifferentsService";
import OuvrirUnCompte from "../organisms/compte-ecologique-et-ethique/OuvrirUnCompte";
import Page from "../atoms/Page";
import { BanqueSection } from "../organisms/home";

// ----------------------------------------------------------------------

export default function CompteEcologiqueEthique() {
  return (
    <Page title="Compte écologique et éthique | ONLYONE">
      <OuvrirUnCompte />
      <DifferentsService />
      <BanqueSection />
      <DifferentsEtapes />
    </Page>
  );
}
