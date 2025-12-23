const slider = document.getElementById("slider");
const overlay = document.querySelector(".overlay");

slider.addEventListener("input", () => {
  overlay.style.width = slider.value + "%";
});
