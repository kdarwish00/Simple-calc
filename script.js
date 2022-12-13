/* JavaScript for adding functionality to the calculator */
const input = document.getElementById("input");
const buttons = document.querySelectorAll("#buttons button");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
const decimal = document.getElementById("decimal");
const operators = ["+", "-", "*", "/"];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // Get the button's value
    const value = this.innerText;
    // If the value is a number, append it to the input field
    if (!isNaN(value)) {
      input.value += value;
    }
    // If the value is an operator, append it to the input field
    // unless the last character in the input field is already
    // an operator, in which case do nothing
    else if (operators.indexOf(value) > -1) {
      if (operators.indexOf(input.value.slice(-1)) === -1) {
        input.value += value;
      }
    }
    // If the value is the clear button, clear the input field
    else if (value === "CE") {
      input.value = "";
    }
    // If the value is the equals button, perform the calculation
    // and display the result
    else if (value === "=") {
      const equation = input.value;
      input.value = eval(equation);
    }
    // If the value is the decimal button, add a decimal point
    // to the input field unless one already exists or the
    // last character in the input field is an operator
    else if (value === ".") {
      if (input.value.indexOf(".") === -1 &&
          operators.indexOf(input.value.slice(-1)) === -1) {
        input.value += value;
      }
    }
    else if (value === "%") {
        input.value / 100
    }
  });
}
