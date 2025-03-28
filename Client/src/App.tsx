import { RouterProvider } from "react-router-dom";

import { Suspense } from "react";
import LoadingSpinner from "./Utility/Loading/LoadingSpinner";
import { useAppRoutes } from "./Utility/App.Routes";
import { CurrentUserProvider } from "./context/useCurrentUserAuth";
import { SignupFormProvider } from "./context/FormSignupContext/FormSignupContext";
import { ErrorProvider } from "./context/errorContext/useError";

const App = () => {
  const appRoutes = useAppRoutes();

  const LoadingFallback = (
    <div>
      <LoadingSpinner />
    </div>
  );

  return (
    <Suspense fallback={LoadingFallback}>
      <ErrorProvider>
        <SignupFormProvider>
          <CurrentUserProvider>
            <RouterProvider router={appRoutes} />
          </CurrentUserProvider>
        </SignupFormProvider>
      </ErrorProvider>
    </Suspense>
  );
};

export default App;
