const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.eddEventListener("input", (event) => {
  output.textContent = event.currentTarget.value.trim()
    ? event.currentTarget.value
    : "Anonymous";
});
