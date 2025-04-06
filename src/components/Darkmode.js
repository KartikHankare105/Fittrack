import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./Darkmode.css";

const Darkmode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("selectedTheme", newTheme);
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme) {
      setTheme(selectedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  

  return (
    <center>
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode_toggle"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode_toggle">
        <Sun className="sun" />
        <Moon className="moon" />
      </label>
    </div>
    </center>
  );
};

export default Darkmode;
