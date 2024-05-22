var btn = document.getElementById("click-btn");
var cancelBtn = document.getElementById("cancel-btn");
var container = document.getElementById("input-container");

btn.addEventListener("click", function () {
  container.style.display = "block";
  btn.style.display = "none";
});

cancelBtn.addEventListener("click", function () {
  container.style.display = "none";
  btn.style.display = "block";
});
