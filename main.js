const card = document.getElementById("card");
const open = document.getElementById("open");
const close = document.getElementById("close-button");
const closeWindow = document.querySelector(".close");

open.addEventListener("click", () => {
  card.classList.add("show");
});

close.addEventListener("click", () => {
  card.classList.remove("show");
});

closeWindow.addEventListener("click", () => {
  card.classList.remove("show");
});
