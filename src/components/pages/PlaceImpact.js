import Page from "../atoms/Page";
import PlaceImpactServiceFirstPart from "../organisms/place-impact/PlaceImpactServiceFirstPart";
import PlaceImpactServiceSecondPart from "../organisms/place-impact/PlaceImpactServiceSecondPart";
import FinancementProjet from "../organisms/place-impact/FinancementProjet";

export default function PlaceImpact() {
  return (
    <Page title="Notre mission | ONLYONE">
      <PlaceImpactServiceFirstPart />
      <PlaceImpactServiceSecondPart />
      <FinancementProjet />
    </Page>
  );
}
