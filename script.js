const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
const decimal = document.getElementById("decimal");
const operators = ["+", "-", "*", "/"];
const percentage = document.getElementById("percentage")
const toggle = document.getElementById("toggle")
const squareroot = document.getElementById("square-root")

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    const value = this.innerText;
    if (!isNaN(value)) {
      input.value += value;
    }
    else if (operators.indexOf(value) > -1) {
      if (operators.indexOf(input.value.slice(-1)) === -1) {
        input.value += value;
      }
    }
    else if (value === "CE") {
      input.value = "";
    }
    else if (value === "=") {
      const equation = input.value;
      input.value = eval(equation);
    }
    else if(value === "%") {
      input.value /=  100
    }
    else if(value === "+/-" ) {
      if (input.value.startsWith("-")) {
        input.value = input.value.substring(1);
      } else {
        input.value = "-" + input.value;
      }
    }

    else if(value === "√") {
        input.value = Math.sqrt(input.value);
    }
    else if (value === ".") {
      if (input.value.indexOf(".") === -1 &&
          operators.indexOf(input.value.slice(-1)) === -1) {
        input.value += value;
      }
    }
  });
}
