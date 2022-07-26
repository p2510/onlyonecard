import DepenseEtProjet from "src/sections/un-geste-un-impact/DepenseEtProjet";
import ConseilsEpargne from "src/sections/un-geste-un-impact/ConseilsEpargne";
import Page from "../components/Page";

// ----------------------------------------------------------------------

export default function UnGesteUnImpact() {
  return (
    <Page title="Un geste un impact | ONLYONE">
      <DepenseEtProjet />
      <ConseilsEpargne />
    </Page>
  );
}
