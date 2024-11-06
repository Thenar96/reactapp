import React, { useContext } from "react";
import { ThemeContext } from "../App";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>

    <section className="app">
      <div className="step">
        <h2>How does it work?</h2>
      </div>
      <div className="steps">
        <img src="src/assets/trio.svg" alt="" />
      </div>
      <div className="text">
        <h2>Latest transaction history</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          inventore dolorum soluta et nisi aspernatur voluptas distinctio
          exercitationem, culpa veritatis.
        </p>
      </div>
    </section>
    </div>
  );
}