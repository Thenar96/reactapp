import React, { useState } from "react";

export default function FaqItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className="folds" onClick={toggleOpen}>
    <h4>
      {title || "Titel saknas"}
      <span className={`arrow ${isOpen ? "open" : ""}`}></span>
    </h4>
    {isOpen && <p>{content || "Innehåll saknas"}</p>}
  </div>
);
}