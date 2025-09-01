// src/components/DarkToggle.js
import React from "react";

function DarkToggle({ toggleDarkMode }) {
  return (
    <button className="dark-toggle" onClick={toggleDarkMode}>
      🌙
    </button>
  );
}

export default DarkToggle;
