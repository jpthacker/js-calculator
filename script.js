// Variables which determine the properties of the display and the current calculation
const calcDisplay = document.querySelector("#display");
let displayValue = 0;
let totalValue = "t";
let numberStatus = "replace";
let symbolNeutral = "n";
let currentSymbol = symbolNeutral;
let symbolPlus = "p";
let symbolMinus = "m";
let symbolMultiply = "x";
let symbolDivide = "d";
let result = "r";

//Handles long entires and results
const handleDisplayOverflow = () => {
  if (calcDisplay.innerText.length > 7) {
    calcDisplay.classList.add("long");
  } else {
    calcDisplay.classList.remove("long");
  }
};

// Handles number entry
const handleNumberEntry = (btn) => {
  console.log(numberStatus);
  if (numberStatus === "add" && calcDisplay.innerText != totalValue) {
    calcDisplay.innerText = calcDisplay.innerText + btn.innerText;
  } else {
    calcDisplay.innerText = btn.innerText;
  }
  displayValue = parseFloat(calcDisplay.innerText);
  numberStatus = "add";
  handleDisplayOverflow();
};

const handleNumberEntryKeyPress = (number) => {
  console.log(numberStatus);
  if (numberStatus === "add" && calcDisplay.innerText != totalValue) {
    calcDisplay.innerText = calcDisplay.innerText + number.innerText;
  } else {
    calcDisplay.innerText = number.innerText;
  }
  displayValue = parseFloat(calcDisplay.innerText);
  numberStatus = "add";
  handleDisplayOverflow();
};

// Handles symbol entry via click
const handleSymbolEntry = (btn) => {
  switch (btn.id) {
    case "+":
      currentSymbol = symbolPlus;
      break;
    case "-":
      currentSymbol = symbolMinus;
      break;
    case "*":
      currentSymbol = symbolMultiply;
      break;
    case "/":
      currentSymbol = symbolDivide;
      break;
  }
  handleDisplayOverflow();
};

// Runs the calculation depending on the symbol pressed
const handleCalculation = (symbol) => {
  numberStatus = "replace";
  result = "r";
  if (totalValue === "t") {
    totalValue = displayValue;
  }
  switch (symbol) {
    case symbolPlus:
      totalValue = totalValue += displayValue;
      break;
    case symbolMinus:
      totalValue = totalValue -= displayValue;
      break;
    case symbolMultiply:
      totalValue = totalValue * displayValue;
      break;
    case symbolDivide:
      totalValue = totalValue / displayValue;
      break;
  }
  calcDisplay.innerText = totalValue;
};

// Handles numerical buttons via click or keypress
const btnNumbers = document.querySelectorAll(".calc__btn--num");
btnNumbers.forEach((number) => {
  number.addEventListener("click", () => {
    handleNumberEntry(number);
  });
  document.body.addEventListener("keydown", (event) => {
    if (event.key === number.innerHTML) {
      handleNumberEntry(number);
    }
  });
});

// Handles the entry of symbols and performs the current calculation
const btnSymbols = document.querySelectorAll(".calc__btn--symbol");
btnSymbols.forEach((symbol) => {
  symbol.addEventListener("click", () => {
    if (result != totalValue) {
      handleCalculation(currentSymbol);
    }
    handleSymbolEntry(symbol);
  });
  document.body.addEventListener("keydown", (event) => {
    if (event.key === symbol.id) {
      if (result != totalValue) {
        handleCalculation(currentSymbol);
      }
      handleSymbolEntry(symbol);
    }
  });
});

// Displays the result on the screen & handles the equals button
const handleResult = () => {
  handleCalculation(currentSymbol);
  calcDisplay.innerText = totalValue;
  result = totalValue;
  numberStatus = "replace";
  handleDisplayOverflow();
};

// Event listerner for equals button on click and keypress
const equalsBtn = document.querySelector(".calc__btn--equals");
equalsBtn.addEventListener("click", handleResult);
document.body.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.key === "Enter") {
    handleResult();
  }
});

// Cancels the calculation and resets the display to zero
const handleCancel = () => {
  calcDisplay.innerText = "0";
  displayValue = 0;
  totalValue = "t";
  currentSymbol = symbolNeutral;
  result = "r";
  numberStatus = "replace";
  calcDisplay.classList.remove("long");
};
// Event listerner for equals button on click and keypress
const cancelBtn = document.querySelector(".calc__btn--cancel");
cancelBtn.addEventListener("click", handleCancel);
document.body.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.key === "c") {
    handleCancel();
  }
});
