// Variables which determine the properties of the display and the current calculation
let displayValue = 0;
let totalValue = "t";
const calcDisplay = document.querySelector("#display");
let numberStatus;
let symbolNeutral = "n";
let currentSymbol = symbolNeutral;
let symbolPlus = "p";
let symbolMinus = "m";
let symbolMultiply = "x";
let symbolDivide = "d";
let result = "r";

// Cancels the calculation and resets the display to zero
const handleCancel = () => {
  calcDisplay.innerText = "0";
  displayValue = 0;
  totalValue = "t";
  currentSymbol = symbolNeutral;
  result = "r";
};

// Handles number entry
const handleNumberEntry = (event) => {
  if (
    numberStatus === "add" &&
    displayValue != 0 &&
    calcDisplay.innerText != totalValue
  ) {
    calcDisplay.innerText = calcDisplay.innerText + event.target.innerText;
  } else {
    calcDisplay.innerText = event.target.innerText;
  }
  displayValue = parseFloat(calcDisplay.innerText);
  numberStatus = "add";
};

// Handles symbol entry
const handleSymbolEntry = (event) => {
  switch (event.target.id) {
    case "plus":
      currentSymbol = symbolPlus;
      break;
    case "minus":
      currentSymbol = symbolMinus;
      break;
    case "multiply":
      currentSymbol = symbolMultiply;
      break;
    case "divide":
      currentSymbol = symbolDivide;
      break;
  }
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
};

// Handles the entry of numerical buttons via click events
const btnNumbers = document.querySelectorAll(".calc__btn--num");
btnNumbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    handleNumberEntry(event);
  });
});

// Handles the entry of symbols via clicks
const btnSymbols = document.querySelectorAll(".calc__btn--symbol");
btnSymbols.forEach((symbol) => {
  symbol.addEventListener("click", (event) => {
    if (result != totalValue) {
      handleCalculation(currentSymbol);
    }
    handleSymbolEntry(event);
  });
});

// Displays the result on the screen & controls the behaviour of equals button
const handleResult = () => {
  handleCalculation(currentSymbol);
  calcDisplay.innerText = totalValue;
  result = totalValue;
  numberStatus = "replace";
};

// Sources the numarical value of number buttons
// let currentInteger;
// switch (event.target.id) {
//   case "zero":
//     currentInteger = 0;
//     break;
//   case "one":
//     currentInteger = 1;
//     break;
//   case "two":
//     currentInteger = 2;
//     break;
//   case "three":
//     currentInteger = 3;
//     break;
//   case "four":
//     currentInteger = 4;
//     break;
//   case "five":
//     currentInteger = 5;
//     break;
//   case "six":
//     currentInteger = 6;
//     break;
//   case "seven":
//     currentInteger = 7;
//     break;
//   case "8":
//     currentInteger = 8;
//     break;
//   case "9":
//     currentInteger = 9;
//     break;
// }
