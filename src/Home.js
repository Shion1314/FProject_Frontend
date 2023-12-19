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
            This is a University search tool, allow user to search for university based on their score and their
            finanical strength
          </p>
          <p>
            Click on the icon to login and begin
          </p>
        </div>
      </main>
    </DefaultLayout>
  );
};
