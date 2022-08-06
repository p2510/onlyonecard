import Page from "../atoms/Page";
import AbonnementsSimples from "../organisms/nos-tarifs-et-abonnements/AbonnementsSimples";
import FonctionnalitesPrincipales from "../organisms/nos-tarifs-et-abonnements/FonctionnalitesPrincipales";
import TableauDeResume from "../organisms/nos-tarifs-et-abonnements/TableauDeResume";

export default function TarifsEtAbonnements() {
  return (
    <Page title="Notre mission | ONLYONE">
      <AbonnementsSimples />
      <FonctionnalitesPrincipales />
      <TableauDeResume />
    </Page>
  );
}
