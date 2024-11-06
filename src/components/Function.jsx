import React, { useContext } from "react";
import { ThemeContext } from "../App";


export default function Testimonials() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <section className="work">
        <div className="container-work">
          <div className="section">
            <h2>Make your money transfer simple and clear</h2>

            <p>
              <img src="src/assets/check.svg" alt="check" />
              Banking transactions are free for you
            </p>
            <p>
              <img src="src/assets/check.svg" alt="check" />
              No monthly cash commission
            </p>
            <p>
              <img src="src/assets/check.svg" alt="check" />
              Manage Payments and transactions online
            </p>
            <a href="#" className="learn-more">
              Learn more
            </a>
          </div>

          <div className="section">
            <img src="src/assets/june.svg" alt="" />
          </div>

          <div className="section">
            <img src="src/assets/contacts.svg" alt="" />
          </div>

          <div className="section2">
            <h2>Receive payment from international bank details</h2>
            <div className="column">
              <p>
                <img src="src/assets/card.svg" alt="" />
                Manage your payments online. Mollis congue egestas egestas
                fermentum.
              </p>
              <p>
                <img src="src/assets/wallet.svg" alt="" />
                Manage your payments online. Mollis congue egestas egestas
                fermentum.
              </p>
            </div>
            <a href="#" className="learn-more">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
