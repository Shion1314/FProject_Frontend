import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import { getMe } from "./api/Me";

import { router } from "./router";

import { setUser, store } from "./store";

import "./styles.css";

getMe()
  .then(({ user }) => store.dispatch(setUser(user)))
  .catch((error) => console.warn(`Could not restore session: ${error.message}`));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
