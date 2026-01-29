import OnClickEventListener from "./OnClickEventListener";

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
  return (
    <div className="button-container">
      {buttons.map((button) => (
        <button className="button-style" key={button} onClick={() => OnClickEventListener(button)}>
          {button}
        </button>
      ))}
    </div>
  );
}

export default CalculatorButtons;
