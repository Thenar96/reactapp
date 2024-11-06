import React, { useContext } from "react";
import { ThemeContext } from "../App";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <header className={`topbar ${theme === "light" ? "light-theme" : "dark-theme"}`}>
      <div className="logo">
        <img src="src/assets/Silicon.svg" alt="Logo" />
      </div>
      <nav id="main-menu" className="navbar">
        <a className="nav-link" href="#">
          Features
        </a>
      </nav>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
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
