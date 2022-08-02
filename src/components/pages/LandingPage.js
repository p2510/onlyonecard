import LandingFirstSection from "../organisms/home/LandingFirstSection";
import Page from "../atoms/Page";
import {
  LandingSecondSection,
  HeroSection,
  Functionalities,
  BanqueSection,
  ValeurAndEngagement,
  AboutUs,
} from "../organisms/home";
import ProjetsFiancesSection from "../organisms/home/ProjetsFinancesSection";

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <Page title="Page d'accueil | ONLYONE">
      <LandingFirstSection />
      <LandingSecondSection />
      <HeroSection />
      <ProjetsFiancesSection />
      <Functionalities />
      <BanqueSection />
      <ValeurAndEngagement />
      <AboutUs />
    </Page>
  );
}
