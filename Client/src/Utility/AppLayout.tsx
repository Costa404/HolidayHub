import { Outlet } from "react-router-dom";

import { Suspense } from "react";
import LoadingSpinner from "../Utility/Loading/LoadingSpinner";
import Navbar from "../components/Navbar/Navbar";

const AppLayout = () => {
  return (
    <section className="w-100 d-flex flex-column align-items-center">
      <div className="w-100 contentHomepage  ">
        <Navbar />

        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

export default AppLayout;
