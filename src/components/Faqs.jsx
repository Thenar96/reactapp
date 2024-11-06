import React, { useEffect, useState, useContext } from "react";
import FaqItem from "./FaqItem";
import { ThemeContext } from "../App";

function Faqs() {
  const { theme } = useContext(ThemeContext);
  const [faqItem, setFaqItem] = useState([]);

  async function fetchData() {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/faq",
      { headers: { "Content-Type": "application/json" } }
    );
    const fetchedData = await res.json();
    setFaqItem(fetchedData);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>

    <section className="faqs">
      <div className="questions">
        <h2>Any questions? Check out the FAQs</h2>
        <p>Still have unanswered questions and need to get in touch?</p>
        <div className="options">
          <div className="contact-support">
            <img src="src/assets/phone.svg" alt="phone" />
            <p>Still have questions?</p>
            <a href="#" className="contact-us">
              {" "}
              Contact us
            </a>
          </div>
          <div className="contact-support">
            <img src="src/assets/chat.svg" alt="chat" />
            <p>Don't like phone calls?</p>
            <a href="#" className="chat-us">
              {" "}
              Contact us
            </a>
          </div>
        </div>
      </div>

      <div className="q-list">
        {faqItem?.map((item) => (
          <FaqItem key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
    </div>
  );
}

export default Faqs;
