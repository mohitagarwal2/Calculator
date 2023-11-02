console.log("mohit");
// let userInput = [];

let display = document.querySelector(".display input");
let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const value = button.value;
    if (value === "AC") {
      // Clear the display
      display.value = "";
    } else if (value === "DE") {
      // Delete the last character
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      // Evaluate the expression and display the result
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    } else {
      // Append the button value to the display
      display.value += value;
    }
  });
});
