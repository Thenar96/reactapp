import React, { useContext } from "react";
import { ThemeContext } from "../App";

export default function Subscribe() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>

    <section className="newsletter">
      <div className="subscribe">
        <div className="email-left">
          <img src="src/assets/ringbell.svg" alt="bell" className="ringbell" />
          <h2>
            Subscribe to our newsletter to stay informed about latest updates
          </h2>
        </div>
        <div className="email-right">
          <input type="Your Email" placeholder="Enter your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
    </div>
  );
}
