import Page from "../atoms/Page";
import AbonnementsSimples from "../organisms/nos-tarifs-et-abonnements/AbonnementsSimples";
import FonctionnalitesPrincipales from "../organisms/nos-tarifs-et-abonnements/FonctionnalitesPrincipales";

export default function TarifsEtAbonnements() {
  return (
    <Page title="Notre mission | ONLYONE">
      <AbonnementsSimples />
      <FonctionnalitesPrincipales />
    </Page>
  );
}
