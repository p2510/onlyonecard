import Page from "../atoms/Page";
import ActionEtEmpreinteCarbone from "../organisms/eco-coach-personnel/ActionEtEmpreinteCarbone";
import DetailEmpreinteCarbone from "../organisms/eco-coach-personnel/DetailEmpreinteCarbone";
import EntrepriseCarbone from "../organisms/eco-coach-personnel/EntrepriseCarbone";

export default function EcoCoachPersonnel() {
  return (
    <Page title="Notre mission | ONLYONE">
      <ActionEtEmpreinteCarbone />
      <DetailEmpreinteCarbone />
      <EntrepriseCarbone />
    </Page>
  );
}
