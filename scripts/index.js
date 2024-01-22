import info from "../secret.mjs";

const logInBtn = document.getElementById("log-in-btn");
const logInBox = document.getElementById("log-in-box");

const closeBtn = document.getElementById("close-btn");
const submitBtn = document.getElementById("submit-btn");

const username = document.getElementById("username");
const password = document.getElementById("password");

closeBtn.addEventListener("click", () => {
  logInBox.style.scale = 0;
});

logInBtn.addEventListener("click", () => {
  logInBox.style.scale = 1;
});

submitBtn.addEventListener("click", () => {
  if (username.value == info.user && password.value == info.pass) {
    console.log(username.value, password.value);
  }
});
