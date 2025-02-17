const button = document.querySelector("#button")

/* const onClick = function() {
  disclaimer.innerHTML = "This event will be the best night ever!"
}
*/
const disclaimer = document.querySelector("#disclaimer");

const onClick = function() {
  if (disclaimer.innerHTML === "") {
    disclaimer.innerHTML = "This event will be the best night ever!";
  } else {
    disclaimer.innerHTML = "";
  }
}

button.addEventListener("click", onClick)
