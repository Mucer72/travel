import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import GuestGuard from "../guards/GuestGuard";
import BlogDetail from "../pages/BlogDetail";
import { PATH_DASHBOARD } from "./paths";
import Speciality from "../pages/Speciality";
import FoodAndDrink from "../pages/FoodAndDrink";
import Intermediary from "../pages/Intermediary";
import { getOriginURL } from "../handler";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: PATH_DASHBOARD.root,
      element: (
        <GuestGuard>
          <Home />
        </GuestGuard>
      ),
    },
    {
      path: `${PATH_DASHBOARD.root}/${getOriginURL}`,
      element: (
        <GuestGuard>
          <Home />
        </GuestGuard>
      ),
    },
    {
      path: `${PATH_DASHBOARD.blogDetail}/:id`,
      element: (
        <GuestGuard>
          <BlogDetail />
        </GuestGuard>
      ),
    },
    {
      path: `${PATH_DASHBOARD.speciality}/:id`,
      element: (
        <GuestGuard>
          <Speciality />
        </GuestGuard>
    )
    },
    {
      path: `${PATH_DASHBOARD.FoodAndDrink}/:id`,
      element: (
        <GuestGuard>
          <FoodAndDrink />
        </GuestGuard>
    )
    },
    {
      path: `${PATH_DASHBOARD.Intermediary}/:id`,
      element: (
        <GuestGuard>
          <Intermediary/>
        </GuestGuard>
    )
    },
  ]);
}

// Layouts
const Home = Loadable(lazy(() => import("../pages/HomeSection/index.js")));