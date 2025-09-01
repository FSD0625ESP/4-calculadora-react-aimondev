// src/components/Button.js
import React from "react";

function Button({ label, onClick, className = "" }) {
  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

export default Button;
