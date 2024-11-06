import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Subscribe from "./components/Subscribe";
import Function from "./components/Function";
import Reviews from "./components/Reviews";
import Faqs from "./components/Faqs";
import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <Hero />
      <Features />
      <Work />
      <Function />
      <Reviews />
      <Faqs />
      <Subscribe />
      <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
