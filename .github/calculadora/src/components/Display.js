// src/components/Display.js
import React from "react";

function Display({ value }) {
  return <input type="text" className= "display" value={value} disabled />;
}

export default Display;
