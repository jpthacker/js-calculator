// Variables which determine the properties of the display and the current calculation
let displayVisible;
let displayHidden;
const calcDisplay = document.querySelector("#display");

let symbolNeutral;
let currentSymbol;
const symbolPlus = displayHidden + displayVisible;
const symbolMinus = displayHidden - displayVisible;
const symbolMultiply = displayHidden * displayVisible;
const symbolDivide = displayHidden / displayVisible;

// Cancels the calculation and resets the display to zero
const handleCancel = () => {
  calcDisplay.innerText = "0";
  displayVisible = 0;
  displayHidden = 0;
  currentSymbol = symbolNeutral;
};

// Handles the entry of symbols (i.e., queues up the calculation)
// const btnSymbols = document.querySelectorAll(".calc__btn--symbol");
// btnSymbols.forEach((symbol) => {
//   symbol.addEventListener("click", (event) => {
//     displayHidden = displayHidden += displayVisible;
//     switch (event.target.innerText) {
//       case "+":
//         currentSymbol = symbolPlus;
//         break;
//       case "-":
//         currentSymbol = symbolMinus;
//         break;
//       case "×":
//         currentSymbol = symbolMultiply;
//         break;
//       case "÷":
//         currentSymbol = symbolDivide;
//         break;
//     }
//     console.log(currentSymbol);
//   });
// });
