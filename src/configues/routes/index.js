import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import LoadingScreen from "../../components/atoms/LoadingScreen";
// import AuthGuard from "../guards/AuthGuard";
import MainLayout from "../../components/templates/layouts/main";

const Loadable = (Component) => (props) =>
  (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            top: 0,
            left: 0,
            width: 1,
            zIndex: 9999,
            position: "fixed",
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );

export default function Router() {
  return useRoutes([
    // {
    //   path: "",
    //   element: (
    //     <AuthGuard>
    //       <MainLayout />
    //     </AuthGuard>
    //   ),
    // },
    {
      path: "/",
      element: <MainLayout />,
      children: [{ element: <LandingPage />, index: true }],
    },
    {
      path: "/compte-ecologique-et-ethique",
      element: <MainLayout />,
      children: [{ element: <CompteEcologiqueEthique />, index: true }],
    },
    {
      path: "/un-geste-un-impact",
      element: <MainLayout />,
      children: [{ element: <UnGesteUnImpact />, index: true }],
    },
    {
      path: "/notre-mission",
      element: <MainLayout />,
      children: [{ element: <NotreMission />, index: true }],
    },
    {
      path: "/blog",
      element: <MainLayout />,
      children: [{ element: <ChroniqueFinanceEtImpact />, index: true }],
    },
    {
      path: "/ouvrir-un-compte-onlyone",
      element: <MainLayout />,
      children: [{ element: <OuvertureDeCompte />, index: true }],
    },
    {
      path: "/place-impact",
      element: <MainLayout />,
      children: [{ element: <PlaceImpact />, index: true }],
    },
    {
      path: "/nos-tarifs-et-abonnements",
      element: <MainLayout />,
      children: [{ element: <TarifsEtAbonnements />, index: true }],
    },
    {
      path: "/votre-eco-coach-personnel",
      element: <MainLayout />,
      children: [{ element: <ActionEtEmpreinteCarbone />, index: true }],
    },
    {
      path: "/saviez-vous-que-votre-argent-a-la-banque-ne-pas",
      element: <MainLayout />,
      children: [{ element: <Article />, index: true }],
    },
  ]);
}

// Main
const LandingPage = Loadable(
  lazy(() => import("../../components/pages/LandingPage"))
);
const CompteEcologiqueEthique = Loadable(
  lazy(() => import("../../components/pages/CompteEcologiqueEthique"))
);
const UnGesteUnImpact = Loadable(
  lazy(() => import("../../components/pages/UnGesteUnImpact"))
);
const NotreMission = Loadable(
  lazy(() => import("../../components/pages/NotreMission"))
);
const ChroniqueFinanceEtImpact = Loadable(
  lazy(() => import("../../components/pages/ChroniqueFinanceEtImpact"))
);
const OuvertureDeCompte = Loadable(
  lazy(() => import("../../components/pages/OuvertureDeCompte"))
);
const PlaceImpact = Loadable(
  lazy(() => import("../../components/pages/PlaceImpact"))
);
const TarifsEtAbonnements = Loadable(
  lazy(() => import("../../components/pages/TarifsEtAbonnements"))
);
const ActionEtEmpreinteCarbone = Loadable(
  lazy(() => import("../../components/pages/EcoCoachPersonnel"))
);
const Article = Loadable(lazy(() => import("../../components/pages/Article")));
