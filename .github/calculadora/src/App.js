import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/Display";
import ButtonPanel from "./components/buttonPanel";
import DarkToggle from "./components/DarkToggle";

function App() {
  const [expression, setExpression] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  function clearDisplay() {
    setExpression("");
  }

  const backspace = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      const result = evaluateExpression(expression);
      setExpression(result.toString());
    } catch {
      setExpression("Error");
    }
  };

  const evaluateExpression = (expr) => {
    expr = expr.replace(/\s+/g, "");
    const output = [];
    const operators = [];
    const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };
    let numberBuffer = "";

    for (let i = 0; i < expr.length; i++) {
      const char = expr[i];
      if (/\d|\./.test(char)) {
        numberBuffer += char;
      } else if (char in precedence) {
        if (numberBuffer) {
          output.push(parseFloat(numberBuffer));
          numberBuffer = "";
        }
        while (
          operators.length &&
          precedence[char] <= precedence[operators[operators.length - 1]]
        ) {
          output.push(operators.pop());
        }
        operators.push(char);
      }
    }
    if (numberBuffer) output.push(parseFloat(numberBuffer));
    while (operators.length) output.push(operators.pop());

    const stack = [];
    for (const token of output) {
      if (typeof token === "number") {
        stack.push(token);
      } else {
        const b = stack.pop();
        const a = stack.pop();
        switch (token) {
          case "+":
            stack.push(a + b);
            break;
          case "-":
            stack.push(a - b);
            break;
          case "*":
            stack.push(a * b);
            break;
          case "/":
            stack.push(a / b);
            break;
        }
      }
    }
    return stack[0];
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const appendValue = (value) => {
    setExpression((prev) => prev + value);
  };

  return (
  <div className="main-container">
    <div className={`heading ${darkMode ? "dark" : ""}`}>CALCULATOR</div>
    <div className={`calculator ${darkMode ? "dark" : ""}`}>
      <div className="top-bar">
        <DarkToggle toggleDarkMode={toggleDarkMode} />
        <Display value={expression} />
      </div>
      <ButtonPanel
        appendValue={appendValue}
        clearDisplay={clearDisplay}
        backspace={backspace}
        calculate={calculate}
      />
    </div>
  </div>
);
}

export default App;

