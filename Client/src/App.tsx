import { RouterProvider } from "react-router-dom";

import { Suspense } from "react";
import LoadingSpinner from "./Utility/Loading/LoadingSpinner";
import { useAppRoutes } from "./Utility/App.Routes";

const App = () => {
  const appRoutes = useAppRoutes();

  const LoadingFallback = (
    <div>
      <LoadingSpinner />
    </div>
  );

  return (
    <Suspense fallback={LoadingFallback}>
      <RouterProvider router={appRoutes} />
    </Suspense>
  );
};

export default App;
