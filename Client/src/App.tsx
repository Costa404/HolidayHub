import { RouterProvider } from "react-router-dom";

import { Suspense } from "react";
import LoadingSpinner from "./Utility/Loading/LoadingSpinner";
import { useAppRoutes } from "./Utility/App.Routes";
import { CurrentUserProvider } from "./context/errorContext/useCurrentUserAuth";

const App = () => {
  const appRoutes = useAppRoutes();

  const LoadingFallback = (
    <div>
      <LoadingSpinner />
    </div>
  );

  return (
    <Suspense fallback={LoadingFallback}>
      <CurrentUserProvider>
        <RouterProvider router={appRoutes} />
      </CurrentUserProvider>
    </Suspense>
  );
};

export default App;
