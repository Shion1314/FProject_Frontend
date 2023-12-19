import { createBrowserRouter } from "react-router-dom";

import { ErrorFallback } from "../ErrorFallback";

import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { UniversitySearch } from "../pages/UniversitySearch";

import { RequireAuth } from "./guards/RequireAuth.js";
import { RequireNoAuth } from "./guards/RequireNoAuth";

export const router = createBrowserRouter(
  [
    {
      path: "",
      errorElement: <ErrorFallback />,
      children: [
        {
          element: <RequireAuth />,
          children: [
            {
              path: "",
              element: <UniversitySearch />,
            },
            {
              path: "logout",
              element: <Logout />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
          ],
        },
        {
          element: <RequireNoAuth />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/FProject_Frontend",
  }
);
