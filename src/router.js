import { Outlet, createBrowserRouter } from "react-router-dom";

import {ErrorFallback} from "./ErrorFallback"
import { UniversitySearch } from "./pages/University_search";

import { Home } from "./Home";


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
        path:"/University_Search",
        element: <UniversitySearch/>

    }
   
  ],
  {
    basename: "/FProject_Frontend",
  }
);