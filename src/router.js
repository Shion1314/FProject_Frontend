import { Outlet, createBrowserRouter } from "react-router-dom";

import { ErrorFallback } from "./ErrorFallback";
import { UniversitySearch } from "./pages/University_search";

import { Home } from "./Home";

import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Register } from "./pages/Register";
import Profile from './pages/Profile';

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
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/Profile",
      element: <Profile />,
    }
  ],
  {
    basename: "/FProject_Frontend",
  }
);
