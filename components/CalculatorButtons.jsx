const buttons = [
  "AC",
  "0",
  "1",
  "<-",
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
];

function CalculatorButtons() {
  return (
    <div className="button-container">
      {buttons.map((button, index) => (
        <button className="button-style" key={index}>
          {button}
        </button>
      ))}
    </div>
  );
}

export default CalculatorButtons;
