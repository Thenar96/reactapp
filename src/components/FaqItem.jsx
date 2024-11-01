import React, { useState } from "react";

export default function FaqItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="folds">
      <h4 onClick={toggleOpen} style={{ cursor: "pointer" }}>
        {title}
      </h4>
      {isOpen && (
        <p>{content}</p>
      )}
    </div>
  );
}
