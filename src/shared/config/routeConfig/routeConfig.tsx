import { RouteProps } from "react-router-dom";

import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOTFOUND = "notFound"
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOTFOUND]: "*"
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RouterPath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOTFOUND]: {
    path: RouterPath.notFound,
    element: <NotFoundPage/>
  }
};
