import React, { useContext } from "react";
import { ThemeContext } from "../App";

export default function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <section className="hero">
        <div className="content">
          <h1 className="description">Manage All Your Money in One App</h1>
          <p>
            We offer you a new generation of mobile banking. Save, spend &
            manage money in your pocket.
          </p>
          <div className="buttons">
            <a href="#" className="app-store">
              <img src="src/assets/apple.svg" alt="" />
            </a>
            <a href="#" className="google-play">
              <img src="src/assets/google.svg" alt="" />
            </a>
          </div>
          <div className="discover-more">
            <div className="circle">
              <span className="point-arrow">↓</span>
            </div>
            <span className="text">Discover more</span>
          </div>
        </div>
        <div className="hero-phones">
          <img src="src/assets/test.svg" alt="preview" />
        </div>
      </section>
    </div>
  );
}
