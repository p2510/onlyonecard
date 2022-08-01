import Page from "../components/Page";
import PlaceImpactServiceFirstPart from "src/sections/place-impact/PlaceImpactServiceFirstPart";
import PlaceImpactServiceSecondPart from "src/sections/place-impact/PlaceImpactServiceSecondPart";
import FinancementProjet from "src/sections/place-impact/FinancementProjet";

// ----------------------------------------------------------------------

export default function PlaceImpact() {
  return (
    <Page title="Notre mission | ONLYONE">
      <PlaceImpactServiceFirstPart />
      <PlaceImpactServiceSecondPart />
      <FinancementProjet />
    </Page>
  );
}
