import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CustomErrorPage from "../context/errorContext/ErrorRoute.tsx";
import AppLayout from "../Utility/AppLayout";

const LazyHomepage = React.lazy(
  () => import("../components/Pages/Homepage/Homepage.tsx")
);
const LazySignupForm = React.lazy(
  () => import("../components/Pages/Auth/Signup/SignupForm.tsx")
);
const LazyLoginForm = React.lazy(
  () => import("../components/Pages/Auth/Login/LoginForm.tsx")
);
const LazyUsers = React.lazy(
  () => import("../components/Pages/Users/Users.tsx")
);
const LazyManageHolidays = React.lazy(
  () => import("../components/Pages/ManageHolidays/ManageHolidays.tsx")
);
const LazyAdminDashboard = React.lazy(
  () => import("../components/Pages/AdminDashboard/AdminDashboard.tsx")
);

export const useAppRoutes = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <CustomErrorPage />,
      children: [
        {
          path: "/",
          element: <LazyHomepage />,
        },

        {
          path: "AuthLogin",
          element: <LazyLoginForm />,
        },
        {
          path: "AuthSignup",
          element: <LazySignupForm />,
        },
        {
          path: "users",
          element: <LazyUsers />,
        },
        {
          path: "myProfile",
          element: <LazyManageHolidays />,
        },
        {
          path: "AdminDashboard",
          element: <LazyAdminDashboard />,
        },
      ],
    },
  ]);
};
