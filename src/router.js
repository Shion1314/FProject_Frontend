import { Outlet, createBrowserRouter } from "react-router-dom";

import { ErrorFallback } from "./ErrorFallback";
import { UniversitySearch } from "./pages/University_search";

import { Home } from "./Home";

import { Login } from "./pages/Login";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <ErrorFallback />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
    {
      path: "/University_Search",
      element: <UniversitySearch />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ],
  {
    basename: "/FProject_Frontend",
  }
);
