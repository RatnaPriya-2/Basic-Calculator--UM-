const buttons = [
  "C",
  "DEL",
  "^",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

const calculatorButtons = document.querySelector(".calculator-buttons");
const inputField = document.querySelector(".input-box");

function isANumber(value) {
  return !isNaN(value); // check if value is a number
}
let isCalculated = false; // flag to track if result was just calculated

let expression = ""; // expression that user is building

const handleButtonClick = (e) => {
  let buttonValue = e.target.innerText; // get text of clicked button

  // If first input is ".", convert to "0."
  if (expression === "" && buttonValue === ".") {
    expression = "0.";
    inputField.value = expression;
  }
  // Prevent expression starting with operator (except number and dot case handled later)
  if (
    expression === "" &&
    !isANumber(buttonValue) &&
    inputField.value !== "Error"
  ) {
    return;
  }

  // Clear button
  if (buttonValue === "C") {
    inputField.value = ""; // clear display
    expression = ""; // clear expression
  }

  // Delete button
  if (buttonValue === "DEL") {
    console.log(isCalculated);
    if (isCalculated) {
      // if result was just shown, DEL clears whole expression
      expression = "";
      inputField.value = expression;
      return;
    }
    expression = expression.slice(0, -1); // remove last character
    inputField.value = expression;
  }

  // Equals button
  if (buttonValue === "=") {
    let lastEntry = expression.slice(-1); // check last character
    // Avoid evaluating if last entry is operator or dot
    if (["+", "-", "*", "/", ".", "^"].includes(lastEntry)) {
      inputField.value = "Error";
      expression = "";
      return;
    }

    // convert ^ to ** for JS exponent operator
    if (expression.includes("^")) {
      expression = expression.replaceAll("^", "**");
    }

    try {
      console.log(expression);
      let result = eval(expression); // evaluate math expression

      if (!isFinite(result)) {
        inputField.value = "Error";
        expression = ""; // reset on error
        return;
      }
      // if integer keep as is, else round to 2 decimals
      if (parseInt(result) - result === 0) {
        expression = result.toString();
      } else {
        expression = eval(expression).toFixed(2);
      }
      inputField.value = expression; // show result
      isCalculated = true; // mark calculation done
    } catch (error) {
      inputField.value = "Error";
      expression = ""; // reset on error
    }
  }

  // Handle all buttons except =, C, DEL
  if (buttonValue !== "=" && buttonValue !== "C" && buttonValue !== "DEL") {
    if (isCalculated && isANumber(buttonValue)) {
      expression = ""; // start new expression after result if number pressed
    }

    let lastEntry = expression.slice(-1); // last character

    // Prevent two operators in a row
    if (!isANumber(lastEntry) && !isANumber(buttonValue)) {
      return;
    }
    if (expression !== "" && buttonValue === ".") {
      let lastNumber = expression.split(/[\+\*\-\/\^]/).pop(); // get last number segment
      if (lastNumber.includes(".")) {
        return; // already has a dot
      }
    }

    expression += buttonValue; // append pressed value
    inputField.value = expression; // update display
    isCalculated = false;
  }
};

// Generate buttons dynamically
buttons.forEach((button) => {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = button;

  // Style number buttons differently
  if (isANumber(button) || button === ".") {
    buttonElement.classList.add("number-button");
  } else {
    buttonElement.classList.add("operator-button");
  }

  // Give "=" special ID
  if (button === "=") {
    buttonElement.id = "equal-sign";
  }

  calculatorButtons.appendChild(buttonElement); // add to UI
});

// Add click listeners to all buttons
let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  e.preventDefault(); // block default browser actions (like backspace navigation)
  let key = e.key;

  if (key === "Enter") key = "="; // Enter = "="
  if (key === "Backspace") key = "DEL"; // Backspace = DEL
  if (key === "Escape") key = "C"; // Esc = C (clear)

  // If key is one of our buttons, trigger same handler
  if (buttons.includes(key)) {
    handleButtonClick({ target: { innerText: key } });
  }
});
