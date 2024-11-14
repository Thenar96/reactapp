import React, { useContext } from "react";
import { ThemeContext } from "../App";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`topbar ${theme === "light" ? "light-theme" : "dark-theme"}`}
    >
      <div className="logo">
        <img src="src/assets/Siliconlogo.svg" alt="Logo" />
      </div>
      <h2>Silicon</h2>
      <nav id="main-menu" className="navbar">
        <a className="nav-link-features" href="#">
          Features
        </a>
        <a className="nav-link-contact" href="#">
          Contact
        </a>
      </nav>
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        <div className="slider round"></div>
      </label>

      <a id="auth-signin" href="#" className="btn-primary">
        <i className="fa-regular fa-user"></i>
        <span>Sign in / up</span>
      </a>
    </header>
  );
}

export default Header;
