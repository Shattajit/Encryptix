let input = document.getElementById("input");

let buttons = document.querySelectorAll("button");

let arr = Array.from(buttons);
let string = "";

arr.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.innerHTML === "=") {
      console.log(event.target.innerHTML);
      string = eval(string);
      console.log(string);
      input.value = string;
    } else if (event.target.innerHTML === "AC") {
      string = "";
      input.value = string;
    } else if (event.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += event.target.innerHTML;
      input.value = string;
      console.log(string);
    }
  });
});
