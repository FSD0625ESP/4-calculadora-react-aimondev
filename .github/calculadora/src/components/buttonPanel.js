// src/components/ButtonPanel.js
import React from "react";
import Button from "./button";

function ButtonPanel({ appendValue, clearDisplay, backspace, calculate }) {
  return (
    <div className="buttons">
      <Button label="⌫" onClick={backspace} className="borrar" />
      <Button label="AC" onClick={clearDisplay} />
      <Button label="/" onClick={appendValue} />
      <Button label="7" onClick={appendValue} />
      <Button label="8" onClick={appendValue} />
      <Button label="9" onClick={appendValue} />
      <Button label="+" onClick={appendValue} />
      <Button label="4" onClick={appendValue} />
      <Button label="5" onClick={appendValue} />
      <Button label="6" onClick={appendValue} />
      <Button label="*" onClick={appendValue} />
      <Button label="1" onClick={appendValue} />
      <Button label="2" onClick={appendValue} />
      <Button label="3" onClick={appendValue} />
      <Button label="-" onClick={appendValue} />
      <Button label="0" onClick={appendValue} />
      <Button label="." onClick={appendValue} />
      <Button label="=" onClick={calculate} className="calculate" />
    </div>
  );
}

export default ButtonPanel;
