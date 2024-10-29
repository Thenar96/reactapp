import React, { useEffect, useState } from "react";
import FaqItem from "./FaqItem";

function Faqs() {
  const [faqItem, setFaqItem] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);
  async function fetchData() {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/faq"
    );
    const data = await res.json();
    if (data == []) {
      console.log("in if", data)
    } else {
      console.log("in else", data)
      setFaqItem(Array(data));
    }
    console.log(faqItem)
  };


  return (
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

      <div className="Q-list">
        {
          faqItem?.map((item) => (<FaqItem key={item.id} title={item.title} content={item.content} />))  
        }
        {/* <div className="folds">
          <h2 className="faq-question">
            Is any of my personal information stored i the App?
            <img src="src/assets/arrow.svg" alt="" />
          </h2>
        </div>
        <div className="folds">
          <h2 className="faq-question">
            What formats can i download my transaction history in?
            <img src="src/assets/arrow.svg" alt="" />
          </h2>
        </div>
        <div className="folds">
          <h2 className="faq-question">
            Can i Schedule future transfers?
            <img src="src/assets/arrow.svg" alt="" />
          </h2>
        </div>
        <div className="folds">
          <h2 className="faq-question">
            When can i use Banking App services?
            <img src="src/assets/arrow.svg" alt="" />
          </h2>
        </div>
        <div className="folds">
          <h2 className="faq-question">
            Can I create my own password that is easy for me to remember?
            <img src="src/assets/arrow.svg" alt="" />
          </h2>
        </div>
        <div className="folds">
          <h2 className="faq-question">
            What happens if i forget or lose my password?
            <img src="src/assets/arrow.svg" alt="" />
          </h2>
        </div> */}
      </div>
    </section>
  );
}

export default Faqs;
