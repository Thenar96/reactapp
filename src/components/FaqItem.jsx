import React from "react";

export default function FaqItem({ title, content }) {
  return (
    <div className="folds">
      <h4>{typeof title === "string" ? title : "Titel saknas"}</h4>
      <p>{typeof content === "string" ? content : "Innehåll saknas"}</p>
    </div>
  );
}