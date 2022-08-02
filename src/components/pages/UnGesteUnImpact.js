import Page from "../atoms/Page";
import DepenseEtProjet from "../organisms/un-geste-un-impact/DepenseEtProjet";
import ConseilsEpargne from "../organisms/un-geste-un-impact/ConseilsEpargne";

export default function UnGesteUnImpact() {
  return (
    <Page title="Un geste un impact | ONLYONE">
      <DepenseEtProjet />
      <ConseilsEpargne />
    </Page>
  );
}
