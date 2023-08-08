import { Suspense } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router";

import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { Loader } from "widgets/Loader";

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
