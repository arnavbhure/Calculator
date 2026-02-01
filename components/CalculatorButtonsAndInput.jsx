import { useState } from "react";

const buttons = [
  "AC",
  "0",
  "1",
  "Back",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "-",
  "+",
  "/",
  "*",
  "="
];

function CalculatorButtons() {

let [currentInput , setCurrentInput] = useState("");

const OnClickEventListener = (button) =>{
  if(button==="AC")
  {
    setCurrentInput("");
  }
  else if(button==="Back")
  {
    setCurrentInput(prev => prev.slice(0,-1));
  }
  else if(button==="=")
  {
    let result = eval(currentInput);
    setCurrentInput(result);
  }
  else {
    currentInput += button;
    setCurrentInput(currentInput);
  }
    
}
  return (
    <>
      <div className="calculation-input">
            <input type="text" className="calculation-input-box" value={currentInput} readOnly/>
      </div>
      <div className="button-container">
        {buttons.map((button) => (
          <button className="button-style" key={button} onClick={() => OnClickEventListener(button)}>
            {button}
          </button>
        ))}
      </div>

    </>
  );
}

export default CalculatorButtons;
