import React, { useContext } from "react";
import { ThemeContext } from "../App";

export default function Footer() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>

    <footer>
    <div className="Foot-end">
      © 2024 Silicon. All rights reserved. Credit MadrasThemes
    </div>
    </footer>
    </div>
  )
}

