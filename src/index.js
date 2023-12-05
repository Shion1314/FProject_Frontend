import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { getMe } from "./api/Auth";

import { router } from "./router";

import { setUser, store } from "./store";

import "./styles.css";

getMe()
  .then(({ user }) => store.dispatch(setUser(user)))
  .catch((error) => console.warn(`Could not restore session: ${error.message}`));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
