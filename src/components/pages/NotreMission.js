import Page from "../atoms/Page";
import Partenaires from "../organisms/notre-mission/Partenaires";
import ValeurEtMission from "../organisms/notre-mission/ValeurEtMission";

export default function NotreMission() {
  return (
    <Page title="Notre mission | ONLYONE">
      <Partenaires />
      <ValeurEtMission />
    </Page>
  );
}
