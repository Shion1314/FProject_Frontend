import React from "react";
import { DefaultLayout } from "./layout/DefaultLayout";

export const Home = () => {
  const genre = ["fiction", "romance", "fantasy", "horror", "history", "music", "film"];

  return (
    <DefaultLayout>
      <main>
        <div style={{ margin: "10%", marginTop: "5%", fontSize: "1.20em", lineHeight: "2" }}>
          <h1>Welcome to the Open Library Explorer!</h1>
          <p style={{ margin: "3%" }}>
            This application utilizes the Open Library API to provide information about books and
            authors. Explore the world of literature by searching for your favorite authors or
            discovering random books.
          </p>
          <p>
            Use the navigation below to get started, and enjoy your journey through the vast
            collection of the Open Library.
          </p>
        </div>
      </main>
    </DefaultLayout>
  );
};
