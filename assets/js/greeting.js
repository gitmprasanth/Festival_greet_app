
const greeterNameEl = document.querySelector("#greeter");


const url = new URL(window.location.href);
const name = url.searchParams.get("name");

if (name) {
  // Display that value on UI.
  greeterNameEl.textContent = name;
} else {
  location.href = "http://127.0.0.1:5500/greeting.html?name=";
}