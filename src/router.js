import { createBrowserRouter } from "react-router-dom";

import { ErrorFallback } from "./ErrorFallback";

import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Profile } from "./pages/Profile";
import { Register } from "./pages/Register";
import { UniversitySearch } from "./pages/UniversitySearch";

export const router = createBrowserRouter(
  [
    {
      path: "",
      errorElement: <ErrorFallback />,
      children: [
        {
          path: "",
          element: <UniversitySearch />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "logout",
          element: <Logout />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ],
  {
    basename: "/FProject_Frontend",
  }
);
