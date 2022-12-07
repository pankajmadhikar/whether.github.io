let string = "";
let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    if (buttonText == "=") {
      string = eval(string);
      input.value = string;
    } else if (buttonText == "C") {
      string = "";
      input.value = string;
    } else if (buttonText == "X") {
      buttonText = "*";
      string = string + buttonText;
      input.value = string;
    } else {
      string = string + buttonText;
      input.value = string;
    }
  });
});
