import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../App";

export default function Reviews() {
  const { theme } = useContext(ThemeContext);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://win24-assignment.azurewebsites.net/api/testimonials")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <h2 style={{ fontSize: '2rem', lineHeight: '1.2', margin: 0 }}>
          Clients are <br />
          <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Loving Our App</span>
        </h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              style={{
                width: "300px",
                padding: "1.5rem",
                borderRadius: "12px",
                boxShadow: "0px 4px 12px rgHba(0, 0, 0, 0.1)",
                border: "1px solid var(--color-gray)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={testimonial.avatarUrl}
                  alt={`${testimonial.author}'s avatar`}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    marginRight: "1rem",
                  }}
                />
                <div>
                  <h4 style={{ margin: 0 }}>{testimonial.author}</h4>
                  <p style={{ margin: 0, color: "#666" }}>
                    {testimonial.jobRole}
                  </p>
                </div>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                {"⭐".repeat(testimonial.starRating)}
              </div>
              <p>{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
