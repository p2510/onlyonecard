import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/main";
import LoadingScreen from "../components/LoadingScreen";

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
  ]);
}

// Main
const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
const CompteEcologiqueEthique = Loadable(
  lazy(() => import("../pages/CompteEcologiqueEthique"))
);
