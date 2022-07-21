import LandingFirstSection from "../sections/home/LandingFirstSection";
import Page from "../components/Page";
import {
  LandingSecondSection,
  HeroSection,
  Functionalities,
  BanqueSection,
  ValeurAndEngagement,
} from "src/sections/home";
import ProjetsFiancesSection from "../sections/home/ProjetsFinancesSection";

export default function LandingPage() {
  return (
    <Page title="Le 1er compte à impact positif | ONLYONE">
      <LandingFirstSection />
      <LandingSecondSection />
      <HeroSection />
      <ProjetsFiancesSection />
      <Functionalities />
      <BanqueSection />
      <ValeurAndEngagement />
    </Page>
  );
}
