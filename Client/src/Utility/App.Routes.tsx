import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CustomErrorPage from "../context/errorContext/ErrorRoute.tsx";
import AppLayout from "../Utility/AppLayout";

const LazyHomepage = React.lazy(
  () => import("../components/Pages/Homepage/Homepage.tsx")
);
const LazySignup = React.lazy(
  () => import("../components/Pages/Auth/Signup/Signup.tsx")
);
const LazyLoginForm = React.lazy(
  () => import("../components/Pages/Auth/Login/LoginForm.tsx")
);
const LazyUsers = React.lazy(
  () => import("../components/Pages/Users/Users.tsx")
);
const LazyProfileCurrentUser = React.lazy(
  () => import("../components/Pages/ProfileCurrentUser/ProfileCurrentUser.tsx")
);
const LazySelectedUser = React.lazy(
  () => import("../components/Pages/SelectUser/SelectedUser.tsx")
);
const LazyAdminDashboard = React.lazy(
  () => import("../components/Pages/AdminDashboard/AdminDashboard.tsx")
);
const LazyUsersHolidays = React.lazy(
  () => import("../components/Pages/UsersHolidays/UsersHolidays.tsx")
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
          element: <LazySignup />,
        },
        {
          path: "users",
          element: <LazyUsers />,
        },

        {
          path: "/myProfile",
          element: <LazyProfileCurrentUser />,
        },
        {
          path: "profile/:username",
          element: <LazySelectedUser />,
        },
        {
          path: "AdminDashboard",
          element: <LazyAdminDashboard />,
        },
        {
          path: "UsersHolidays",
          element: <LazyUsersHolidays />,
        },
      ],
    },
  ]);
};
